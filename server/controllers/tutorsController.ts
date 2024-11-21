import { Request, Response } from 'express';
import TutorsModel from '../models/tutorsModel';


// GET ALL TUTORS
export const getAllTutors = async (req: Request, res: Response) => {
    try {
        const tutors = await TutorsModel.findAll();
        res.json(tutors);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de tutores' });
    }
};    

// GET TUTOR BY ID
export const getTutorById = async (req: Request, res: Response) => {
    try {
        const tutor = await TutorsModel.findByPk(req.params.id);
        res.json(tutor);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de tutores' });
    }
};

// CREATE TUTOR
export const createTutor = async (req: Request, res: Response) => {
    try {
        const tutor = await TutorsModel.create(req.body);
        res.json(tutor);
    } catch (error) {
        res.status(500).json({ message: 'Error en la creación de tutores' });
    }
};

// DELETE TUTOR BY ID
export const deleteTutor = async (req: Request, res: Response) => {
    try {
        const tutor = await TutorsModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(tutor);
    } catch (error) {
        res.status(500).json({ message: 'Error en la eliminación de tutores' });
    }
};

// UPDATE TUTOR BY ID
export const updateTutor = async (req: Request, res: Response) => {
    try {
        const tutor = await TutorsModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(tutor);
    } catch (error) {
        res.status(500).json({ message: 'Error en la actualización de tutores' });
    }
};      