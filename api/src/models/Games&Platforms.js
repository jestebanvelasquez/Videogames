const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "Games_Platforms",
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
        },
        {
            timestamps: false,
        }
    );
};

// uniqueKey: 'my_custom_unique'