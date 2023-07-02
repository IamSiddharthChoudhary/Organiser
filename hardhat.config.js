require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const pvtKey = process.env.PVT;
const URL = process.env.URL;

module.exports = {
  solidity: "0.8.18",

  networks: {
    aurora_testnet: {
      chainId: 1313161555,
      url: URL,
      accounts: [pvtKey],
    },
  },
};
