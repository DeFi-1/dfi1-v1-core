/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IDeFiOneV1FactoryInterface extends ethers.utils.Interface {
  functions: {
    "createPool(address,address,uint24)": FunctionFragment;
    "enableFeeAmount(uint24,int24)": FunctionFragment;
    "feeAmountTickSpacing(uint24)": FunctionFragment;
    "getPool(address,address,uint24)": FunctionFragment;
    "owner()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createPool",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enableFeeAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeAmountTickSpacing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;

  decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enableFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeAmountTickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {
    "FeeAmountEnabled(uint24,int24)": EventFragment;
    "OwnerChanged(address,address)": EventFragment;
    "PoolCreated(address,address,uint24,int24,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeeAmountEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export class IDeFiOneV1Factory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IDeFiOneV1FactoryInterface;

  functions: {
    createPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    enableFeeAmount(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "enableFeeAmount(uint24,int24)"(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    feeAmountTickSpacing(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "feeAmountTickSpacing(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    getPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      pool: string;
      0: string;
    }>;

    "getPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      pool: string;
      0: string;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    setOwner(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  createPool(
    tokenA: string,
    tokenB: string,
    fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createPool(address,address,uint24)"(
    tokenA: string,
    tokenB: string,
    fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  enableFeeAmount(
    fee: BigNumberish,
    tickSpacing: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "enableFeeAmount(uint24,int24)"(
    fee: BigNumberish,
    tickSpacing: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  feeAmountTickSpacing(
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "feeAmountTickSpacing(uint24)"(
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getPool(
    tokenA: string,
    tokenB: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getPool(address,address,uint24)"(
    tokenA: string,
    tokenB: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  setOwner(_owner: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setOwner(address)"(
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    createPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    enableFeeAmount(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "enableFeeAmount(uint24,int24)"(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    feeAmountTickSpacing(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "feeAmountTickSpacing(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    setOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FeeAmountEnabled(
      fee: BigNumberish | null,
      tickSpacing: BigNumberish | null
    ): EventFilter;

    OwnerChanged(oldOwner: string | null, newOwner: string | null): EventFilter;

    PoolCreated(
      token0: string | null,
      token1: string | null,
      fee: BigNumberish | null,
      tickSpacing: null,
      pool: null
    ): EventFilter;
  };

  estimateGas: {
    createPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    enableFeeAmount(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "enableFeeAmount(uint24,int24)"(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    feeAmountTickSpacing(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "feeAmountTickSpacing(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(_owner: string, overrides?: Overrides): Promise<BigNumber>;

    "setOwner(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    enableFeeAmount(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "enableFeeAmount(uint24,int24)"(
      fee: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    feeAmountTickSpacing(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feeAmountTickSpacing(uint24)"(
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPool(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPool(address,address,uint24)"(
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}