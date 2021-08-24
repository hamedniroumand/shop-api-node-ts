import App from "./app";
import {config} from "dotenv";
config ();
import "../infrastructure/connections/mongoose";
const app = new App(Number(process.env.APP_PORT));
app.start();