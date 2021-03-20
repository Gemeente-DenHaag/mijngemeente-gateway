import express, { Express } from "express";
import { baseRouter } from "./routes/BaseGatewayRoutes";
import { authRouter } from "./routes/AuthenticationRoutes";
import { ZaakRouter } from "./routes/ZaakRoutes";

import { config } from "dotenv";

const app: Express = express();
const port = 3030;

config();

app.use(baseRouter)
  .use("/authentication", authRouter);

app
  .use(baseRouter)
  .use("/zaken", ZaakRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
