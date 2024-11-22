import { DataTypes, Model } from 'sequelize';
import connectionDb from '../database/conectionDb';

const CoursesModel = connectionDb.define(
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
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        schedule: {
            type: DataTypes.TIME,
            allowNull: true,
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

console.log(CoursesModel === connectionDb.models.Courses);

export default CoursesModel;