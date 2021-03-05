import express, {Express} from "express";
import {baseRouter} from "./routes/BaseGatewayRoutes";

const app: Express = express();
const port: number = 3030;

app.use(baseRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})