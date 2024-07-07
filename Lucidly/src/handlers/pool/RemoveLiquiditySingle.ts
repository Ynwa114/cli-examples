import {
  IEventContext,
  IBind,
  Instance,
  ISecrets,
} from "@blockflow-labs/utils";

import { RemoveLiquidity, IRemoveLiquidity } from "../../types/schema";

/**
 * @dev Event::RemoveLiquiditySingle(address caller, address receiver, uint256 token, uint256 amountOut, uint256 lpAmount)
 * @param context trigger object with contains {event: {caller ,receiver ,token ,amountOut ,lpAmount }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const RemoveLiquiditySingleHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets
) => {
  // Implement your event handler logic for RemoveLiquiditySingle here

  const { event, transaction, block, log } = context;
  const { caller, receiver, token, amountOut, lpAmount } = event;

  const removeLiquidityDB: Instance = bind(RemoveLiquidity);

  const removeLiquidityId =
    `${transaction.transaction_hash.toString()}-${log.log_index.toString()}`.toLowerCase();

  let removeLiquidity: IRemoveLiquidity = await removeLiquidityDB.findOne({
    id: removeLiquidityId,
  });

  console.log(amountOut.toString());

  console.log(token.toString());

  removeLiquidity ??= await removeLiquidityDB.create({
    id: removeLiquidityId,

    receiver: receiver.toString(),

    type: "single",

    addressToken: token.toString(),

    amount: amountOut.toString(),

    lpAmount: lpAmount.toString(),

    transaction_hash: transaction.transaction_hash.toString(),
    block_timestamp: block.block_timestamp.toString(),
  });

  await removeLiquidityDB.save(removeLiquidity);
};
