/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xd74a1b4b2cdb033db440d6fcdba5cc36659303a82ba6bc2471eab8774651c262","balance":"1000000000000000000000"},{"privateKey":"0x8ff3e8abcd7401ecce891d1fac7f16af238e1e7dc43bb38e0cd02b1aa8d158c4","balance":"1000000000000000000000"},{"privateKey":"0x86e834b8a955f886d19b59d2b24376fe5c6c75e59c8ff1fe0aac35762d72afb2","balance":"1000000000000000000000"},{"privateKey":"0xcc94f1d2bc522bb8b2c977eb78e75830b24a9f0c6f9c5c4fad7321bf8e6484db","balance":"1000000000000000000000"},{"privateKey":"0x852c2254aa37962557eccef42348ff6ce729a700616eb9224c2022e0c2cd3467","balance":"1000000000000000000000"},{"privateKey":"0xde558ef7634dad4362c855ae5f1ab41a173aed977f39bbd2ca1b85cb469f67fb","balance":"1000000000000000000000"},{"privateKey":"0xb2dd2de9359556245e7e38d402c9820b116da26bb354463c48ef543a5e06a62d","balance":"1000000000000000000000"},{"privateKey":"0xad46700d97221e0b28a891419ea7fa2f77d63f34535dcc5e04a3a4fd14ef9fb1","balance":"1000000000000000000000"},{"privateKey":"0xb01880522e0fcb9e20ea087e84619e46a7e225a4f66140f205866b4a986161e2","balance":"1000000000000000000000"},{"privateKey":"0xb735bb1f208517232a8c8e4ef0854cb54fda60c05929e4cc475c2ebc73deb486","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};