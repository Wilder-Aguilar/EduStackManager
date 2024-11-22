import { Request, Response } from 'express';
import CoursesModel from '../models/coursesModel';


// GET ALL COURSES
export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await CoursesModel.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de cursos' });
    }
};    

// GET COURSE BY ID
export const getCourseById = async (req: Request, res: Response) => {
    try {
        const course = await CoursesModel.findByPk(req.params.id);
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error en la consulta de cursos' });
    }
};

// CREATE COURSE
export const createCourse = async (req: Request, res: Response) => {
    try {
        const course = await CoursesModel.create(req.body);
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error en la creación de cursos' });
    }
};

// DELETE COURSE BY ID
export const deleteCourse = async (req: Request, res: Response) => {
    try {
        const course = await CoursesModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error en la eliminación de cursos' });
    }
};

// UPDATE COURSE BY ID
export const updateCourse = async (req: Request, res: Response) => {
    try {
        const course = await CoursesModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error en la actualización de cursos' });
    }
};