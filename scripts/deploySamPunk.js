
const hre = require("hardhat");

async function main() {

  const SamPunk = await hre.ethers.getContractFactory("SamPunk");
  const samPunk = await SamPunk.deploy();

  await samPunk.deployed();

  console.log("SamPunk deployed to:", samPunk.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //0x02E254612B6d5057Ba7CE041517E5f55B61A1b91