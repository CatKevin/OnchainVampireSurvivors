// Define the module address and functions
export const MODULE_ADDRESS = "0xb187cca2a31f8796e2e44e1888c702010cc124bf93b85bd286e3e6499ec5666f";
export const MODULE_NAME = "onchainVampireSurvivors";

// write
export const START_GAME_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::start_game`;
export const GAME_OVER_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::game_over`;
export const BUY_OR_UPGRADE_WEAPON_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::buy_or_upgrade_weapon`;
export const BUY_OR_UPGRADE_CHARACTER_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::buy_or_upgrade_character`;
export const REQUEST_LOTTERY_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::request_lottery`;
export const MINT_GOLD_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::mint_gold`;

// read
export const GET_TOP_LIST_INFO_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::get_top_list_info`;
export const GET_PLAYER_LAST_LOTTERY_RESULT_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::get_player_last_lottery_result`;
export const GET_PLAYER_ALL_WEAPONS_INFO_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::get_player_all_weapons_info`;
export const GET_PLAYER_ALL_CHARACTERS_INFO_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::get_player_all_characters_info`;
export const GET_PLAYER_ALL_ASSETS_FUNCTION = `${MODULE_ADDRESS}::${MODULE_NAME}::get_player_all_assets`;
