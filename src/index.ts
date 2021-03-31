import express, { Express } from "express";
import { BaseRouter } from "./routes/BaseGatewayRoutes";
import { AuthRouter } from "./routes/AuthenticationRoutes";
import { ZaakRouter } from "./routes/ZaakRoutes";
import { StatussenRouter } from "./routes/StatusRoutes";

import { config } from "dotenv";

const app: Express = express();
const port = 3030;

config();

app.use(BaseRouter)
  .use("/authentication", AuthRouter);

app
  .use(BaseRouter)
  .use("/zaken", ZaakRouter);

app
  .use(BaseRouter)
  .use("/statussen", StatussenRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
