// SPDX-License-Identifier: MIT

// when going for localhost or hardhat network we want to use a mock as there is no chainlink oracle
pragma solidity ^0.6.0;

import "@chainlink/contracts/src/v0.6/tests/MockV3Aggregator.sol";
