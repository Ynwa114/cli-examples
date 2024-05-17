// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Document } from "@blockflow-labs/utils";

export class Destination {
  static entity = "Destination";
  static schema = {
    id: { type: "String", index: true },
    blocktimestamp: "Number",
    blockNumber: "Number",
    chainId: { type: "String", index: true },
    transactionHash: "String",
    destnationtoken: { address: "String", amount: "String", symbol: "String" },
    stableToken: { address: "String", amount: "String", symbol: "String" },
    recipientAddress: "String",
    receiverAddress: "String",
    paidId: "String",
    forwarderAddress: "String",
    messageHash: "String",
    execFlag: "Boolean",
    execData: "String",
    usdValue: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class Source {
  static entity = "Source";
  static schema = {
    id: { type: "String", index: true },
    blocktimestamp: "Number",
    blockNumber: "Number",
    chainId: { type: "String", index: true },
    transactionHash: "String",
    sourcetoken: { address: "String", amount: "String", symbol: "String" },
    stableToken: { address: "String", amount: "String", symbol: "String" },
    depositorAddress: "String",
    senderAddress: "String",
    depositId: "String",
    messageHash: "String",
    partnerId: "String",
    message: "String",
    usdValue: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class FeeInfo {
  static entity = "FeeInfo";
  static schema = {
    id: { type: "String", index: true },
    feeToken: { address: "String", amount: "String", symbol: "String" },
    usdValue: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class DepositInfoUpdate {
  static entity = "DepositInfoUpdate";
  static schema = {
    id: { type: "String", index: true },
    updateId: "String",
    isWithdraw: "Boolean",
    transactionHash: "String",
    refundOutboundId: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class RefuelInfo {
  static entity = "RefuelInfo";
  static schema = {
    id: { type: "String", index: true },
    nativeToken: { amount: "String", symbol: "String" },
    nativeRecipient: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class ExtraInfo {
  static entity = "ExtraInfo";
  static schema = {
    id: { type: "String", index: true },
    flowType: "String",
    gasFeeUsd: "String",
    bridgeFeeUsd: "String",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

type native = {
  amount: String;
  symbol: String;
};

type Token = {
  address: String;
  amount: String;
  symbol: String;
};

export interface IDestination extends Document {
  id: String;
  blocktimestamp: Number;
  blockNumber: Number;
  chainId: String;
  transactionHash: String;
  destnationtoken: Token;
  stableToken: Token;
  recipientAddress: String;
  receiverAddress: String;
  paidId: String;
  forwarderAddress: String;
  messageHash: String;
  execFlag: Boolean;
  execData: String;
  usdValue: String;
  blocknumber: String;
  entityId: String;
  instanceId: String;
}

export interface ISource extends Document {
  id: String;
  blocktimestamp: Number;
  blockNumber: Number;
  chainId: String;
  transactionHash: String;
  sourcetoken: Token;
  stableToken: Token;
  depositorAddress: String;
  senderAddress: String;
  depositId: String;
  messageHash: String;
  partnerId: String;
  message: String;
  usdValue: String;
  blocknumber: String;
  entityId: String;
  instanceId: String;
}

// difference between src and destination
export interface IFeeInfo extends Document {
  id: String;
  feeToken: Token;
  usdValue: String;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}

//DepositInfoUpdate
export interface IDepositInfoUpdate extends Document {
  id: String;
  updateId: String;
  isWithdraw: Boolean;
  transactionHash: String;
  refundOutboundId: String;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}

// GasLeaked, emitted with fundPaidWithMessage
export interface IRefuelInfo extends Document {
  id: String;
  nativeToken: native;
  nativeRecipient: String;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}

type competitorData = {
  gasFeeUsd: String;
  bridgeFeeUsd: String;
  time: String;
};

export interface IExtraInfo extends Document {
  id: String;
  flowType: String;
  gasFeeUsd: String;
  bridgeFeeUsd: String;
  // competitorData: competitorData;
  // Partner info from middle-ware contract
  // sys_fee: String;
  // partner_fee: String;
  // forwarder_fee: String;
  // expiry_timestamp: Number;
  blocknumber: String;
  entityId: String;
  instanceId: String;
  chainId: String;
}
