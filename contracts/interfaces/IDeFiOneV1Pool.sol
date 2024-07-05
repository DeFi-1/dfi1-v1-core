// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IDeFiOneV1PoolImmutables.sol';
import './pool/IDeFiOneV1PoolState.sol';
import './pool/IDeFiOneV1PoolDerivedState.sol';
import './pool/IDeFiOneV1PoolActions.sol';
import './pool/IDeFiOneV1PoolOwnerActions.sol';
import './pool/IDeFiOneV1PoolEvents.sol';

/// @title The interface for a DeFiOne V1 Pool
/// @notice A DeFi One pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IDeFiOneV1Pool is
    IDeFiOneV1PoolImmutables,
    IDeFiOneV1PoolState,
    IDeFiOneV1PoolDerivedState,
    IDeFiOneV1PoolActions,
    IDeFiOneV1PoolOwnerActions,
    IDeFiOneV1PoolEvents
{

}
