import { String } from "@blockflow-labs/utils";

export interface Swap {
  id: String;

  receiver: String;

  tokenIn: String;
  tokenOut: String;

  amountIn: String;
  amountOut: String;

  block_timestamp: string;
  transaction_hash: string;
}

export interface Deposit {
  id: String;

  receiver: String;

  lpAmount: String;

  block_timestamp: string;
  transaction_hash: string;
}

export interface RemoveLiquidity {
  id: String;

  receiver: String;
  type: String;

  lpAmount: String;

  addressToken: String;

  amount: String;

  block_timestamp: string;
  transaction_hash: string;
}
