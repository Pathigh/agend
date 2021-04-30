import express,{Application} from 'express';

import userRoutes from '../routes/user';
import categoryRoutes from '../routes/category';
import auth from '../routes/auth';
import cors from 'cors';
import db from '../db/connection';

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        auth: '/api/login',
        users:'/api/usuarios',
        category: '/api/categorias',
        
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';

        //connection
        this.dbConnection();
        // middelewares
        this.middlewares();
       
        // definir mis rutas
        this.routes();
    }

    routes(){
        this.app.use(this.apiPaths.users, userRoutes)
        this.app.use(this.apiPaths.auth, auth)
        this.app.use(this.apiPaths.category, categoryRoutes)
    }

    // TODO conectar con la base de datos
    async dbConnection(){
        try {
            await db.authenticate();

            console.log('La base de datos esta online..!!!');
        }catch(error){
            throw new Error(error);
        }
    }

    middlewares(){

        // Cors

            this.app.use(cors());
        // Lectura del body
            this.app.use(express.json());
        // carpeta publica
        this.app.use(express.static('public'));
    }


    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor Corriendo en Puerto...!!! ' + this.port);
        })
    }
}
export default Server;