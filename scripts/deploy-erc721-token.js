const {ethers} = require("hardhat");

async function main() {
    let [deployer] = await ethers.getSigners();
    const network = await ethers.provider.getNetwork()
    const initialOwnerAddress = deployer.address;
    console.log(`chainId : ${network.chainId}) `)

    const factory = await ethers.getContractFactory("BirdgangNFTToken");


    // 네트워크 상황에 따라 적절한 가스 가격 설정
    // 이 예제에서는 10 gwei를 사용하지만, 실제로는 현재 네트워크 조건에 맞게 조정해야 할 수 있습니다.
    //const options = { gasPrice: ethers.utils.parseUnits('10', 'gwei') };
    // const contract = await factory.deploy(initialOwnerAddress, options);


    // 현재 네트워크 의 가스 가격을 가져 오기
    // let gasPrice = await ethers.provider.getGasPrice();
    // 가스 가격을 10% 증가 시키기
    // gasPrice = gasPrice.mul(110).div(100);
    // const contract = await factory.deploy(initialOwnerAddress, { gasPrice: gasPrice });
    // const token = await Token.deploy("BirdgangNFTToken", "BGNT");
    const contract = await factory.deploy(initialOwnerAddress);
    await contract.deployed();
    console.log('Deploying contracts with the account :', initialOwnerAddress);
    console.log("Token deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
