import { DataTypes, Model } from 'sequelize';
import connectionDb from '../database/conectionDb';

const RegistersModel = connectionDb.define(
    'Courses',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        schedule: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tickets: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    });

console.log(RegistersModel === connectionDb.models.Courses);

export default RegistersModel;