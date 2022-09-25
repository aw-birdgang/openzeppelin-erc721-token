const {ethers} = require("hardhat");

async function main() {
    // let [deployer] = await ethers.getSigners();
    // const network = await ethers.provider.getNetwork()
    // console.log(`chainId : ${network.chainId}) `)
    // console.log('Deploying contracts with the account :', deployer.address);
    //
    // const Token = await ethers.getContractFactory("BirdgangNFTToken");
    // const token = await Token.deploy();
    // console.log('Token address :', token.address);

    const BirdgangNFTToken = await hre.ethers.getContractFactory("BirdgangNFTToken");
    const myContractDeployed = await BirdgangNFTToken.deploy("BirdgangNFTToken", "BGNT");
    await myContractDeployed.deployed();
    console.log('Deployed Contract to :', myContractDeployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
