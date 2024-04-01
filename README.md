# setup
````
npm init
npm install hardhat

````


# init
````
npx hardhat

````


# build

````

npx hardhat compile
npx hardhat run scripts/deploy-erc721-token.js --network goerli
npx hardhat verify --network goerli 0x97422e704d8e60F8E942cAA4cA73094Ddc0673d5


npx hardhat run scripts/deploy-erc721-token.js --network sepolia
npx hardhat run scripts/verify-erc721-token.js --network sepolia
https://sepolia.etherscan.io/address/0x476DAc34a11f84F48Da3a3455a3Be1b3FEE17b59#code



> npx hardhat compile
> npx hardhat run scripts/deploy-erc721-token.js --network wemix_testnet


````


# test

````
constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

npx hardhat test

````


# token
```` 
SYMBOL : BGNT
Token address : 0x805532efc8f4E83ca3aDf5295317Ec2b5399b29b
NETWORKS : rinkeby


SYMBOL : BGNT
ADDRESS : 0x97422e704d8e60F8E942cAA4cA73094Ddc0673d5
NETWORKS : goerli



SYMBOL : BGNT
ADDRESS : 0xE263ADaf786b02d841878660EC45C332DB528E50
NETWORKS : wemix

````




# link

````
https://docs.openzeppelin.com/

https://infura.io/

https://rinkeby.etherscan.io/address/0x805532efc8f4E83ca3aDf5295317Ec2b5399b29b
https://rinkeby.etherscan.io/address/0x805532efc8f4E83ca3aDf5295317Ec2b5399b29b#code

https://goerli.etherscan.io/address/0x97422e704d8e60F8E942cAA4cA73094Ddc0673d5
https://goerli.etherscan.io/address/0x97422e704d8e60F8E942cAA4cA73094Ddc0673d5#code


https://goerli.etherscan.io/token/0x97422e704d8e60f8e942caa4ca73094ddc0673d5

````



# metadata
````

https://app.pinata.cloud

{
attributes: [
{
trait_type: "Breed",
value: "Maltipoo"
},
{
trait_type: "Eye color",
value: "Mocha"
}
],
description: "The world's most adorable and sensitive pup.",
image: "ipfs://",
name: "birdgang"
}

````



# opensea
```
https://docs.opensea.io/docs/metadata-standards

```


# metadata structure
```
{
"description": "Friendly OpenSea Creature that enjoys long swims in the ocean.",
"external_url": "https://openseacreatures.io/3",
"image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png",
"name": "Dave Starbelly",
"attributes": [ ... ]
}


https://nft-resources.s3.ap-northeast-2.amazonaws.com/nft-metadata.json

```
