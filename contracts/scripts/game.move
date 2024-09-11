module hello_blockchain::onchainVampireSurvivors {
    use std::error;
    use std::signer;
    use std::vector;
    use aptos_framework::event;
    use aptos_framework::timestamp;

    const ENOT_OWNER: u64 = 1;
    const ENO_PLAYER_LATEST_GAME_DATA: u64 = 2;
    const ENO_PLAYER_INVALID: u64 = 3;

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

    fun init_module(owner: &signer) {
        move_to(owner, Leaderboard { leaderboard_list: vector[], last_one_index: 0, total_game_time: 0, update_time: timestamp::now_seconds() })
    }


    public entry fun startGame(account: signer) acquires Leaderboard,PlayerLatestGameData {
        let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);

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

    public entry fun gameOver(sender: signer, duration: u64, kills: u64) acquires Leaderboard,PlayerLatestGameData {
        let account_addr = signer::address_of(&sender);
        let now = timestamp::now_seconds();
        assert!(exists<PlayerLatestGameData>(account_addr), error::not_found(ENO_PLAYER_LATEST_GAME_DATA));

        // TODO: add zk proof
        
        // save player data
        let old_data = borrow_global_mut<PlayerLatestGameData>(account_addr);
        let player = old_data.player;
        assert!(player == account_addr, error::not_found(ENO_PLAYER_INVALID));
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

        // push to Leaderboard
        let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);
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

    public entry fun lottery() acquires Leaderboard {
        let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);
        // The aptos_framework::randomness feature is unavailable on the mainnet
        let random = aptos_framework::timestamp::now_microseconds() % 100;
        leaderboard.update_time = random;
    }

    public entry fun clear_leaderboard(owner: &signer) acquires Leaderboard {
        only_owner(owner);

        let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);

        leaderboard.leaderboard_list = vector[];
        leaderboard.update_time = timestamp::now_seconds();
        leaderboard.last_one_index = 0;
    }

    #[view]
    public fun get_leaderboard_item_list(): (vector<LeaderboardItem>, u64) acquires Leaderboard {
        let leaderboard = borrow_global<Leaderboard>(@hello_blockchain);

        let leaderboard_list = vector[];
        vector::for_each(leaderboard.leaderboard_list, |m| vector::push_back(&mut leaderboard_list, m));

        vector::rotate(&mut leaderboard_list, leaderboard.last_one_index);

        (leaderboard_list, leaderboard.update_time)
    }

    #[view]
    public fun get_leaderboard_kills_min_index(): u64 acquires Leaderboard {
        let leaderboard = borrow_global<Leaderboard>(@hello_blockchain);
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

    inline fun only_owner(owner: &signer) {
        assert!(signer::address_of(owner) == @hello_blockchain, error::permission_denied(ENOT_OWNER));
    }

}