import express, { Router } from 'express';

import products from './controllers/products';
import users from './controllers/users';

const apiRoutes = new Router();

apiRoutes.use(express.urlencoded({ extended: false }));
apiRoutes.use(express.json());

apiRoutes.get('/users', users.find);
apiRoutes.post('/users', users.create);

apiRoutes.get('/products/:name', products.find);

export default apiRoutes;