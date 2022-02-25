/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"
const projectId = "25Hfc4zyDhyuFY6c1XbhX3A1iPa";


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  },

  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}