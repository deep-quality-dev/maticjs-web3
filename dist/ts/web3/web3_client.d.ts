import { Web3Contract } from "./eth_contract";
import { TransactionWriteResult } from "../helpers";
import { BaseWeb3Client, IBlockWithTransaction, IJsonRpcRequestPayload, IJsonRpcResponse, ITransactionRequestConfig, ITransactionData, ITransactionReceipt, Logger } from "@maticnetwork/maticjs";
export declare class Web3Client extends BaseWeb3Client {
    private web3_;
    constructor(provider: any, logger: Logger);
    read(config: ITransactionRequestConfig): Promise<string>;
    write(config: ITransactionRequestConfig): TransactionWriteResult;
    getContract(address: string, abi: any): Web3Contract;
    getGasPrice(): Promise<string>;
    estimateGas(config: ITransactionRequestConfig): Promise<number>;
    getTransactionCount(address: string, blockNumber: any): Promise<number>;
    getChainId(): Promise<number>;
    private ensureTransactionNotNull_;
    getTransaction(transactionHash: string): Promise<ITransactionData>;
    getTransactionReceipt(transactionHash: string): Promise<ITransactionReceipt>;
    getBlock(blockHashOrBlockNumber: any): any;
    getBlockWithTransaction(blockHashOrBlockNumber: any): Promise<IBlockWithTransaction>;
    sendRPCRequest(request: IJsonRpcRequestPayload): Promise<IJsonRpcResponse>;
    encodeParameters(params: any[], types: any[]): string;
    decodeParameters(hexString: any, types: any[]): any;
    etheriumSha3(...value: any[]): string;
}
