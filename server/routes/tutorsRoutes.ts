import { Router } from 'express';
import { getAllTutors, getTutorById, createTutor, deleteTutor, updateTutor } from '../controllers/tutorsController';

export const tutorRouter = Router();

tutorRouter.get('/',
  getAllTutors
);
tutorRouter.get('/:id',
  getTutorById
);
tutorRouter.post('/',
  createTutor
);
tutorRouter.delete('/:id',
  deleteTutor
);
tutorRouter.put('/:id',
  updateTutor
);