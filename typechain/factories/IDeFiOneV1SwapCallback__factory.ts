/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDeFiOneV1SwapCallback } from "../IDeFiOneV1SwapCallback";

export class IDeFiOneV1SwapCallback__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDeFiOneV1SwapCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDeFiOneV1SwapCallback;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "defioneV1SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];