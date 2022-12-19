require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env" });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    /*  goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    }, */
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "f716dd06694fcf91c1a9870fefa8541af1942f98b504903d4220dddbe000a07e",
      ],
    },
  },
};
