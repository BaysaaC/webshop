import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

app.use(cors());
app.use(express.json()); // means that the server app can accept/read JSON in the body of a request (e.g. GET, POST, etc)

app.use("/api/v1/restaurants", restaurants); // where "/api/v1/restaurants" is the inital route i.e. initial URL
app.use("*", (req, res) => res.status(404).json({ error: "page not found" })); // if user goes to any other route (captured by "*"), returns a 404 page that says "not found"

export default app;