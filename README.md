# OnchainVampireSurvivors

OnchainVampireSurvivors is a time survival game with minimalist gameplay and roguelite elements. It uses thirdweb technology to  create a on-chain leaderboard and create a lottery mechanism.


## The problem it solves
### 1、Easy to use
I use Thirdweb's in-app wallet, players can easily choose their familiar wallet or login method to participate in the game, and realize seamless connection of web2 users!

### 2、Lottery mechanism
Use a unique algorithm to handle the player's lottery activities, so that the lottery process can happen on the chain! I designed a very smooth interactive page to make players feel involved!

### 3、On-chain leaderboard
Use a specific algorithm to achieve a completely open and transparent on-chain leaderboard. Every game data will be uploaded to the smart contract, allowing players all over the world to play games together!

### 4、Game payment
Because most of the in-game payments I know are limited payments, such as one dollar, ten dollars, etc. However, because the price of gas tokens is floating, it is difficult to calculate the number of gas tokens corresponding to one dollar in the smart contract. Therefore, I used chainlink's data feed to obtain the current ETH/USD price, and calculated the number of gas tokens corresponding to any number of dollars through the algorithm.

### 5、NO ERC20 and NO NFT
I am very cautious about using ERC20 and NFT in the game. Because ERC20 and NFT will definitely anchor a certain price, if the price drops, then no one will care about the game. I think the game should focus on getting fun and experience! Therefore, I designed a unique algorithm mechanism to let players feel excitement and tension in the game!

### 6、Trading experience
Base's transaction cost is very low and the processing speed is fast, which reduces the user's sense of delay compared to blockchains such as Ethereum.

### 7、Security issues
Use Thirdweb's audited smart contracts to ensure the security of user assets as much as possible.


## Challenges I ran into
Due to the limitations of the game engine, I couldn't use thirdweb's SDK. I thought about it for a long time, about a week, and wrote a react project to expose the API to the game engine. This allowed me to successfully complete various functions supported by thirdweb in the game engine!