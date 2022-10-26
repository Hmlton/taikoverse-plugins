/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PayableSystem, PayableSystemInterface } from "../PayableSystem";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "arguments",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class PayableSystem__factory {
  static readonly abi = _abi;
  static createInterface(): PayableSystemInterface {
    return new utils.Interface(_abi) as PayableSystemInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayableSystem {
    return new Contract(address, _abi, signerOrProvider) as PayableSystem;
  }
}