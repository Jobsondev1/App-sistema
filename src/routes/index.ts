import {Router} from 'express';

import authMiddleware from '../middlewares/authMiddleware';

import UserController from '../controllers/UserController';
import AuthController from '../controllers/AuthController';
import User from '../models/Usuario';



const routes = Router();

routes.get('/', (request, response) => response.json({message:"sistema rondando"}),
);

routes.post('/users', UserController.store);
routes.post('/autenticar', AuthController.authenticate);
routes.get('/users', authMiddleware, UserController.index);

export default routes;