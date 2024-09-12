module hello_blockchain::aeTopList13 {
    use std::error;
    use std::signer;
    use std::vector;
    use aptos_framework::event;
    use aptos_framework::timestamp;
    use std::simple_map::{SimpleMap, Self};

    const ENOT_OWNER: u64 = 1;
    const ENO_PLAYER_LATEST_GAME_DATA: u64 = 2;
    const ENO_PLAYER_INVALID: u64 = 3;
    const ENO_IS_REACHED_THE_HEIGHT_LEVEL: u64 = 4;
    const ENO_NOT_ENOUGH_GOLD: u64 = 5;
    const ENO_NOT_ENOUGH_DIAMOND: u64 = 6;

    const MAX_LEADERBOARD: u64 = 10;

    struct Leaderboard has key {
        leaderboard_list: vector<LeaderboardItem>,
        total_game_time: u64,
        last_one_index: u64,
        update_time: u64
    }

    struct LeaderboardItem has store, copy, drop {
        sender: address,
        duration: u64,
        kills: u64,
        create_time: u64
    }

    struct PlayerLatestGameData has key {
        player: address,
        start_time: u64,
        end_time: u64,
        duration: u64,
        kills: u64
    }

    struct PlayerAsset has key {
        gold: u64,
        diamond: u64,
        weapons: vector<u64>,
        characters: vector<u64>,
        weaponLevelMap: SimpleMap<u64, u64>,
        characterLevelMap: SimpleMap<u64, u64>
    }

    struct GlobalConfig has key {
        weaponPriceMap: SimpleMap<u64, GamePriceItem>,
        characterPriceMap: SimpleMap<u64, GamePriceItem>,
        weaponLevelPriceList: vector<u64>,
        characterLevelPriceList: vector<u64>,
        lotteryItemList: vector<LotteryItem>
    }

    // 0: Gold; 1: Diamond;
    struct GamePriceItem has store, copy, drop {
        priceType: u8,
        price: u64,
    }

    // 0: Gold; 1: Diamond; 2: skin; 3: Weapon
    struct LotteryItem has store {
        itemType: u8,
        num: u64
    }

    #[event]
    struct GameStartLog has drop, store {
        player: address,
        start_time: u64,
        total_game_time: u64
    }

    #[event]
    struct TestLog has drop, store {
        content_key: bool
    }
        
    fun init_module(owner: &signer) acquires GlobalConfig {
        init_leaderboard(owner);
        init_global_config(owner);
    }

    fun init_leaderboard(owner: &signer) {
        only_owner(owner);
        move_to(owner, Leaderboard { leaderboard_list: vector[], last_one_index: 0, total_game_time: 0, update_time: timestamp::now_seconds() });
    }
    
    fun init_global_config(owner: &signer)  acquires GlobalConfig {
        only_owner(owner);
        // init
        move_to(owner, GlobalConfig { 
            weaponPriceMap: simple_map::create(),
            characterPriceMap: simple_map::create(),
            weaponLevelPriceList: vector[],
            characterLevelPriceList: vector[],
            lotteryItemList: vector[]
        });
        // set data
       let globalConfig = borrow_global_mut<GlobalConfig>(@hello_blockchain);
        // weapon price
        simple_map::add(&mut globalConfig.weaponPriceMap, 0, GamePriceItem {priceType: 0, price: 0});
        simple_map::add(&mut globalConfig.weaponPriceMap, 1, GamePriceItem {priceType: 0, price: 1000});
        simple_map::add(&mut globalConfig.weaponPriceMap, 5, GamePriceItem {priceType: 0, price: 1500});
        simple_map::add(&mut globalConfig.weaponPriceMap, 6, GamePriceItem {priceType: 0, price: 2000});
        simple_map::add(&mut globalConfig.weaponPriceMap, 7, GamePriceItem {priceType: 0, price: 500});
        simple_map::add(&mut globalConfig.weaponPriceMap, 8, GamePriceItem {priceType: 0, price: 5000});
        simple_map::add(&mut globalConfig.weaponPriceMap, 9, GamePriceItem {priceType: 1, price: 500});
        simple_map::add(&mut globalConfig.weaponPriceMap, 15, GamePriceItem {priceType: 1, price: 500});
        simple_map::add(&mut globalConfig.weaponPriceMap, 16, GamePriceItem {priceType: 0, price: 3000});
        simple_map::add(&mut globalConfig.weaponPriceMap, 18, GamePriceItem {priceType: 1, price: 1000});
        // character price
        simple_map::add(&mut globalConfig.characterPriceMap, 0, GamePriceItem {priceType: 0, price: 0});
        simple_map::add(&mut globalConfig.characterPriceMap, 1, GamePriceItem {priceType: 0, price: 1000});
        simple_map::add(&mut globalConfig.characterPriceMap, 2, GamePriceItem {priceType: 0, price: 2500});
        simple_map::add(&mut globalConfig.characterPriceMap, 3, GamePriceItem {priceType: 1, price: 1000});
        // weapon leavel price (glod)
        vector::push_back(&mut globalConfig.weaponLevelPriceList, 0); // new weapon
        vector::push_back(&mut globalConfig.weaponLevelPriceList, 100);
        vector::push_back(&mut globalConfig.weaponLevelPriceList, 300);
        vector::push_back(&mut globalConfig.weaponLevelPriceList, 600);
        // character leavel price (glod)
        vector::push_back(&mut globalConfig.characterLevelPriceList, 0); // new character
        vector::push_back(&mut globalConfig.characterLevelPriceList, 100);
        vector::push_back(&mut globalConfig.characterLevelPriceList, 200);
        vector::push_back(&mut globalConfig.characterLevelPriceList, 300);
        vector::push_back(&mut globalConfig.characterLevelPriceList, 400);
        vector::push_back(&mut globalConfig.characterLevelPriceList, 500);
        vector::push_back(&mut globalConfig.characterLevelPriceList, 600);
        // lottery
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 1, num: 10 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 0, num: 50 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 0, num: 150 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 3, num: 18 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 0, num: 200 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 1, num: 20 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 3, num: 9 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 0, num: 100 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 0, num: 50 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 0, num: 50 });
        vector::push_back(&mut globalConfig.lotteryItemList, LotteryItem {itemType: 0, num: 200 });
    }

    public entry fun buyOrUpgradeWeapon(account: signer, id: u64) acquires PlayerAsset,GlobalConfig {
        let account_addr = signer::address_of(&account);
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerAsset>(account_addr)) {
            move_to(&account, PlayerAsset {
                gold: 999999, // TODO: test
                diamond: 9999999, // TODO: test
                // gold: 0,
                // diamond: 0,
                weapons: vector[],
                characters: vector[],
                weaponLevelMap: simple_map::create(),
                characterLevelMap: simple_map::create()
            })
        };
        let player_asset = borrow_global_mut<PlayerAsset>(account_addr);
        let weaponList = &player_asset.weapons;
        let length = vector::length(weaponList);
        let found = false;
        let i = 0;
        while(i < length) {
            if(found) {
                break
            };
            let item = *vector::borrow(weaponList, i);
            if (item == id) {
                found = true;
            };
            i = i + 1;
        };
        if(!found) {
            if(id == 0) {
                vector::push_back(&mut player_asset.weapons, id);
            }
        };

        let globalConfig = borrow_global_mut<GlobalConfig>(@hello_blockchain);
        let weaponLevelMap = player_asset.weaponLevelMap;
        if(found || id == 0) {
            // upgrade
            if(!simple_map::contains_key(&mut weaponLevelMap,&id)) {
                simple_map::add(&mut weaponLevelMap, id , 0); 
            };
            let currentLevel = simple_map::borrow_mut(&mut weaponLevelMap, &id);

            assert!(*currentLevel < 4, error::not_found(ENO_IS_REACHED_THE_HEIGHT_LEVEL));

            let weaponLevelPriceList = globalConfig.weaponLevelPriceList;
            let goldPrice: u64 = *vector::borrow(&weaponLevelPriceList, *currentLevel+1);
            let gold = player_asset.gold;

            assert!(gold >= goldPrice, error::not_found(ENO_NOT_ENOUGH_GOLD));

            player_asset.gold = player_asset.gold - goldPrice;
            *currentLevel = *currentLevel + 1;

            player_asset.weaponLevelMap = weaponLevelMap;
            event::emit(TestLog {
                content_key: simple_map::contains_key(&mut weaponLevelMap,&id)
            });
        } else {
            // buy
            let weaponPriceMap = globalConfig.weaponPriceMap;
            let priceItem: GamePriceItem = *simple_map::borrow_mut(&mut weaponPriceMap,&id);
            if(priceItem.priceType == 0) {
                let gold = player_asset.gold;
                assert!(gold >= priceItem.price, error::not_found(ENO_NOT_ENOUGH_GOLD));
                player_asset.gold = player_asset.gold - priceItem.price;
                vector::push_back(&mut player_asset.weapons, id);
                simple_map::add(&mut weaponLevelMap, id , 0); 
                player_asset.weaponLevelMap = weaponLevelMap;
            } else if(priceItem.priceType == 1) {
                let diamond = player_asset.diamond;
                assert!(diamond >= priceItem.price, error::not_found(ENO_NOT_ENOUGH_DIAMOND));
                player_asset.diamond = player_asset.diamond - priceItem.price;
                vector::push_back(&mut player_asset.weapons, id);
                simple_map::add(&mut weaponLevelMap, id , 0);
                player_asset.weaponLevelMap = weaponLevelMap;
            };
        }
    }

    public entry fun buyOrUpgradeCharacter(account: signer, id: u64) acquires PlayerAsset,GlobalConfig {
        let account_addr = signer::address_of(&account);
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerAsset>(account_addr)) {
            move_to(&account, PlayerAsset {
                gold: 999999, // TODO: test
                diamond: 9999999, // TODO: test
                // gold: 0,
                // diamond: 0,
                weapons: vector[],
                characters: vector[],
                weaponLevelMap: simple_map::create(),
                characterLevelMap: simple_map::create()
            })
        };
        let player_asset = borrow_global_mut<PlayerAsset>(account_addr);
        let characterList = &player_asset.characters;
        let length = vector::length(characterList);
        let found = false;
        let i = 0;
        while(i < length) {
            if(found) {
                break
            };
            let item = *vector::borrow(characterList, i);
            if (item == id) {
                found = true;
            };
            i = i + 1;
        };
        if(!found) {
            if(id == 0) {
                vector::push_back(&mut player_asset.characters, id);
            }
        };

        let globalConfig = borrow_global_mut<GlobalConfig>(@hello_blockchain);
        let characterLevelMap = player_asset.characterLevelMap;
        if(found || id == 0) {
            // upgrade
            if(!simple_map::contains_key(&mut characterLevelMap,&id)) {
                simple_map::add(&mut characterLevelMap, id , 0); 
            };
            let currentLevel = simple_map::borrow_mut(&mut characterLevelMap, &id);
            
            assert!(*currentLevel < 4, error::not_found(ENO_IS_REACHED_THE_HEIGHT_LEVEL));

            let characterLevelPriceList = globalConfig.characterLevelPriceList;
            let goldPrice: u64 = *vector::borrow(&characterLevelPriceList, *currentLevel+1);
            let gold = player_asset.gold;

            assert!(gold >= goldPrice, error::not_found(ENO_NOT_ENOUGH_GOLD));

            player_asset.gold = player_asset.gold - goldPrice;
            *currentLevel = *currentLevel + 1;

            player_asset.characterLevelMap = characterLevelMap;
            event::emit(TestLog {
                content_key: simple_map::contains_key(&mut characterLevelMap,&id)
            });
        } else {
            // buy
            let characterPriceMap = globalConfig.characterPriceMap;
            let priceItem: GamePriceItem = *simple_map::borrow_mut(&mut characterPriceMap,&id);
            if(priceItem.priceType == 0) {
                let gold = player_asset.gold;
                assert!(gold >= priceItem.price, error::not_found(ENO_NOT_ENOUGH_GOLD));
                player_asset.gold = player_asset.gold - priceItem.price;
                vector::push_back(&mut player_asset.characters, id);
                simple_map::add(&mut characterLevelMap, id , 0); 
                player_asset.characterLevelMap = characterLevelMap;
            } else if(priceItem.priceType == 1) {
                let diamond = player_asset.diamond;
                assert!(diamond >= priceItem.price, error::not_found(ENO_NOT_ENOUGH_DIAMOND));
                player_asset.diamond = player_asset.diamond - priceItem.price;
                vector::push_back(&mut player_asset.characters, id);
                simple_map::add(&mut characterLevelMap, id , 0); 
                player_asset.characterLevelMap = characterLevelMap;
            };
        }
    }


    inline fun only_owner(owner: &signer) {
        assert!(signer::address_of(owner) == @hello_blockchain, error::permission_denied(ENOT_OWNER));
    }
}

// module hello_blockchain::aeTopList0 {
//     use std::error;
//     use std::signer;
//     use std::vector;
//     use aptos_framework::event;
//     use aptos_framework::timestamp;
//     use std::simple_map::{SimpleMap, Self};

//     const ENOT_OWNER: u64 = 1;
//     const ENO_PLAYER_LATEST_GAME_DATA: u64 = 2;
//     const ENO_PLAYER_INVALID: u64 = 3;

//     const MAX_LEADERBOARD: u64 = 10;

//     struct Leaderboard has key {
//         leaderboard_list: vector<LeaderboardItem>,
//         total_game_time: u64,
//         last_one_index: u64,
//         update_time: u64
//     }

//     struct LeaderboardItem has store, copy, drop {
//         sender: address,
//         duration: u64,
//         kills: u64,
//         create_time: u64
//     }

//     struct PlayerLatestGameData has key {
//         player: address,
//         start_time: u64,
//         end_time: u64,
//         duration: u64,
//         kills: u64
//     }

//     struct PlayerAsset has key {
//         gold: u64,
//         diamond: u64,
//         weapons: vector<u64>,
//         characters: vector<u64>,
//         weaponLevelMap: SimpleMap<u64, u64>,
//         characterLevelMap: SimpleMap<u64, u64>
//     }

//     struct GlobalConfig has key {
//         weaponPriceMap: SimpleMap<u64, GamePriceItem>,
//         characterPriceMap: SimpleMap<u64, GamePriceItem>,
//         weaponLevelPriceList: vector<u64>,
//         characterLevelPriceList: vector<u64>
//     }

//     // 0: Gold; 1: Diamond;
//     struct GamePriceItem {
//         uint priceType;
//         uint price;
//     }

//     #[event]
//     struct GameStartLog has drop, store {
//         player: address,
//         start_time: u64,
//         total_game_time: u64
//     }

//     #[event]
//     struct GameOverLog has drop, store {
//         player: address,
//         start_time: u64,
//         end_time: u64,
//         duration: u64,
//         kills: u64
//     }

//     fun init_module(owner: &signer) {
//         move_to(owner, Leaderboard { leaderboard_list: vector[], last_one_index: 0, total_game_time: 0, update_time: timestamp::now_seconds() })
//     }

//     // public entry fun buyOrUpgradeWeapon(account: signer, id: u64) acquires PlayerAsset {
//     //     let account_addr = signer::address_of(&account);
//     //     // the first check prevents overwriting or miss-managing resources
//     //     if (!exists<PlayerAsset>(account_addr)) {
//     //         move_to(&account, PlayerAsset {
//     //             gold: 0,
//     //             diamond: 0,
//     //             weapons: vector[],
//     //             characters: vector[],
//     //             weaponLevelMap: simple_map::create(),
//     //             characterLevelMap: simple_map::create()
//     //         })
//     //     }
//     //     let player_asset = borrow_global_mut<PlayerAsset>(account_addr);
//     //     let weaponList = &player_asset.weapons;
//     //     let length = vector::length(weaponList);
//     //     let found = false;
//     //     let i = 0;
//     //     while(i< length && !found) {
//     //         let item = *vector::borrow(weaponList, i);
//     //         if (item == id) {
//     //             found = true;
//     //         };
//     //         i = i + 1;
//     //     };

//     //     if(found || id == 0) {
//     //         // upgrade
//     //         let weaponLevelMap = &player_asset.weaponLevelMap;
//     //         let v=simple_map::borrow_mut(&mut weaponLevelMap,&id);

//     //         // require(currentLevel < weaponLevelPriceList.length -1, "Your weapon is reached the highest level");
//     //         assert!(v < &4, error::not_found(ENO_PLAYER_LATEST_GAME_DATA));
//     //         //  *v=utf8(b"Changed Name");

//     //         uint currentLevel = playerWeaponLevelMap[msg.sender][id];

//     //         require(currentLevel < weaponLevelPriceList.length -1, "Your weapon is reached the highest level");
//     //         uint goldPrice = weaponLevelPriceList[currentLevel+1];
//     //         uint goldNum = playerGoldMap[msg.sender];
//     //         require(goldNum >= goldPrice, 'Your gold is not enough!');
//     //         playerGoldMap[msg.sender] -= goldPrice;
//     //         playerWeaponLevelMap[msg.sender][id]++;
//     //     };



//     //     let from_message = old_message_holder.message;
//     //     old_message_holder.message = message;

//     //     if(found || id == 0) {
//     //         // upgrade
//     //         uint currentLevel = playerWeaponLevelMap[msg.sender][id];
//     //         require(currentLevel < weaponLevelPriceList.length -1, "Your weapon is reached the highest level");
//     //         uint goldPrice = weaponLevelPriceList[currentLevel+1];
//     //         uint goldNum = playerGoldMap[msg.sender];
//     //         require(goldNum >= goldPrice, 'Your gold is not enough!');
//     //         playerGoldMap[msg.sender] -= goldPrice;
//     //         playerWeaponLevelMap[msg.sender][id]++;
//     //     } else {
//     //         // buy
//     //         PriceItem memory priceItem = weaponPriceMap[id];
//     //         if(priceItem.priceType == 0) {
//     //             uint goldNum = playerGoldMap[msg.sender];
//     //             require(goldNum >= priceItem.price, 'Your gold is not enough!');
//     //             playerGoldMap[msg.sender] -= priceItem.price;
//     //             playerWeaponMap[msg.sender].push(id);
//     //         } else if(priceItem.priceType == 1) {
//     //             uint diamondNum =  playerDiamondMap[msg.sender];
//     //             require(diamondNum >= priceItem.price, 'Your diamond is not enough!');
//     //             playerDiamondMap[msg.sender] -= priceItem.price;
//     //             playerWeaponMap[msg.sender].push(id);
//     //         }
//     //     }
//     // }

//     public entry fun startGame(account: signer) acquires Leaderboard,PlayerLatestGameData {
//         let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);

//         let account_addr = signer::address_of(&account);
//         let start_time = timestamp::now_seconds();
//         // the first check prevents overwriting or miss-managing resources
//         if (!exists<PlayerLatestGameData>(account_addr)) {
//             move_to(&account, PlayerLatestGameData {
//                 player: account_addr,
//                 start_time: start_time,
//                 end_time: start_time,
//                 duration: 0,
//                 kills: 0
//             })
//         } else {
//             let old_data = borrow_global_mut<PlayerLatestGameData>(account_addr);
//             old_data.player = account_addr;
//             old_data.start_time = start_time;
//             old_data.end_time = start_time;
//             old_data.duration = 0;
//             old_data.kills = 0;
//         };

//         event::emit(GameStartLog {
//             player: account_addr,
//             start_time: start_time,
//             total_game_time: leaderboard.total_game_time
//         });

//         leaderboard.total_game_time = leaderboard.total_game_time + 1;
//     }

//     public entry fun gameOver(sender: signer, duration: u64, kills: u64) acquires Leaderboard,PlayerLatestGameData {
//         let account_addr = signer::address_of(&sender);
//         let now = timestamp::now_seconds();
//         assert!(exists<PlayerLatestGameData>(account_addr), error::not_found(ENO_PLAYER_LATEST_GAME_DATA));

//         // TODO: add zk proof
        
//         // save player data
//         let old_data = borrow_global_mut<PlayerLatestGameData>(account_addr);
//         let player = old_data.player;
//         assert!(player == account_addr, error::not_found(ENO_PLAYER_INVALID));
//         old_data.end_time = now;
//         old_data.duration = duration;
//         old_data.kills = kills;

//         // the event for serach player data
//         event::emit(GameOverLog {
//             player: old_data.player,
//             start_time: old_data.start_time,
//             end_time: now,
//             duration: duration,
//             kills: kills
//         });

//         // push to Leaderboard
//         let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);
//         let leaderboard_item = LeaderboardItem {
//             sender: account_addr,
//             duration,
//             kills,
//             create_time: now
//         };
//         if (vector::length(&leaderboard.leaderboard_list) < MAX_LEADERBOARD) {
//             vector::push_back(&mut leaderboard.leaderboard_list, leaderboard_item);
//             let min_index = find_min_kills_index(&leaderboard.leaderboard_list);
//             leaderboard.last_one_index = min_index;
//             return
//         };

//         *vector::borrow_mut(&mut leaderboard.leaderboard_list, leaderboard.last_one_index) = leaderboard_item;
//         leaderboard.update_time = timestamp::now_seconds();

//         // update last_one_index
//         let min_index = find_min_kills_index(&leaderboard.leaderboard_list);
//         leaderboard.last_one_index = min_index;
//     }

//     public entry fun lottery() acquires Leaderboard {
//         let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);
//         // The aptos_framework::randomness feature is unavailable on the mainnet
//         let random = aptos_framework::timestamp::now_microseconds() % 100;
//         leaderboard.update_time = random;
//     }

//     public entry fun clear_leaderboard(owner: &signer) acquires Leaderboard {
//         only_owner(owner);

//         let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);

//         leaderboard.leaderboard_list = vector[];
//         leaderboard.update_time = timestamp::now_seconds();
//         leaderboard.last_one_index = 0;
//     }

//     #[view]
//     public fun get_leaderboard_item_list(): (vector<LeaderboardItem>, u64) acquires Leaderboard {
//         let leaderboard = borrow_global<Leaderboard>(@hello_blockchain);

//         let leaderboard_list = vector[];
//         vector::for_each(leaderboard.leaderboard_list, |m| vector::push_back(&mut leaderboard_list, m));

//         vector::rotate(&mut leaderboard_list, leaderboard.last_one_index);

//         (leaderboard_list, leaderboard.update_time)
//     }

//     #[view]
//     public fun get_leaderboard_kills_min_index(): u64 acquires Leaderboard {
//         let leaderboard = borrow_global<Leaderboard>(@hello_blockchain);
//         let min_index = find_min_kills_index(&leaderboard.leaderboard_list);

//         min_index
//     }

//     fun find_min_kills_index(items: &vector<LeaderboardItem>): u64 {
//         let length = vector::length(items);
//         if(length == 0) {
//             return 0
//         };

//         let min_index: u64 = 0;
//         let first_item = *vector::borrow(items, 0);
//         let min_kills = first_item.kills;

//         let i = 0;
//         while(i < length) {
//             let item = *vector::borrow(items, i);
//             if (item.kills < min_kills) {
//                 min_kills = item.kills;
//                 min_index = i;
//             };
//             i = i + 1;
//         };

//         min_index
//     }

//     inline fun only_owner(owner: &signer) {
//         assert!(signer::address_of(owner) == @hello_blockchain, error::permission_denied(ENOT_OWNER));
//     }

// }