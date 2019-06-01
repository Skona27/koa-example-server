"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const UserController_1 = require("./controllers/UserController");
const typeorm_1 = require("typeorm");
typeorm_1.createConnection(Object.assign({}, config_1.config.database))
    .then(async (connection) => {
    const app = routing_controllers_1.createKoaServer({
        controllers: [UserController_1.UserController]
    });
    app.listen(3000);
    console.log("Koa application is up and running on port 3000");
})
    .catch(error => console.log(error));
//# sourceMappingURL=server.js.map