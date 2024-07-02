// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Document } from "@blockflow-labs/utils";

export class TokensInfo {
  static entity = "TokensInfo";
  static schema = {
    id: { type: "String", index: true },
    chainId: { type: "String", index: true },
    address: "string",
    symbol: "string",
    decimals: "string",
    priceUsd: "number",
    priceRecordTimestamp: "number",
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class Destination {
  static entity = "Destination";
  static schema = {
    id: { type: "String", index: true },
    eventName: "String",
    blockTimestamp: "Number",
    blockNumber: "Number",
    chainId: { type: "String", index: true },
    transactionHash: "String",
    destinationToken: { tokenRef: "ObjectId", amount: "String" },
    stableToken: { tokenRef: "ObjectId", amount: "String" },
    recipientAddress: "String",
    receiverAddress: "String",
    paidId: "String",
    forwarderAddress: "String",
    messageHash: "String",
    execFlag: "Boolean",
    execData: "String",
    nativeTokenAmount: "String",
    depositId: "String",
    srcChainId: "String",
    srcRef: { recordRef: "ObjectId" },
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class Source {
  static entity = "Source";
  static schema = {
    id: { type: "String", index: true },
    eventName: "String",
    blockTimestamp: "Number",
    blockNumber: "Number",
    chainId: { type: "String", index: true },
    destChainId: "String",
    transactionHash: "String",
    sourceToken: { tokenRef: "ObjectId", amount: "String" },
    stableToken: { tokenRef: "ObjectId", amount: "String" },
    depositorAddress: "String",
    senderAddress: "String",
    depositId: "String",
    partnerId: "String",
    message: "String",
    usdValue: "Number",
    fee: { tokenRef: "ObjectId", amount: "String" },
    stableDestToken: { tokenRef: "ObjectId", amount: "String" },
    recipientAddress: "String",
    competitorData: {
      gasFeeUsd: "String",
      bridgeFeeUsd: "String",
      timeTaken: "String",
    },
    destRef: { recordRef: "ObjectId" },
    withdrawRef: { recordRef: "ObjectId" },
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    instanceId: { type: "String", index: true },
  };
}

export class DepositInfoUpdate {
  static entity = "DepositInfoUpdate";
  static schema = {
    id: { type: "String", index: true },
    eventName: "String",
    updateId: "String",
    isWithdraw: "Boolean",
    transactionHash: "String",
    refundOutboundId: "String",
    srcChainId: "String",
    depositId: "String",
    feeAmount: "String",
    srcRef: { recordRef: "ObjectId" },
    entityId: { type: "String", index: true },
    blocknumber: { type: "Number", index: true },
    chainId: { type: "String", index: true },
    instanceId: { type: "String", index: true },
  };
}

import { ObjectId } from "@blockflow-labs/utils";

export interface ITokensInfo extends Document {
  id: string;
  chainId: string;
  address: string;
  symbol: string;
  decimals: string;
  priceUsd: number;
  priceRecordTimestamp: number;
  blocknumber: String;
  entityId: String;
  instanceId: String;
}

type Token = {
  tokenRef: ObjectId;
  amount: String;
};

type RecordRef = {
  recordRef: ObjectId;
};

type CompetitorData = {
  gasFeeUsd: String;
  bridgeFeeUsd: String;
  timeTaken: String;
};

export interface IDestination extends Document {
  id: String;
  eventName: String;
  blockTimestamp: Number;
  blockNumber: Number;
  chainId: String;
  transactionHash: String;
  destinationToken: Token;
  stableToken: Token;
  recipientAddress: String;
  receiverAddress: String;
  paidId: String;
  forwarderAddress: String;
  messageHash: String;
  execFlag: Boolean;
  execData: String;
  nativeTokenAmount: String;
  depositId: String;
  srcChainId: String;
  srcRef: RecordRef;
  blocknumber: String;
  entityId: String;
  instanceId: String;
}

export interface ISource extends Document {
  id: String;
  eventName: String;
  blockTimestamp: Number;
  blockNumber: Number;
  chainId: String;
  destChainId: String;
  transactionHash: String;
  sourceToken: Token;
  stableToken: Token;
  depositorAddress: String;
  senderAddress: String;
  depositId: String;
  partnerId: String;
  message: String;
  usdValue: Number;
  fee: Token;
  stableDestToken: Token;
  recipientAddress: String;
  competitorData: CompetitorData;
  destRef: RecordRef;
  withdrawRef: RecordRef;
  blocknumber: String;
  entityId: String;
  instanceId: String;
}

//DepositInfoUpdate
export interface IDepositInfoUpdate extends Document {
  id: String;
  eventName: String;
  updateId: String;
  isWithdraw: Boolean;
  transactionHash: String;
  refundOutboundId: String;
  srcChainId: String;
  depositId: String;
  feeAmount: String;
  srcRef: RecordRef;
  blocknumber: String;
  entityId: String;
  instanceId: String;
}
