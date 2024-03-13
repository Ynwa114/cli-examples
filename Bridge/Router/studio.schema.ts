import { String, Array } from "@blockflow-labs/utils";

export interface CrossTransferSrc {
  id: string; // receipt_chainId
  chainId: string;
  partnerId: string;
  depositId: string;
  depositor: string;

  srcTxHash: string;
  srcBlockNumber: string;
  srcTokenAmount: string;
  senderAddress: string;
  srcTxTime: string;
  srcTxStatus: string;
  srcChain: string;

  dstChain: string;
  dstToken: string;
  dstTokenAmount: string;
}

export interface CrossTransferDst {
  id: string;
  chainId: string;

  depositId: string;
  destToken: string;
  dstAmount: string;
  srcChain: string;
  dstTxHash: string;
  dstTxTime: string;
  dstTxStatus: boolean;
}
