const User = require('./user');
const Travelogue = require('./travelogue');
const Activity = require('./activity');
const Category = require('./category');

//Associations

// User and travelogues
User.hasMany(Travelogue, {
    foreignKey: 'user_id',
});

Travelogue.belongsTo(User, {
    foreignKey: 'user_id',
});

// Activity and travelogue 
Activity.belongsTo(Travelogue, {
    foreignKey: 'travelogue_id'
});

Travelogue.hasMany(Activity, {
    foreignKey: 'travelogue_id'
});

// Activity and category
Activity.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Activity, {
    foreignKey: 'category_id'
});

module.exports = {User, Travelogue, Activity, Category};