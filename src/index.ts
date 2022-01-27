import dotenv from 'dotenv';
dotenv.config();

import express, {Request,Response} from "express";
import { useRoutes } from './routers';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 1027;

const app = express();
app.use(bodyParser.json());

useRoutes(app);


app.get('/', (req: Request, res: Response)=>{
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, ()=> console.log('Servidor iniciado na porta' + PORT));
