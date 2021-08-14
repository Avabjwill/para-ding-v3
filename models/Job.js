const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {
}

Job.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        applied: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'job',
    }
);

module.exports = Job;
