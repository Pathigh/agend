import { Request, Response } from 'express';
import User from '../models/user';
import bcryptjs from 'bcryptjs';

export const login = async ( req: Request, res: Response ) =>{

    const { body } = req;
    const { Op} = require("sequelize");
  
    try{
         // verificar si el correo existe
        const existEmail = await User.findOne({ 
            where: {
                email: body.email
            }
        });
        if( !existEmail){
            return res.status(400).json({
                msg: 'el usuario o pass no son correctos...  ' + body.email
            });
            
        }
          // verificar si el user esta activo
          const existUser = await User.findOne({ 
              
            where: { is_active: {[Op.not]:false } } 
        });
            if( !existUser)  { 
                return res.status(400).json({
                msg: 'el usuario o pass no son correctos...  estado= false'
            });
          }  
        // verificar contraseña
        const validPassword = bcryptjs.compareSync(body.password, User.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'el usuario o pass no son correctos...  passs'
            });
        }
        
        res.json({
            msg: 'login ok'
        })

        // Generar el JWT


    }catch(error){
         console.log(error);
         res.status(500).json({
             msg: `Hable con el administrador`
         })


    }
    
}

module.exports = {
    login
}