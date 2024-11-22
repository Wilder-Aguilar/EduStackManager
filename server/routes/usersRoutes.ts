import { Router } from 'express';
import { getAllUsers, getUserById, createUser, deleteUser, updateUser } from '../controllers/usersController';

export const userRouter = Router();

userRouter.get('/',
  getAllUsers
);
userRouter.get('/:id',
  getUserById
);
userRouter.post('/',
  createUser
);
userRouter.delete('/:id',
  deleteUser
);
userRouter.put('/:id',
  updateUser
);