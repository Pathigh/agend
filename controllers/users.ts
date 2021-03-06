import { Request, Response } from 'express';
import User from '../models/user';

import bcryptjs from 'bcryptjs';

export const getUsers = async ( req: Request, res: Response ) =>{

    const users = await User.findAll();

        res.json(users);

}


export const getUser = async ( req: Request, res: Response ) =>{

    const { id } = req.params;

    const user = await User.findByPk(id);
    if(user){
        res.json( user );
    }else{
        res.status(404).json({
            message: `No existe un usuario con el id ${id}`
        });
    }
}


 export const postUser = async ( req: Request, res: Response ) =>{

    const { body  } = req;
    
    try{
            // verificar si el correo existe
        const existEmail = await User.findOne({
            where: {
                email: body.email
            }
        });
        if( existEmail){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email' + body.email
            });
        }
        // encriptar la contraseña

        const salt = bcryptjs.genSaltSync();
        body.password = bcryptjs.hashSync(body.password, salt)

        // guardar en la BD
        const user = await User.create(body);
        res.json( user );

    }catch(error){
         console.log(error);
         res.status(500).json({
             msg: `Hable con el administrador`
         })


    }
    
}

export const putUser = async ( req: Request, res: Response ) =>{

    const { id } = req.params;
    const { body } = req;
    
    try{

        const user = await User.findByPk(id);
        
        if(!user){
            return res.status(404).json({
                msg: 'No existe un el id  ' + id
             });
        }

        const existEmail = await User.findOne({
            where: {
                email: body.email
            }
        });
        if( existEmail){
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }

        await user.update(body)
        res.json(user);
        
    }catch(error){
         console.log(error);
         res.status(500).json({
             msg: `Hable con el administrador`
         })


    }
    

}

export const deleteUser = async ( req: Request, res: Response ) =>{

    const { id } = req.params;

    const user = await User.findByPk(id);
        
        if(!user){
            return res.status(404).json({
                msg: 'No existe un el id  ' + id
             });
        }
    
        await user.update({is_active: false });

    res.json( user)

}
