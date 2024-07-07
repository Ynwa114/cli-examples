import { String } from "@blockflow-labs/utils";

export interface Swap {
  id: String;

  caller: String;
  receiver: String;

  tokenIn: String;
  tokenOut: String;

  amountIn: String;
  amountOut: String;

  block_timestamp: string;
  transaction_hash: string;
  transaction_index: string;
  log_index: string;
}

export interface Deposit {
  id: String;

  caller: String;
  receiver: String;

  lpAmount: String;

  block_timestamp: string;
  transaction_hash: string;
  transaction_index: string;
  log_index: string;
}

export interface RemoveLiquidity {
  id: String;

  caller: String;
  receiver: String;
  type: String;

  lpAmount: String;

  addressToken: String;

  amount: String;

  block_timestamp: string;
  transaction_hash: string;
  transaction_index: string;
  log_index: string;
}
