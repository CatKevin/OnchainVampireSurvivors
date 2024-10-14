// OnchainVampireSurvivors is a Aptos-based survival game 
// with roguelite elements that integrates over 100 wallets using Nightly Connect technology, 
// offering an immersive and strategic experience with low gas consumption and an on-chain ranking system.
module AptosCodeCollision::onchainVampireSurvivors {
    use std::error;
    use std::signer;
    use std::vector;
    use std::string;
    use aptos_framework::event;
    use aptos_framework::timestamp;
    use aptos_framework::randomness;
    use std::simple_map::{SimpleMap, Self};

    // Define some error codes
    const ENOT_OWNER: u64 = 1;
    const EPLAYER_LATEST_GAME_DATA: u64 = 2;
    const EPLAYER_INVALID: u64 = 3;
    const EIS_REACHED_THE_HEIGHT_LEVEL: u64 = 4;
    const ENOT_ENOUGH_GOLD: u64 = 5;
    const ENOT_ENOUGH_DIAMOND: u64 = 6;
    const ENOT_VALID_TIME: u64 = 7;

    // Maximum number of leaderboards
    const MAX_LEADERBOARD: u64 = 10;

    // Leaderboard Object
    struct Leaderboard has key {
        leaderboard_list: vector<LeaderboardItem>,
        total_game_time: u64,
        last_one_index: u64,
        update_time: u64
    }

    // Leaderboard Item Object
    struct LeaderboardItem has store, copy, drop {
        sender: address,
        duration: u64,
        kills: u64,
        create_time: u64
    }

    // Player Latest Game Data
    // stores the player's performance in the latest game
    struct PlayerLatestGameData has key {
        player: address,
        start_time: u64,
        end_time: u64,
        duration: u64,
        kills: u64
    }

    // Player Asset
    // The player's game assets, including gold coins, diamonds, weapons, skins and their attributes, etc.
    struct PlayerAsset has key {
        gold: u64,
        diamond: u64,
        weapons: vector<u64>,
        characters: vector<u64>,
        weaponLevelMap: SimpleMap<u64, u64>,
        characterLevelMap: SimpleMap<u64, u64>,
        latestLotteryItem: LotteryItem
    }

    // The global settings of the game
    struct GlobalConfig has key {
        weaponPriceMap: SimpleMap<u64, GamePriceItem>,
        characterPriceMap: SimpleMap<u64, GamePriceItem>,
        weaponLevelPriceList: vector<u64>,
        characterLevelPriceList: vector<u64>,
        lotteryItemList: vector<LotteryItem>,
        totalLotteryTimes: u64
    }

    // 0: Gold; 1: Diamond;
    struct GamePriceItem has store, copy, drop {
        priceType: u8,
        price: u64,
    }

    // 0: Gold; 1: Diamond; 2: skin; 3: Weapon
    struct LotteryItem has store, copy, drop {
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
    struct GameOverLog has drop, store {
        player: address,
        start_time: u64,
        end_time: u64,
        duration: u64,
        kills: u64
    }

    #[event]
    struct AssetBugOrUpgradeLog has drop, store {
        player: address,
        id: u64,
        newLevel: u64,
        message: string::String
    }

    #[event]
    struct MintGold has drop, store {
        player: address,
        amount: u64,
        mint_time: u64
    }
    
    #[event]
    struct RequestLottery has drop, store {
        player: address,
        total_lottery_times: u64,
        random: u64,
        lotteryItem: LotteryItem
    }
        
    fun init_module(owner: &signer) acquires GlobalConfig {
        init_leaderboard(owner);
        init_global_config(owner);
    }

    // init leaderboard config
    fun init_leaderboard(owner: &signer) {
        only_owner(owner);
        move_to(owner, Leaderboard { leaderboard_list: vector[], last_one_index: 0, total_game_time: 0, update_time: timestamp::now_seconds() });
    }
    
    // init global config
    fun init_global_config(owner: &signer)  acquires GlobalConfig {
        only_owner(owner);
        // init
        move_to(owner, GlobalConfig { 
            weaponPriceMap: simple_map::create(),
            characterPriceMap: simple_map::create(),
            weaponLevelPriceList: vector[],
            characterLevelPriceList: vector[],
            lotteryItemList: vector[],
            totalLotteryTimes: 0
        });
        // set data
       let globalConfig = borrow_global_mut<GlobalConfig>(@AptosCodeCollision);
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

    // The player starts a new game
    public entry fun start_game(account: signer) acquires Leaderboard,PlayerLatestGameData {
        let leaderboard = borrow_global_mut<Leaderboard>(@AptosCodeCollision);

        let account_addr = signer::address_of(&account);
        let start_time = timestamp::now_seconds();
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerLatestGameData>(account_addr)) {
            move_to(&account, PlayerLatestGameData {
                player: account_addr,
                start_time: start_time,
                end_time: start_time,
                duration: 0,
                kills: 0
            })
        } else {
            let old_data = borrow_global_mut<PlayerLatestGameData>(account_addr);
            old_data.player = account_addr;
            old_data.start_time = start_time;
            old_data.end_time = start_time;
            old_data.duration = 0;
            old_data.kills = 0;
        };

        event::emit(GameStartLog {
            player: account_addr,
            start_time: start_time,
            total_game_time: leaderboard.total_game_time
        });

        leaderboard.total_game_time = leaderboard.total_game_time + 1;
    }

    // game over and submit data
    // used some specific algorithms and data structures to save the data to the leaderboard
    public entry fun game_over(account: signer, duration: u64, kills: u64) acquires Leaderboard,PlayerLatestGameData,PlayerAsset {
        let account_addr = signer::address_of(&account);
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerAsset>(account_addr)) {
            init_player(account);
        };

        let now = timestamp::now_seconds();
        assert!(exists<PlayerLatestGameData>(account_addr), error::not_found(EPLAYER_LATEST_GAME_DATA));

        // TODO: add zk proof
        
        // save player data
        let old_data = borrow_global_mut<PlayerLatestGameData>(account_addr);
        let player = old_data.player;
        assert!(player == account_addr, error::not_found(EPLAYER_INVALID));

        let may_last_time = old_data.start_time + duration + 600;
        assert!(now < may_last_time, error::not_found(ENOT_VALID_TIME));

        old_data.end_time = now;
        old_data.duration = duration;
        old_data.kills = kills;

        // the event for serach player data
        event::emit(GameOverLog {
            player: old_data.player,
            start_time: old_data.start_time,
            end_time: now,
            duration: duration,
            kills: kills
        });

        // claim reward
        let player_asset = borrow_global_mut<PlayerAsset>(account_addr);
        player_asset.gold = player_asset.gold + duration / 30 + kills / 100;
        player_asset.diamond = player_asset.diamond + kills / 100;

        // push to Leaderboard
        let leaderboard = borrow_global_mut<Leaderboard>(@AptosCodeCollision);
        let leaderboard_item = LeaderboardItem {
            sender: account_addr,
            duration,
            kills,
            create_time: now
        };
        if (vector::length(&leaderboard.leaderboard_list) < MAX_LEADERBOARD) {
            vector::push_back(&mut leaderboard.leaderboard_list, leaderboard_item);
            let min_index = find_min_kills_index(&leaderboard.leaderboard_list);
            leaderboard.last_one_index = min_index;
            return
        };

        *vector::borrow_mut(&mut leaderboard.leaderboard_list, leaderboard.last_one_index) = leaderboard_item;
        leaderboard.update_time = timestamp::now_seconds();

        // update last_one_index
        let min_index = find_min_kills_index(&leaderboard.leaderboard_list);
        leaderboard.last_one_index = min_index;
    }

    // buy or upgrade weapon
    public entry fun buy_or_upgrade_weapon(account: signer, id: u64) acquires PlayerAsset,GlobalConfig {
        let account_addr = signer::address_of(&account);
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerAsset>(account_addr)) {
            init_player(account);
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

        let globalConfig = borrow_global_mut<GlobalConfig>(@AptosCodeCollision);
        let weaponLevelMap = player_asset.weaponLevelMap;
        if(found) {
            // upgrade
            let currentLevel = simple_map::borrow_mut(&mut weaponLevelMap, &id);

            assert!(*currentLevel < 4, error::not_found(EIS_REACHED_THE_HEIGHT_LEVEL));

            let weaponLevelPriceList = globalConfig.weaponLevelPriceList;
            let goldPrice: u64 = *vector::borrow(&weaponLevelPriceList, *currentLevel+1);
            let gold = player_asset.gold;

            assert!(gold >= goldPrice, error::not_found(ENOT_ENOUGH_GOLD));

            player_asset.gold = player_asset.gold - goldPrice;
            *currentLevel = *currentLevel + 1;

            event::emit(AssetBugOrUpgradeLog {
                player: account_addr,
                id: id,
                newLevel: *currentLevel,
                message: string::utf8(b"upgrade weapon")
            });

            player_asset.weaponLevelMap = weaponLevelMap;
        } else {
            // buy
            let weaponPriceMap = globalConfig.weaponPriceMap;
            let priceItem: GamePriceItem = *simple_map::borrow_mut(&mut weaponPriceMap,&id);
            if(priceItem.priceType == 0) {
                let gold = player_asset.gold;
                assert!(gold >= priceItem.price, error::not_found(ENOT_ENOUGH_GOLD));
                player_asset.gold = player_asset.gold - priceItem.price;
                vector::push_back(&mut player_asset.weapons, id);
                simple_map::add(&mut weaponLevelMap, id , 0); 
                player_asset.weaponLevelMap = weaponLevelMap;
                event::emit(AssetBugOrUpgradeLog {
                    player: account_addr,
                    id: id,
                    newLevel: 0,
                    message: string::utf8(b"buy weapon")
                });
            } else if(priceItem.priceType == 1) {
                let diamond = player_asset.diamond;
                assert!(diamond >= priceItem.price, error::not_found(ENOT_ENOUGH_DIAMOND));
                player_asset.diamond = player_asset.diamond - priceItem.price;
                vector::push_back(&mut player_asset.weapons, id);
                simple_map::add(&mut weaponLevelMap, id , 0);
                player_asset.weaponLevelMap = weaponLevelMap;
                event::emit(AssetBugOrUpgradeLog {
                    player: account_addr,
                    id: id,
                    newLevel: 0,
                    message: string::utf8(b"buy weapon")
                });
            };
        }
    }

    // buy or upgrade character
    public entry fun buy_or_upgrade_character(account: signer, id: u64) acquires PlayerAsset,GlobalConfig {
        let account_addr = signer::address_of(&account);
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerAsset>(account_addr)) {
            init_player(account);
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

        let globalConfig = borrow_global_mut<GlobalConfig>(@AptosCodeCollision);
        let characterLevelMap = player_asset.characterLevelMap;
        if(found) {
            // upgrade
            let currentLevel = simple_map::borrow_mut(&mut characterLevelMap, &id);
            
            assert!(*currentLevel < 4, error::not_found(EIS_REACHED_THE_HEIGHT_LEVEL));

            let characterLevelPriceList = globalConfig.characterLevelPriceList;
            let goldPrice: u64 = *vector::borrow(&characterLevelPriceList, *currentLevel+1);
            let gold = player_asset.gold;

            assert!(gold >= goldPrice, error::not_found(ENOT_ENOUGH_GOLD));

            player_asset.gold = player_asset.gold - goldPrice;
            *currentLevel = *currentLevel + 1;

             event::emit(AssetBugOrUpgradeLog {
                player: account_addr,
                id: id,
                newLevel: *currentLevel,
                message: string::utf8(b"upgrade character")
            });

            player_asset.characterLevelMap = characterLevelMap;
           
        } else {
            // buy
            let characterPriceMap = globalConfig.characterPriceMap;
            let priceItem: GamePriceItem = *simple_map::borrow_mut(&mut characterPriceMap,&id);
            if(priceItem.priceType == 0) {
                let gold = player_asset.gold;
                assert!(gold >= priceItem.price, error::not_found(ENOT_ENOUGH_GOLD));
                player_asset.gold = player_asset.gold - priceItem.price;
                vector::push_back(&mut player_asset.characters, id);
                simple_map::add(&mut characterLevelMap, id , 0); 
                player_asset.characterLevelMap = characterLevelMap;
                event::emit(AssetBugOrUpgradeLog {
                    player: account_addr,
                    id: id,
                    newLevel: 0,
                    message: string::utf8(b"buy character")
                });
            } else if(priceItem.priceType == 1) {
                let diamond = player_asset.diamond;
                assert!(diamond >= priceItem.price, error::not_found(ENOT_ENOUGH_DIAMOND));
                player_asset.diamond = player_asset.diamond - priceItem.price;
                vector::push_back(&mut player_asset.characters, id);
                simple_map::add(&mut characterLevelMap, id , 0); 
                player_asset.characterLevelMap = characterLevelMap;
                event::emit(AssetBugOrUpgradeLog {
                    player: account_addr,
                    id: id,
                    newLevel: 0,
                    message: string::utf8(b"buy character")
                });
            };
        }
    }

    // lottery
    // Aptos Randomness API ensures that every draw is safe and random.
    #[randomness]
    entry fun request_lottery(account: signer) acquires GlobalConfig, PlayerAsset {
        let account_addr = signer::address_of(&account);
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerAsset>(account_addr)) {
            init_player(account);
        };

        let player_asset = borrow_global_mut<PlayerAsset>(account_addr);
        let globalConfig = borrow_global_mut<GlobalConfig>(@AptosCodeCollision);
        let totalLotteryTimes = globalConfig.totalLotteryTimes;
        let lotteryItemList = &globalConfig.lotteryItemList;
        let length = vector::length(lotteryItemList);
        let random = randomness::u64_range(0, length);
        let lotteryItem: LotteryItem = *vector::borrow(lotteryItemList, random);

        player_asset.latestLotteryItem = lotteryItem;

        // distribution rewards
        if(lotteryItem.itemType == 0) {
            // mint gold
            player_asset.gold = player_asset.gold + lotteryItem.num;
        } else if(lotteryItem.itemType == 1) {
            // mint diamond
            player_asset.diamond = player_asset.diamond + lotteryItem.num;
        } else if(lotteryItem.itemType == 2) {
            // TODO: mint skin
        } else if(lotteryItem.itemType == 3) {
            // mint weapon
            if(!vector::contains(&mut player_asset.weapons, &lotteryItem.num)) {
                let weaponLevelMap = player_asset.weaponLevelMap;
                vector::push_back(&mut player_asset.weapons, lotteryItem.num);
                simple_map::add(&mut weaponLevelMap, lotteryItem.num , 0); 
                player_asset.weaponLevelMap = weaponLevelMap;
            } else {
                // if player has this weapon, mint diamond
                player_asset.diamond = player_asset.diamond + 100;
            }
        };

        event::emit(RequestLottery {
            player: account_addr,
            total_lottery_times: totalLotteryTimes,
            random: random,
            lotteryItem: lotteryItem
        });

        globalConfig.totalLotteryTimes = totalLotteryTimes + 1;
    }

    // mint gold
    // This method is only used for testing, because players can only get gold by playing games. 
    // This method allows players to quickly experience the function of purchasing or upgrading weapons.
    // After the game is launched on the mainnet, this method may be changed to using Aptos Token to purchase.
    public entry fun mint_gold(account: signer) acquires PlayerAsset {
        let account_addr = signer::address_of(&account);
        // the first check prevents overwriting or miss-managing resources
        if (!exists<PlayerAsset>(account_addr)) {
            init_player(account);
        };

        let player_asset = borrow_global_mut<PlayerAsset>(account_addr);

        // mint gold
        player_asset.gold = player_asset.gold + 400;

        event::emit(MintGold {
            player: account_addr,
            amount: 400,
            mint_time: timestamp::now_seconds()
        });
    }

    // init player
    // Each player has a soul-bound NFT, which describes the player's status and assets in the game.
    fun init_player(account: signer) acquires PlayerAsset {
        move_to(&account, PlayerAsset {
            gold: 0,
            diamond: 0,
            weapons: vector[0],
            characters: vector[0],
            weaponLevelMap: simple_map::create(),
            characterLevelMap: simple_map::create(),
            latestLotteryItem: LotteryItem { itemType: 0, num: 0 }
        });
        let account_addr = signer::address_of(&account);
        let player_asset = borrow_global_mut<PlayerAsset>(account_addr);
        let weaponLevelMap = player_asset.weaponLevelMap;
        let characterLevelMap = player_asset.characterLevelMap;
        simple_map::add(&mut weaponLevelMap, 0 , 0);
        player_asset.weaponLevelMap = weaponLevelMap;
        simple_map::add(&mut characterLevelMap, 0 , 0); 
        player_asset.characterLevelMap = characterLevelMap;
    }

    // clear leaderboard
    public entry fun clear_leaderboard(owner: &signer) acquires Leaderboard {
        only_owner(owner);

        let leaderboard = borrow_global_mut<Leaderboard>(@AptosCodeCollision);

        leaderboard.leaderboard_list = vector[];
        leaderboard.update_time = timestamp::now_seconds();
        leaderboard.last_one_index = 0;
    }

    // get the leaderboard
    #[view]
    public fun get_top_list_info(): (vector<LeaderboardItem>, u64) acquires Leaderboard {
        let leaderboard = borrow_global<Leaderboard>(@AptosCodeCollision);

        let leaderboard_list = vector[];
        vector::for_each(leaderboard.leaderboard_list, |m| vector::push_back(&mut leaderboard_list, m));

        vector::rotate(&mut leaderboard_list, leaderboard.last_one_index);

        (leaderboard_list, leaderboard.update_time)
    }

    #[view]
    public fun get_leaderboard_kills_min_index(): u64 acquires Leaderboard {
        let leaderboard = borrow_global<Leaderboard>(@AptosCodeCollision);
        let min_index = find_min_kills_index(&leaderboard.leaderboard_list);

        min_index
    }

    fun find_min_kills_index(items: &vector<LeaderboardItem>): u64 {
        let length = vector::length(items);
        if(length == 0) {
            return 0
        };

        let min_index: u64 = 0;
        let first_item = *vector::borrow(items, 0);
        let min_kills = first_item.kills;

        let i = 0;
        while(i < length) {
            let item = *vector::borrow(items, i);
            if (item.kills < min_kills) {
                min_kills = item.kills;
                min_index = i;
            };
            i = i + 1;
        };

        min_index
    }

    // get the result of the player's current lottery
    #[view]
    public fun get_player_last_lottery_result(player: address): (u8, u64) acquires PlayerAsset {
        if (!exists<PlayerAsset>(player)) {
            return (0, 0)
        };
        let player_asset = borrow_global<PlayerAsset>(player);
        let latestLotteryItem: LotteryItem = player_asset.latestLotteryItem;
        (latestLotteryItem.itemType, latestLotteryItem.num)
    }

    // get the player's weapon data
    #[view]
    public fun get_player_all_weapons_info(player: address): (vector<u64>, vector<u64>) acquires PlayerAsset {
         if (!exists<PlayerAsset>(player)) {
            return (vector[0], vector[0])
        };
        let player_asset = borrow_global<PlayerAsset>(player);
        let weaponList = &player_asset.weapons;
        let weaponLevelMap = player_asset.weaponLevelMap;
        let length = vector::length(weaponList);

        let weaponLevelList: vector<u64> = vector[];
        let i = 0;
        while(i < length) {
            let item = *vector::borrow(weaponList, i);
            let currentLevel = *simple_map::borrow_mut(&mut weaponLevelMap, &item);
            vector::push_back(&mut weaponLevelList, currentLevel);
            i = i + 1;
        };

        (*weaponList, weaponLevelList)
    }

    // get the player's character data
    #[view]
    public fun get_player_all_characters_info(player: address): (vector<u64>, vector<u64>) acquires PlayerAsset {
         if (!exists<PlayerAsset>(player)) {
            return (vector[0], vector[0])
        };
        let player_asset = borrow_global<PlayerAsset>(player);
        let characterList = &player_asset.characters;
        let characterLevelMap = player_asset.characterLevelMap;
        let length = vector::length(characterList);

        let characterLevelList: vector<u64> = vector[];
        let i = 0;
        while(i < length) {
            let item = *vector::borrow(characterList, i);
            let currentLevel = *simple_map::borrow_mut(&mut characterLevelMap, &item);
            vector::push_back(&mut characterLevelList, currentLevel);
            i = i + 1;
        };

        (*characterList, characterLevelList)
    }

    // get the player's gold and diamond data
    #[view]
    public fun get_player_all_assets(player: address): (u64, u64) acquires PlayerAsset {
         if (!exists<PlayerAsset>(player)) {
            return (0, 0)
        };
        let player_asset = borrow_global<PlayerAsset>(player);
        (player_asset.gold, player_asset.diamond)
    }

    inline fun only_owner(owner: &signer) {
        assert!(signer::address_of(owner) == @AptosCodeCollision, error::permission_denied(ENOT_OWNER));
    }
}