import { BaseContractMethod, Logger, ITransactionRequestConfig } from "@maticnetwork/maticjs";
import { TransactionObject } from "web3/eth/types";
import { TransactionWriteResult } from "../helpers";
export declare class EthMethod extends BaseContractMethod {
    address: any;
    private method;
    constructor(address: any, logger: Logger, method: TransactionObject<any>);
    toHex(value: any): any;
    read<T>(tx: ITransactionRequestConfig): Promise<T>;
    write(tx: ITransactionRequestConfig): TransactionWriteResult;
    estimateGas(tx: ITransactionRequestConfig): Promise<number>;
    encodeABI(): string;
}
