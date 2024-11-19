import connectionDb from './database/conectionDb';
import { Sequelize } from 'sequelize';
import { PORT } from './config.js';
import express, { Express } from 'express';
import CoursesModel from './models/coursesModel';


const initializeDatabase = async (sequelize: Sequelize) => {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa a la base de datos.");

        await CoursesModel.sync({ force: false });
        console.log("Tabla de cursos sincronizada.");
  
    } catch (error) {
        console.error("Error al conectar la base de datos:", error);
    }
};

// Inicializa la base de datos
initializeDatabase(connectionDb);
