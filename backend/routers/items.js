const express = require('express');

const controller = require('../controllers/items');

const itemRouter = express.Router();

itemRouter.get('/', controller.getItems);
itemRouter.post('/', controller.addItem);

itemRouter.post('/name', controller.getItemByName);

itemRouter.get('/:id', controller.getItem);
itemRouter.patch('/:id', controller.updateItem);
itemRouter.delete('/:id', controller.deleteItem);

itemRouter.get('/user/:userId', controller.getUserItems);
itemRouter.post('/user/:userId', controller.addUserItem);
itemRouter.delete('/user/:userId', controller.deleteUserItems);

module.exports = itemRouter;