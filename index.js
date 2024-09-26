import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from "./routes/users.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/", usersRoutes);

app.get("/", (req, res) => res.send("hi from home!!!"));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));