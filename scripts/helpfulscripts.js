require("dotenv").config();
const { ethers } = require("hardhat");
const fs = require("fs");

async function getContract() {
  const abi = await fs.readFileSync("./contractAbi.json", "utf-8");
  const contAddress = process.env.ORGANISER_CONTRACT_ADDRESS;
  const jsonRpcUrl = process.env.URL;
  const provider = new ethers.providers.JsonRpcProvider(jsonRpcUrl);
  let wallet = new ethers.Wallet(process.env.PVT);
  const contract = new ethers.Contract(contAddress, abi, provider).connect(
    wallet
  );
  return contract;
}
async function main() {
  let name = "Siddharth";
  let address = 0xbfdc852b2ec58f92a755e8e8260152d7443c33cc;
  let age = 21;
  let location = "delhi";
  let bloodGroup = "B+";
  let healthStatus = "Good";

  registerKidneyA(name, address, age, location, bloodGroup);
}

// async function registerKidneyDonor(
//   name,
//   address,
//   age,
//   location,
//   bloodGroup,
//   healthStatus
// ) {
//   const Contract = await getContract();
//   await Contract.registerKidneyDonor(
//     name,
//     address,
//     age,
//     location,
//     bloodGroup,
//     healthStatus
//   );
// }

export async function registerKidneyPatients(
  name,
  address,
  age,
  location,
  bloodGroup
) {
  const Contract = await getContract();
  await Contract.registerKidneyAcceptor(
    name,
    address,
    age,
    location,
    bloodGroup
  );
}

// export async function getNumberofKidneyDonors() {
//   const Contract = await getContract();
//   return await Contract.getNumberofKidneyDonors();
// }

// export async function getNumberofKeyneyAcceptors() {
//   const Contract = await getContract();
//   return await Contract.getNumberofKeyneyAcceptors();
// }

// export async function getKidneyDonorByAdd(address) {
//   const Contract = await getContract();
//   return await Contract.getKidneyDonorByAdd(address);
// }

// export async function getKidneyAcceptorByAdd(address) {
//   const Contract = await getContract();
//   return await Contract.getKidneyAcceptorByAdd(address);
// }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
