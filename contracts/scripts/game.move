module hello_blockchain::atopList3 {
    use std::error;
    use std::signer;
    use std::vector;
    use aptos_framework::event;
    use aptos_framework::timestamp;

    const ENOT_OWNER: u64 = 1;

    const MAX_LEADERBOARD: u64 = 5;

    struct Leaderboard has key {
        leaderboard_list: vector<LeaderboardItem>,
        last_one_index: u64,
        update_time: u64
    }

    struct LeaderboardItem has store, copy, drop {
        sender: address,
        duration: u64,
        kills: u64,
        create_time: u64
    }

    #[event]
    struct AddedLeaderboardItem has drop, store {
        sender: address,
        duration: u64,
        kills: u64,
        create_time: u64
    }

    fun init_module(owner: &signer) {
        move_to(owner, Leaderboard { leaderboard_list: vector[], last_one_index: 0, update_time: timestamp::now_seconds() })
    }

    public entry fun add_leaderboard_item(sender: &signer, duration: u64, kills: u64) acquires Leaderboard {
        // TODO: add zk proof

        let leaderboard_item = LeaderboardItem {
            sender: signer::address_of(sender),
            duration,
            kills,
            create_time: timestamp::now_seconds()
        };

        event::emit(AddedLeaderboardItem {
            sender: leaderboard_item.sender,
            duration: leaderboard_item.duration,
            kills: leaderboard_item.kills,
            create_time: leaderboard_item.create_time
        });

        let leaderboard = borrow_global_mut<Leaderboard>(@hello_blockchain);

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