# OnchainVampireSurvivors

OnchainVampireSurvivors is a time survival game with minimalist gameplay and roguelite elements. It uses thirdweb technology to  create a on-chain leaderboard and create a lottery mechanism.


# How to play

### 1、Loading Scene
- Wait for the progress bar to end, select the network and wallet you want to interact with, and then start the game
  
![Alt text](https://github.com/CatKevin/OnchainVampireSurvivors/blob/movementlabs/demoImages/1.png?raw=true)

### 2、Home Scene
- On the homepage, you can see various game data, such as the number of gold coins and diamonds, network type, wallet address, etc., as well as game characters and weapons, and of course the scrolling background and LOGO I drew specifically for this hackathon.
- The five buttons on the right have different functions: Home, Weapons, Characters, Lottery, and Full Chain Rankings.
- Click the Start Game button, you need to wait for a moment and enter the game after the transaction is completed.

![Alt text](https://github.com/CatKevin/OnchainVampireSurvivors/blob/movementlabs/demoImages/2.png?raw=true)

#### 2.1 Weapon Page
- Players can buy and upgrade weapons, but it is usually not easy to get gold coins and diamonds (lottery is one of the easiest ways to get high-level weapons)

![Alt text](https://github.com/CatKevin/OnchainVampireSurvivors/blob/movementlabs/demoImages/3.png?raw=true)

#### 2.2 Characters/Skins Page

- Players can buy and upgrade characters. I have drawn many characters of this type, but due to time constraints, I only show four characters here.

![Alt text](https://github.com/CatKevin/OnchainVampireSurvivors/blob/movementlabs/demoImages/4.png?raw=true)

#### 2.3 Lottery Page

- Players need to pay tokens to participate in the lottery, and can draw gold coins, diamonds and advanced weapons.
- If you want to experience the Howitzer and Gatling as soon as possible, please come and participate in our lucky draw!

![Alt text](https://github.com/CatKevin/OnchainVampireSurvivors/blob/movementlabs/demoImages/5.png?raw=true)

#### 2.4 Ranking page
- Here you can see the player ranking data, and you can see the player time and kills of each project.
- At the bottom you can view the update time of the current ranking.
- This ranking list can be scrolled up and down, and currently stores the top ten data of rankings.

![Alt text](https://github.com/CatKevin/OnchainVampireSurvivors/blob/movementlabs/demoImages/6.png?raw=true)

### 3、Game Scene

- After entering the game, players can use the "W", "S", "A" and "D" keys on the computer keyboard to control the character's movement up, down, left and right.（You can see this keyboard button in the lower right corner of the page）
- By controlling the player to avoid monsters, use weapons to kill monsters, then extract experience points, and obtain more interesting skills through upgrades.
![Alt text](https://github.com/CatKevin/OnchainVampireSurvivors/blob/movementlabs/demoImages/8.png?raw=true)

- You can click on the avatar in the upper left corner to view the attributes of the current character.
- The top of the screen shows the character's level and skills.
- There is a bombing button and a magnet button on the right, which can bomb monsters and absorb experience points globally respectively. But it can only be used once per game!
- The rest is up to you to experience! I designed a very interesting algorithm to control the generation of monsters, so that players are always in a state of tension and immersed in the game.
- This is why I developed the game! I hope the game can bring happiness to everyone, not boring airdrops.

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


# Smart contract
game contract address: 0x4be7c3E13f1ebFb321087704fF0cc33194D648b5

chainId: "0x780a"

rpc: "https://mevm.devnet.m1.movementlabs.xyz"

chainName: "move-evm"