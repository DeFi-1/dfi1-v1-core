/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDeFiOneV1PoolEvents } from "../IDeFiOneV1PoolEvents";

export class IDeFiOneV1PoolEvents__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDeFiOneV1PoolEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IDeFiOneV1PoolEvents;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "Collect",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "CollectProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paid0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paid1",
        type: "uint256",
      },
    ],
    name: "Flash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextOld",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextNew",
        type: "uint16",
      },
    ],
    name: "IncreaseObservationCardinalityNext",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "Initialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol0Old",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol1Old",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol0New",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feeProtocol1New",
        type: "uint8",
      },
    ],
    name: "SetFeeProtocol",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "Swap",
    type: "event",
  },
];
