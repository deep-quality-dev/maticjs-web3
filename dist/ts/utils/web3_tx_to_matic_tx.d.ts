import { ITransactionData } from "@maticnetwork/maticjs";
import { Transaction } from "web3-eth/types";
export declare const web3TxToMaticTx: (tx: Transaction) => ITransactionData;