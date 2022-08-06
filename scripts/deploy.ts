import { ethers } from "hardhat";

async function main() {
  const rsvpContractFactory = await ethers.getContractFactory("Web3RSVP");
  const rsvpContract = await rsvpContractFactory.deploy();
  await rsvpContract.deployed();

  console.log("Contract deployed to:", rsvpContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
