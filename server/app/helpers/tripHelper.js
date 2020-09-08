const { Travelogue, User } = require('../models');
/**
 * Checks that the travelogue is owned by the user
 * @param {integer} user_id The db user id
 * @param {integer} travelogue_id The db travelogue id
 * @return {boolean} True if the travelogue is owned by the user
 * @throws {Error} will throw an error if <travelogue> is null
 * @throws {Error} will throw an error if <user> is null
 */
async function checkOwnership(user_id, travelogue_id) {
    const travelogue = await Travelogue.findByPk(travelogue_id);
    const user = await User.findByPk(user_id);

    if (travelogue === null) {
        console.error('Travelogue not found');
        return false;
    }
    if (user === null) {
        console.error('User not found');
        return false;
    }
    console.log(travelogue);
    if (travelogue.user_id == user_id) {
        return true;
    }
    return false;
}

module.exports = {
    checkOwnership,
};
