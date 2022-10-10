// require("@nomicfoundation/hardhat-toolbox")
// require("dotenv").config()
// require("@nomiclabs/hardhat-etherscan")
// require("./tasks/block-number")
// require("hardhat-gas-reporter")
// require("solidity-coverage")
import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"
import "@nomiclabs/hardhat-etherscan"
import "./tasks/block-number"
import "hardhat-gas-reporter"
import "solidity-coverage"
import "@nomiclabs/hardhat-ethers"
import "@typechain/hardhat"

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "key"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

module.exports = {
    defaultNetwork: "hardhat", // anytime you don't specify a network it will give you a fake blockchain and keys etc
    solidity: "0.8.8",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainid: 5,
        },
        localhost: {
            urL: " http://127.0.0.1:8545/",
            // accounts: hardhat auto assign a private key here
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        // outputFile: "gas-report.txt",
        // noColors: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
}
