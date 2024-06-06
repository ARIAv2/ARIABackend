import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import {
  replyToFrontendGET,
  replyToFrontendPOST,
} from "./controllers/dataresponse.js";

function setupMiddleware(app: Express): void {
  app.use(cors({ origin: "http://localhost:5173" }));
  app.use(bodyParser.text({ type: "text/plain" }));
}

function setupRoutes(app: Express): void {
  app.get(
    "/",
    replyToFrontendGET("text", "You requested data? Here it is: Hello!")
  );
  app.post("/", replyToFrontendPOST("text"));
}

function start(): void {
  const app: Express = express();
  const port: string | number = process.env.PORT || 3001;
  setupMiddleware(app);
  setupRoutes(app);
  app.listen(port, () =>
    console.log(
      `SERVER STARTED ON https://ariabackend.onrender.com at port ${port}`
    )
  );
}

start();
