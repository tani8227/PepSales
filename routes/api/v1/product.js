import express from 'express';
const  productRouter= express.Router();
import * as productController from '../../../controllers/productController.js'
import Auth from '../../../middleware/JWT_Auth.js';

productRouter.post('/create',Auth, productController.createProduct);
productRouter.get('/get-all',Auth,productController.getAllProducts);
productRouter.patch('/update/:id',Auth, productController.updateProduct);
productRouter.delete('/delete/:id',Auth,productController.deleteProduct);

productRouter.get('/search',Auth, productController.searchProducts);    
productRouter.get('/filter',Auth, productController.filterProducts);     
productRouter.get('/sort-price',Auth, productController.sortByPrice); 

export default productRouter;