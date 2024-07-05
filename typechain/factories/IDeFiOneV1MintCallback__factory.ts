/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDeFiOneV1MintCallback } from "../IDeFiOneV1MintCallback";

export class IDeFiOneV1MintCallback__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDeFiOneV1MintCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDeFiOneV1MintCallback;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Owed",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "defioneV1MintCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
