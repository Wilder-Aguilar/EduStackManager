import connectionDb from './database/conectionDb';
import { Sequelize } from 'sequelize';
import { registerRouter } from './routes/registersRoutes';
import { courseRouter } from './routes/coursesRoutes';
import { PORT } from './config';
import express, { Express } from 'express';
import CoursesModel from './models/coursesModel';
import RegistersModel from './models/registersModel';
import TutorsModel from './models/tutorsModel';
import UsersModel from './models/usersModel';
import cors from 'cors';

export const app: Express = express();

// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:5173', // Cambia al puerto de tu frontend
    credentials: true, // Permite cookies y encabezados de autenticación
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/registers', registerRouter);
app.use('/api/courses', courseRouter);

const initializeDatabase = async (sequelize: Sequelize) => {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa a la base de datos.");

        await CoursesModel.sync({ force: false });
        console.log("Tabla de cursos sincronizada.");

        await RegistersModel.sync({ force: false });
        console.log("Tabla de cursos sincronizada.");

        await TutorsModel.sync({ force: false });
        console.log("Tabla de cursos sincronizada.");

        await UsersModel.sync({ force: false });
        console.log("Tabla de cursos sincronizada.");
  
    } catch (error) {
        console.error("Error al conectar la base de datos:", error);
    }
};

// Inicializa la base de datos
initializeDatabase(connectionDb);

// Iniciar servidor
export const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
