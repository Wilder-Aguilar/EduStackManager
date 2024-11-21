import { Request, Response } from 'express';
import UsersModel from '../models/usersModel';

//GET ALL USERS
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UsersModel.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de usuarios' });
    }
};    

// GET USER BY ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await UsersModel.findByPk(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de usuarios' });
    }
};

// CREATE USER
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await UsersModel.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error en la creación de usuarios' });
    }
};

// DELETE USER BY ID
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await UsersModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error en la eliminación de usuarios' });
    }
};

// UPDATE USER BY ID
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await UsersModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error en la actualización de usuarios' });
    }
};  