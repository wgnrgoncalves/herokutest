var faker = require("faker");
let unidades = require('./unidades.json');

var appRouter = function (app) {
    app.get("/api/teste", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });
    app.get('/', (req, res) => res.render('pages/index'));

    app.get("/api/producao/unidades", function (req, res) {
        
        console.log(req);
        res.status(200).send(unidades);
    });


    app.get("/api/users", function (req, res) {
        var data = ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(data);
    });




    app.get("/api/users/:num", function (req, res) {
        var users = [];
        var num = req.params.num;

        if (isFinite(num) && num > 0) {
            for (i = 0; i <= num - 1; i++) {
                users.push({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email()
                });
            }

            res.status(200).send(users);

        } else {
            res.status(400).send({ message: 'invalid number supplied' });
        }
    });


}

module.exports = appRouter;