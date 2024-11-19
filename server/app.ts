import connectionDb from './database/conectionDb';
import { Sequelize } from 'sequelize';
import { PORT } from './config.js';
import express, { Express } from 'express';


const initializeDatabase = async (sequelize: Sequelize) => {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa a la base de datos.");
  
    } catch (error) {
        console.error("Error al conectar la base de datos:", error);
    }
};

// Inicializa la base de datos
initializeDatabase(connectionDb);
