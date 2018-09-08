module.exports = function (sequelize, DataTypes) {
    var FavLocations = sequelize.define("FavLocations", {
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    FavLocations.associate = function (models) {
        models.FavLocations.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return FavLocations;
};