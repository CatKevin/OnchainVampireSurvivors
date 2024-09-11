// Define the module address and functions
export const MODULE_ADDRESS = "0x5da29a405371ee7c13caef1b53008c39a8b7692b5d0eed5ed36707360ed9cddc";

export const START_GAME_FUNCTION = `${MODULE_ADDRESS}::onchainVampireSurvivors::startGame`;
export const GAME_OVER_FUNCTION = `${MODULE_ADDRESS}::onchainVampireSurvivors::gameOver`;
export const GET_LEADERBOARD_ITEM_LIST_FUNCTION = `${MODULE_ADDRESS}::onchainVampireSurvivors::get_leaderboard_item_list`;