const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("Organiser");
  const dContract = await contractFactory.deploy();
  const recipt = await dContract.deployTransaction.wait(1);

  console.log(dContract);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
