import express, {Express} from "express";
import {baseRouter} from "./routes/BaseGatewayRoutes";
import {authRouter} from "./routes/AuthenticationRoutes";

const app: Express = express();
const port: number = 3030;

app.use(baseRouter)
    .use('/authentication', authRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})