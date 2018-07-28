//Update the name of the controller below and rename the file.
const users = require("../controllers/users.js")
module.exports = function (app) {

    app.get('/users', users.index);
    app.get('/users/:id', users.getOne);
    app.post('/users', users.create);
    app.put('/users/:id', users.update);
    app.delete('/users/:id', users.delete);

}