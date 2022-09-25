const { expect } = require('chai')

describe("BirdgangNFTToken", function() {
    it("should return correct name and symbol", async function () {
        const BirdgangNFTToken = await hre.ethers.getContractFactory("BirdgangNFTToken");
        const myContractDeployed = await BirdgangNFTToken.deploy("BirdgangNFTToken", "BGNT");

        await myContractDeployed.deployed();

        expect(await myContractDeployed.name()).to.equal("BirdgangNFTToken");
        expect(await myContractDeployed.symbol()).to.equal("BGNT");
    });
});
