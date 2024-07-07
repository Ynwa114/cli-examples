import {
  IEventContext,
  IBind,
  Instance,
  ISecrets,
} from "@blockflow-labs/utils";

import { Swap, ISwap } from "../../types/schema";

/**
 * @dev Event::Swap(address caller, address receiver, uint256 tokenIn, uint256 tokenOut, uint256 amountIn, uint256 amountOut)
 * @param context trigger object with contains {event: {caller ,receiver ,tokenIn ,tokenOut ,amountIn ,amountOut }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const SwapHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets,
) => {
  // Implement your event handler logic for Swap here

  const { event, transaction, block, log } = context;
  const { caller, receiver, tokenIn, tokenOut, amountIn, amountOut } = event;

  const swapDB: Instance = bind(Swap);

  const swapId =
    `${transaction.transaction_hash.toString()}-${log.log_index.toString()}`.toLowerCase();

  let swap: ISwap = await swapDB.findOne({ id: swapId });

  swap ??= await swapDB.create({
    id: swapId,

    receiver: receiver.toString(),

    tokenIn: tokenIn.toString(),
    tokenOut: tokenOut.toString(),

    amountIn: amountIn.toString(),
    amountOut: amountOut.toString(),

    transaction_hash: transaction.transaction_hash.toString(),
    block_timestamp: block.block_timestamp.toString(),
  });

  await swapDB.save(swap);
};
