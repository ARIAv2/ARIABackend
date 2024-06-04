import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { replyToFrontendGET, replyToFrontendPOST, } from "./controllers/dataresponse.js";
function setupMiddleware(app) {
    app.use(cors({ origin: "http://aria-delta.vercel.app" }));
    app.use(bodyParser.text({ type: "text/plain" }));
}
function setupRoutes(app) {
    app.get("/", replyToFrontendGET("text", "You requested data? Here it is: Hello!"));
    app.post("/", replyToFrontendPOST("text"));
}
function start() {
    const app = express();
    const port = process.env.PORT || 3001;
    setupMiddleware(app);
    setupRoutes(app);
    app.listen(port, () => console.log(`SERVER STARTED ON https://ariabackend.onrender.com at port ${port}`));
}
start();
