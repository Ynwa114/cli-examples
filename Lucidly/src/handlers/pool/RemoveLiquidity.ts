import {
  IEventContext,
  IBind,
  Instance,
  ISecrets,
} from "@blockflow-labs/utils";

import { RemoveLiquidity, IRemoveLiquidity } from "../../types/schema";

/**
 * @dev Event::RemoveLiquidity(address caller, address receiver, uint256 lpAmount)
 * @param context trigger object with contains {event: {caller ,receiver ,lpAmount }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const RemoveLiquidityHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets,
) => {
  // Implement your event handler logic for RemoveLiquidity here

  const { event, transaction, block, log } = context;
  const { caller, receiver, lpAmount } = event;

  const removeLiquidityDB: Instance = bind(RemoveLiquidity);

  const removeLiquidityId =
    `${transaction.transaction_hash.toString()}-${log.log_index.toString()}`.toLowerCase();

  let removeLiquidity: IRemoveLiquidity = await removeLiquidityDB.findOne({
    id: removeLiquidityId,
  });

  removeLiquidity ??= await removeLiquidityDB.create({
    id: removeLiquidityId,

    receiver: receiver.toString(),
    type: "all",

    lpAmount: lpAmount.toString(),

    transaction_hash: transaction.transaction_hash.toString(),
    block_timestamp: block.block_timestamp.toString(),
  });

  await removeLiquidityDB.save(removeLiquidity);
};
