import {
  IEventContext,
  IBind,
  Instance,
  ISecrets,
} from "@blockflow-labs/utils";

import { Deposit, IDeposit } from "../../types/schema";

/**
 * @dev Event::AddLiquidity(address caller, address receiver, uint256[] amountsIn, uint256 lpAmount)
 * @param context trigger object with contains {event: {caller ,receiver ,amountsIn ,lpAmount }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const AddLiquidityHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets,
) => {
  // Implement your event handler logic for AddLiquidity here

  const { event, transaction, block, log } = context;
  const { caller, receiver, amountsIn, lpAmount } = event;

  const depositDB: Instance = bind(Deposit);

  const depositId =
    `${transaction.transaction_hash.toString()}-${log.log_index.toString()}`.toLowerCase();

  let deposit: IDeposit = await depositDB.findOne({ id: depositId });

  deposit ??= await depositDB.create({
    id: depositId,

    receiver: receiver.toString(),

    lpAmount: lpAmount.toString(),

    transaction_hash: transaction.transaction_hash.toString(),
    block_timestamp: block.block_timestamp.toString(),
  });

  await depositDB.save(deposit);
};
