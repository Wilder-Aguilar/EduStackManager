import { DataTypes, Model } from 'sequelize';
import connectionDb from '../database/conectionDb';

const TutorsModel = connectionDb.define(
    'Tutors',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER
        },
        relationship: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        },
    {
        timestamps: false,
    });

console.log(TutorsModel === connectionDb.models.Tutors);

export default TutorsModel;