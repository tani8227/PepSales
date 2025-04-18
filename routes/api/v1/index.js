import express from 'express';
const  v1Router= express.Router();
import customerRouter from './customer.js';
import productRouter from './product.js';


v1Router.use('/customer',customerRouter);
v1Router.use('/product',productRouter);


export default v1Router;