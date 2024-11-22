import { DataTypes, Model } from 'sequelize';
import connectionDb from '../database/conectionDb';

const UsersModel = connectionDb.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        role:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        },
    {
        timestamps: false,
    });

console.log(UsersModel === connectionDb.models.Users);

export default UsersModel;