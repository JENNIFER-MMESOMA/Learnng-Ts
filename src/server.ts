import http from "http";
import app from "./app";
const httpServer = http.createServer(app);
import {connectDb} from "./utils/dbConfig";

const PORT = 3001;
const startServer = async() => {
    await connectDb();
    httpServer.listen(PORT, () => {
        console.log(`server is live on port: ${PORT}`)
    })
};

startServer();