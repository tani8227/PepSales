import express from 'express';
const  customerRouter= express.Router();
import * as customerController from '../../../controllers/customerController.js'

customerRouter.post('/sign-up', customerController.signUp);
customerRouter.post('/sign-in', customerController.signIn);

customerRouter.get('/get-all', customerController.getAllCustomers);           
customerRouter.patch('/update/:id',  customerController.updateCustomer);      
customerRouter.delete('/delete/:id',  customerController.deleteCustomer);

export default customerRouter;