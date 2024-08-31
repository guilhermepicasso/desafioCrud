import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import produtoController from './controller/produtoController.js';


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(produtoController);

servidor.use('/storage/produto', express.static('storage/produto'));

let port = process.env.PORT;
servidor.listen(port, () => console.log("API START"));