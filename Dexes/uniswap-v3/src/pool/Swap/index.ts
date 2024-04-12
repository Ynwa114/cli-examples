import { BigNumber } from "bignumber.js";
import { IEventContext, IBind, ISecrets } from "@blockflow-labs/utils";

import { User, IUser } from "../../types/schema";

/**
 * @dev Event::Swap(address sender, address recipient, int256 amount0, int256 amount1, uint160 sqrtPriceX96, uint128 liquidity, int24 tick)
 * @param context trigger object with contains {event: {sender ,recipient ,amount0 ,amount1 ,sqrtPriceX96 ,liquidity ,tick }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const SwapHandler = async (
  context: IEventContext,
  bind: IBind,
  secrets: ISecrets
) => {
  // Implement your event handler logic for Swap here
  const { event, transaction, block, log } = context;
  const { sender, recipient, amount0, amount1, sqrtPriceX96, liquidity, tick } =
    event;

  const userDB = bind(User);

  let user: IUser = await userDB.findOne({ id: recipient.toLowerCase() });
  user ??= await userDB.create({ id: recipient.toLowerCase() });

  user.points = new BigNumber(user.points || "0").plus(1).toString();
  user.swapsTxId.push(transaction.transaction_hash);

  await userDB.save(user);
};
