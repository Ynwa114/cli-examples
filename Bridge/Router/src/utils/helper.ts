import { AbiCoder, keccak256, Interface } from "ethers";
import { list } from "./tokenlist";

export const SWAP_WITH_RECIPIENT_TOPIC0 =
  "0xc40fae9d5f584875c393ac222c6f88b6c9dced1e9cc6251483648ac2e902c8b0";
export const GASLEAKED_TOPIC0 =
  "0xb533c49a97624f1eac09c983a52eb3d79e537b2bbf90d5ad83bcb0a721a9afae";

export const SWAP_AND_DEPOSIT_SIGS = ["0x06135b7c", "0x87b47f11"];
const DEX_SPAN_ABI = [
  "event SwapWithRecipient(string indexed funcName, address[] tokenPath, uint256 amount, address indexed sender, address indexed receiver, uint256 finalAmt, uint256[] flags, uint256 widgetID)",
  "function swapAndDeposit(uint256 partnerId, bytes32 destChainIdBytes, bytes recipient, uint256 feeAmount, bytes message, bool isMessage, tuple(address[] tokens, uint256 amount, uint256 minReturn, uint256[] flags, bytes[] dataTx, bool isWrapper, address recipient, bytes destToken) swapData, address refundRecipient) payable",
  "function swapAndDeposit(uint256 partnerId, bytes32 destChainIdBytes, bytes recipient, uint8 depositType, uint256 feeAmount, bytes message, tuple(address[] tokens, uint256 amount, uint256 minReturn, uint256[] flags, bytes[] dataTx, bool isWrapper, address recipient, bytes destToken) swapData, address refundRecipient) payable",
];
const REFUEL_ABI = [
  "event GasLeaked(address ttoken, uint256 ttokenAmount, uint256 nativeAmount, address recipient)",
];

export enum EventNameEnum {
  FundsPaid = "FundsPaid",
  FundsDeposited = "FundsDeposited",
  FundsDepositedWithMessage = "FundsDepositedWithMessage",
  DepositInfoUpdate = "DepositInfoUpdate",
  FundsPaidWithMessage = "FundsPaidWithMessage",
  iUSDCDeposited = "iUSDCDeposited",
  MessageReceived = "MessageReceived",
  TokenTransfer = "TokenTransfer",
  TokenTransferWithInstruction = "TokenTransferWithInstruction",
  Execute = "Execute",
  ExecuteWithMessage = "ExecuteWithMessage",
  Swap = "Swap",
}

export type DepositData = {
  amount: any;
  srcChainId: string;
  depositId: string;
  destToken: string;
  recipient: string;
  contract: string;
};

export type DepositDataWithMessage = {
  amount: any;
  srcChainId: string;
  depositId: string;
  destToken: string;
  recipient: string;
  contract: string;
  message: string;
};

export function decodeSwapAndDeposit(input: string, value: string) {
  const iface = new Interface(DEX_SPAN_ABI);
  return iface.parseTransaction({ data: input, value })?.args;
}

export function decodeSwapWithRecipient(event: any) {
  const iface = new Interface(DEX_SPAN_ABI);
  return iface.parseLog({ topics: event.topics, data: event.log_data })?.args;
}

export function decodeGasLeaked(event: any) {
  const iface = new Interface(REFUEL_ABI);
  return iface.parseLog({ topics: event.topics, data: event.log_data })?.args;
}

// export const TransactionFlowType = Object.freeze({
//   ASSET_BRIDGE: "asset-bridge",
//   ASSET_FORWARDER: "asset-forwarder",
//   CIRCLE: "circle",
//   SAME_CHAIN: "same-chain",
//   NONE: "none",
// });

export function getChainId(network: string): string | null {
  switch (network.toLowerCase()) {
    case "ethereum":
      return "1";
    case "linea":
      return "59144";
    case "optimism":
      return "10";
    case "avalanche":
      return "43114";
    case "polygon":
      return "137";
    default:
      return null;
  }
}

export function getNetworkName(chainId: string): string {
  switch (chainId) {
    case "1":
      return "ethereum";
    case "59144":
      return "linea";
    case "10":
      return "optimism";
    case "43114":
      return "avalanche";
    case "137":
      return "polygon";
    default:
      return "";
  }
}

export function stringToHex(str: string): string {
  let hex = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    hex += code.toString(16).padStart(2, "0");
  }
  // Calculate the number of zero padding required to make the hex string 64 characters long
  const paddingLength = 64 - hex.length;
  // Append the required number of zeros
  hex = hex + "0".repeat(paddingLength);
  return "0x" + hex;
}

export function hexToString(hex: string) {
  // Remove the "0x" prefix if present
  hex = hex.replace(/^0x/, "");

  let str = "";
  for (let i = 0; i < hex.length; i += 2) {
    const code = parseInt(hex.slice(i, i + 2), 16);
    if (code !== 0) {
      str += String.fromCharCode(code);
    }
  }
  return str;
}

export function hashDepositDataWithMessage(
  data: DepositDataWithMessage,
): string {
  const coder = new AbiCoder();
  const encodedData = coder.encode(
    ["uint256", "bytes32", "uint256", "address", "address", "address", "bytes"],
    [
      data.amount,
      data.srcChainId,
      data.depositId,
      data.destToken,
      data.recipient,
      data.contract,
      data.message,
    ],
  );

  const hashedData = keccak256(encodedData);
  return hashedData;
}

export function hashDepositData(data: DepositData): string {
  const coder = new AbiCoder();
  const encodedData = coder.encode(
    ["uint256", "bytes32", "uint256", "address", "address", "address"],
    [
      data.amount,
      data.srcChainId,
      data.depositId,
      data.destToken,
      data.recipient,
      data.contract,
    ],
  );

  const hashedData = keccak256(encodedData);
  return hashedData;
}

export const chainToContract = (chain: string) => {
  switch (chain) {
    case "1":
      return "0xc21e4ebd1d92036cb467b53fe3258f219d909eb9";
    case "10":
      return "0x8201c02d4ab2214471e8c3ad6475c8b0cd9f2d06";
    case "59144":
      return "0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B";
    case "8453":
      return "0x0fa205c0446cd9eedcc7538c9e24bc55ad08207f";
    default:
      return "0x8c4acd74ff4385f3b7911432fa6787aa14406f8b";
  }
};

export function getTokenInfo(chainId: string, token: string) {
  for (const [key, value] of Object.entries(list))
    if (key.toLowerCase() === `${chainId}---${token}`.toLowerCase())
      return {
        chainId: value[0]?.toString() ?? "",
        address: value[1]?.toString() ?? "",
        symbol: value[2]?.toString() ?? "",
        decimals: value[3]?.toString() ?? "",
      };

  return {
    chainId,
    address: token,
    symbol: "",
    decimals: "",
  };
}

export function getDestTokenInfo(chainId: string, symbol: string) {
  for (const [_key, value] of Object.entries(list))
    if (
      value[0]?.toString() === chainId &&
      value[2]?.toString().toLowerCase() === symbol.toLowerCase()
    )
      return {
        chainId: value[0]?.toString() ?? "",
        address: value[1]?.toString() ?? "",
        symbol: value[2]?.toString() ?? "",
        decimals: value[3]?.toString() ?? "",
      };

  return {
    chainId,
    address: "",
    symbol: "",
    decimals: "",
  };
}
