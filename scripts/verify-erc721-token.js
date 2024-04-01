const {ethers} = require("hardhat");

async function main() {
    await hre.run("verify:verify", {
        address: "0x476DAc34a11f84F48Da3a3455a3Be1b3FEE17b59",  // contract address
        constructorArguments: [
            "0x43EAAAaE78B6CA996A6f9eCF04d021e8af17db43" // owner address
            // 생성자에 필요한 다른 인자들이 있다면 여기에 추가
        ],
    });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
