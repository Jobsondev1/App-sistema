import { Request, Response } from "express";
import { getRepository} from 'typeorm';

import User from '../models/Usuario'

class UserController{
    index(req:Request, res:Response) {
        return res.send( {userID: req.userId});
    }
    
   async store(req:Request, res:Response){
   const repository = getRepository(User);
   const { nome, password} = req.body;    

   const userExixts = await repository.findOne({ where: {nome}});

   if (userExixts){
        return res.sendStatus(409)
    }  
    
    const user = repository.create({ nome, password});
    await repository.save(user);

    return res.json(user);
  }
}

export default new UserController();