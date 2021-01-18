import { Request, Response } from "express";
import { getRepository} from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/Usuario';

class AuthController{
   async authenticate(req:Request, res:Response){
   const repository = getRepository(User);
   const { nome, password} = req.body;    

   const user = await repository.findOne({ where: {nome}});

   if (!user){
        return res.sendStatus(401);
    }  

    const inValidPassword = await bcrypt.compare(password, user.password);

    if (!inValidPassword){
        return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, 'secret', {expiresIn: '1d' });

    delete user.password; 

    return res.json({
        user,
        token,
    });

  }
}

export default new AuthController();