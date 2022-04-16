require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");


require("dotenv").config();

const url = `https://eth-mainnet.alchemyapi.io/v2/${process.env.KEY}`;
const privateKey = process.env.PRIVATE_KEY;
const etherscanKey = process.env.ETHERSCAN_KEY;


module.exports = {
  solidity: "0.8.9",

  networks: {
    mainnet: {
      url: url, 
      accounts: [`${privateKey}`]
    }
  }, 

  etherscan: {
    apiKey: `${etherscanKey}`
  }
};
