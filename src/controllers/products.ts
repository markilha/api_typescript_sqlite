import {Request,Response} from 'express'
import { Product, productModel } from '../models/product';
import { badRequest } from '../services/util';

const insertProduct = (req: Request, res: Response)=>{
    {
    const product = req.body.product;
    if(!product)
        return badRequest(res,"Produto inválido");
    if(!product.name)
        return badRequest(res,'Informe o nome do produto');
    if(parseFloat(product.price)> 0)
        return badRequest(res,'Informe o preço do produto');
    }
    const product = req.body.product as Product;
    productModel.insertProduct(product);
}


export const productController ={
    insertProduct
}