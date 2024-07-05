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

interface IDeFiOneV1PoolOwnerActionsInterface extends ethers.utils.Interface {
  functions: {
    "collectProtocol(address,uint128,uint128)": FunctionFragment;
    "setFeeProtocol(uint8,uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "collectProtocol",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "collectProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDeFiOneV1PoolOwnerActions extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IDeFiOneV1PoolOwnerActionsInterface;

  functions: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  collectProtocol(
    recipient: string,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "collectProtocol(address,uint128,uint128)"(
    recipient: string,
    amount0Requested: BigNumberish,
    amount1Requested: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFeeProtocol(
    feeProtocol0: BigNumberish,
    feeProtocol1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFeeProtocol(uint8,uint8)"(
    feeProtocol0: BigNumberish,
    feeProtocol1: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      amount0: BigNumber;
      amount1: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collectProtocol(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "collectProtocol(address,uint128,uint128)"(
      recipient: string,
      amount0Requested: BigNumberish,
      amount1Requested: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFeeProtocol(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeProtocol(uint8,uint8)"(
      feeProtocol0: BigNumberish,
      feeProtocol1: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
