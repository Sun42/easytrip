const { Travelogue, User } = require('../models');
/**
 * Checks that the travelogue is owned by the user
 * @param {integer} user_id The db user id
 * @param {integer} travelogue_id The db travelogue id
 * @return {boolean} True if the travelogue is owned by the user
 * @throws {Error} will throw an error if <travelogue> is null
 * @throws {Error} will throw an error if <user> is null
 */
function checkOwnership(user_id, travelogue_id) {
    const travelogue = Travelogue.findByPk(travelogue_id);
    const user = User.findByPk(user_id);

    if (travelogue === null) {
        throw new Error ('Invalid Travelogue');
    }
    if (user === null) {
        throw new Error ('Invalid User');
    }
    if (travelogue.user_id == user_id) {
        return true;
    }
    return false;
}

module.exports = {
    checkOwnership,
};
