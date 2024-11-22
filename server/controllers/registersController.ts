import { Request, Response } from 'express';
import RegistersModel from '../models/registersModel';


// GET ALL REGISTERS
export const getAllRegisters = async (req: Request, res: Response) => {
    try {
        const registers = await RegistersModel.findAll();
        res.json(registers);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de registros' });
    }
};    

// GET REGISTER BY ID
export const getRegisterById = async (req: Request, res: Response) => {
    try {
        const register = await RegistersModel.findByPk(req.params.id);
        res.json(register);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de registros' });
    }
};

// CREATE REGISTER
export const createRegister = async (req: Request, res: Response) => {
    try {
        const register = await RegistersModel.create(req.body);
        res.json(register);
    } catch (error) {
        res.status(500).json({ message: 'Error en la creación de registros' });
    }
};

// DELETE REGISTER BY ID
export const deleteRegister = async (req: Request, res: Response) => {
    try {
        const register = await RegistersModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(register);
    } catch (error) {
        res.status(500).json({ message: 'Error en la eliminación de registros' });
    }
};

// UPDATE REGISTER BY ID
export const updateRegister = async (req: Request, res: Response) => {
    try {
        const register = await RegistersModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(register);
    } catch (error) {
        res.status(500).json({ message: 'Error en la actualización de registros' });
    }
};  