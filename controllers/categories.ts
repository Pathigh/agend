import { Request, Response } from 'express';
import Category from '../models/category';



export const getCategories = async ( req: Request, res: Response ) =>{

    const categories = await Category.findAll();

        res.json(categories);

}