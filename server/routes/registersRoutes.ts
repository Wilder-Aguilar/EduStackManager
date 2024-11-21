import { Router } from 'express';
import { getAllRegisters, getRegisterById, createRegister, deleteRegister, updateRegister } from '../controllers/registersController';


export const registerRouter = Router();


registerRouter.get('/',
  getAllRegisters
);
registerRouter.get('/:id',
  getRegisterById
);
registerRouter.post('/',
  createRegister
);
registerRouter.delete('/:id',
  deleteRegister
);
registerRouter.put('/:id',
  updateRegister
);
