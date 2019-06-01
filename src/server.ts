import { config } from "./config";
import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { ConnectionOptions, createConnection } from "typeorm";

createConnection({ ...(config.database as ConnectionOptions) })
  .then(async connection => {
    const app = createKoaServer({
      controllers: [UserController]
    });

    app.listen(3000);

    console.log("Koa application is up and running on port 3000");
  })
  .catch(error => console.log(error));
