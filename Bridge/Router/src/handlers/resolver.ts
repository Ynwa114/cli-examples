import { Source } from "../types/schema";
import { nitroSchema } from "../utils/nitroSchema";

export function testResolvers(bind: any) {
  try {
    const resolvers: any = {
      Query: {},
    };

    for (const [collectionName, collectionSchema] of Object.entries(
      nitroSchema
    )) {
      resolvers.Query[collectionName] = async (_: any, args: any) => {
        const filter: any = {};
        const options: any = {};
        const schema_: any = {};
        collectionSchema.forEach((sch) => {
          schema_[sch.name] = { type: sch.type };
        });

        if (args.sortBy) {
          for (const [key, order] of Object.entries(args.sortBy) as any) {
            const fieldSchema = collectionSchema.find(
              (field) => field.name === key
            );
            if (!options["sort"]) options["sort"] = {};
            if (fieldSchema) options["sort"][key] = order === "asc" ? 1 : -1;
          }
        }

        if (args.limit) options["limit"] = args.limit;
        if (args.page) options["page"] = args.page;

        filter["entityId"] = collectionName;

        if (args.filter) {
          for (const [key, value] of Object.entries(args.filter) as any) {
            const [fieldName, operator] = key.split("_");
            const fieldSchema = collectionSchema.find(
              (field) => field.name === fieldName
            );
            if (fieldSchema) {
              switch (operator) {
                case undefined:
                  filter[fieldName] = mapToType(fieldSchema.type, value);
                  break;
                case "eq":
                  filter[fieldName] = mapToType(fieldSchema.type, value);
                  break;
                case "lt":
                  filter[fieldName] = {
                    $lt: mapToType(fieldSchema.type, value),
                  };
                  break;
                case "lte":
                  filter[fieldName] = {
                    $lte: mapToType(fieldSchema.type, value),
                  };
                  break;
                case "gt":
                  filter[fieldName] = {
                    $gt: mapToType(fieldSchema.type, value),
                  };
                  break;
                case "gte":
                  filter[fieldName] = {
                    $gte: mapToType(fieldSchema.type, value),
                  };
                  break;
                case "in":
                  filter[fieldName] = {
                    $in: value.map((val: any) =>
                      mapToType(fieldSchema.type, val)
                    ),
                  };
                  break;
                case "nin":
                  filter[fieldName] = {
                    $nin: value.map((val: any) =>
                      mapToType(fieldSchema.type, val)
                    ),
                  };
                  break;
                case "ne":
                  filter[fieldName] = {
                    $ne: mapToType(fieldSchema.type, value),
                  };
                  break;
              }
            }
          }
        }

        const api = bind(Source);
        delete filter.entityId;
        console.log("api", api);
        console.log("filter", filter);
        console.log("options", options);
        const data = await api.aggregate([
          // Initial match stage to apply find criteria
          {
            $match: {
              transactionHash:
                "0xbd44610b3cab590d26260b8161bf78c5fecf61e8951c790bc76edd1e92071a46",
            },
          },
          {
            $lookup: {
              from: "Token", // Assuming 'tokens' is the collection name for tokens
              localField: "sourceToken.tokenRef",
              foreignField: "_id",
              as: "sourceTokenDetails",
            },
          },
          {
            $unwind: {
              path: "$sourceTokenDetails",
              preserveNullAndEmptyArrays: true,
            },
          },
        ]);
        console.log("DATA", data);
        return data;
      };
    }

    return resolvers;
  } catch (error: any) {
    throw error;
  }
}

function mapToType(fieldType: any, value: any) {
  if (typeof fieldType === "string") {
    if (["String", "string"].includes(fieldType)) {
      return value;
    } else if (["Number", "number"].includes(fieldType)) {
      return Number(value);
    } else if (fieldType === "Boolean") {
      return value === "true" || value === true;
    } else if (fieldType === "Array") {
      return ["String"];
    }
  } else if (
    Array.isArray(fieldType) &&
    fieldType.length > 0 &&
    typeof fieldType[0] === "object"
  ) {
    return value.map((v: any) => mapObjectToType(v, fieldType[0]));
  }

  return value;
}

function mapObjectToType(obj: any, objectSchema: any) {
  const mappedObj: any = {};
  for (const [key, val] of Object.entries(obj)) {
    if (objectSchema[key]) {
      mappedObj[key] = mapToType(objectSchema[key].type, val);
    } else {
      mappedObj[key] = val; // Default fallback if schema not found
    }
  }
  return mappedObj;
}
