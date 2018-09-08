module.exports = function (sequelize, DataTypes) {
    var FavActivities = sequelize.define("FavActivities", {
        activity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    FavActivities.associate = function (models) {
        models.FavActivities.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return FavActivities;
};