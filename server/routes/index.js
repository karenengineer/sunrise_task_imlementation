const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

const verifySignUp = require('./verifySignUp');
const controller = require('../controllers').user;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    app.post('/api/todos', todosController.create);
    app.get('/api/todos', todosController.list);
    app.get('/api/todos/:todoId', todosController.retrieve);
    app.put('/api/todos/:todoId', todosController.update);
    app.delete('/api/todos/:todoId', todosController.destroy);

    app.post('/api/todos/:todoId/items', todoItemsController.create);
    app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
    app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

    //  Sign up / Sign in 
    app.post('/api/auth/signup', verifySignUp.checkDuplicateUserName, controller.signup);
    app.post('/api/auth/signin', controller.signin);
};
