// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Document } from "@blockflow-labs/utils";

export class Transaction {
  static entity = "Transaction";
  static schema = {
    id: { type: "String", index: true },
    transactionHash: "string",
    gasPrice: "string",
    gasLimit: "string",
    userOpHashes: ["string"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Block {
  static entity = "Block";
  static schema = {
    id: { type: "String", index: true },
    transactionHashesWithUserOps: ["string"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class AccountFactory {
  static entity = "AccountFactory";
  static schema = {
    id: { type: "String", index: true },
    totalAccount: "Number",
    accounts: ["String"],
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Account {
  static entity = "Account";
  static schema = {
    id: { type: "String", index: true },
    ops: ["String"],
    paymaster: "String",
    createdAt: "String",
    updatedAt: "String",
    createdHash: "String",
    createdOpHash: "String",
    totalOperations: "String",
    factory: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Blockchain {
  static entity = "Blockchain";
  static schema = {
    id: { type: "String", index: true },
    totalAccount: "String",
    totalOperations: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Paymaster {
  static entity = "Paymaster";
  static schema = {
    id: { type: "String", index: true },
    ops: ["String"],
    createdAt: "String",
    updatedAt: "String",
    totalOperations: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class Bundler {
  static entity = "Bundler";
  static schema = {
    id: { type: "String", index: true },
    ops: ["String"],
    createdAt: "String",
    updatedAt: "String",
    totalOperations: "Number",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class UserOperationRevertReason {
  static entity = "UserOperationRevertReason";
  static schema = {
    id: { type: "String", index: true },
    sender: "String",
    nonce: "Number",
    reason: "String",
    txHash: "String",
    block: "String",
    createdAt: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export class UserOperation {
  static entity = "UserOperation";
  static schema = {
    id: { type: "String", index: true },
    txHash: "String",
    block: "String",
    bundler: "String",
    sender: "String",
    paymaster: "String",
    nonce: "Number",
    success: "Boolean",
    actualGasCost: "Number",
    actualGasUsed: "Number",
    createdAt: "String",
    entryPoint: "String",
    network: "String",
    initCode: "string",
    callData: "string",
    callGasLimit: "string",
    verificationGasLimit: "string",
    preVerificationGas: "string",
    maxFeePerGas: "string",
    maxPriorityFeePerGas: "string",
    paymasterAndData: "string",
    signature: "string",
    beneficiary: "string",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
  };
}

export interface ITransaction extends Document {
  id: string; // keep this same as transaction hash
  transactionHash: string;
  gasPrice: string;
  gasLimit: string;
  userOpHashes: [string];
  blocknumber: String;
  entityId: String;
}

export interface IBlock extends Document {
  id: string; // keep this same as block number
  transactionHashesWithUserOps: [string];
  blocknumber: String;
  entityId: String;
}

export interface IAccountFactory extends Document {
  id: String;
  totalAccount: Number;
  accounts: [String];
  blocknumber: String;
  entityId: String;
}

export interface IAccount extends Document {
  id: String;
  ops: [String];
  paymaster: String;
  createdAt: String;
  updatedAt: String;
  createdHash: String;
  createdOpHash: String;
  totalOperations: String;
  factory: String;
  blocknumber: String;
  entityId: String;
}

export interface IBlockchain extends Document {
  id: String;
  totalAccount: String;
  totalOperations: String;
  blocknumber: String;
  entityId: String;
}

export interface IPaymaster extends Document {
  id: String;
  ops: [String];
  createdAt: String;
  updatedAt: String;
  totalOperations: String;
  blocknumber: String;
  entityId: String;
}

export interface IBundler extends Document {
  id: String;
  ops: [String];
  createdAt: String;
  updatedAt: String;
  totalOperations: Number;
  blocknumber: String;
  entityId: String;
}

export interface IUserOperationRevertReason extends Document {
  id: String;
  sender: String;
  nonce: Number;
  reason: String;
  txHash: String;
  block: String;
  createdAt: String;
  blocknumber: String;
  entityId: String;
}

export interface IUserOperation extends Document {
  // will get these from event data
  id: String; // userOp hash
  txHash: String;
  block: String;
  bundler: String;
  sender: String;
  paymaster: String;
  nonce: Number;
  success: Boolean;
  actualGasCost: Number;
  actualGasUsed: Number;
  createdAt: String;
  entryPoint: String;
  network: String;

  // Will get all these from function calldata
  initCode: string;
  callData: string;
  callGasLimit: string;
  verificationGasLimit: string;
  preVerificationGas: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  paymasterAndData: string;
  signature: string;
  beneficiary: string;
  blocknumber: String;
  entityId: String;
}
