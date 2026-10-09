import express from "express";
import cors from "cors";

// import { login } from "./controllers/AuthController";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


// app.post('/api/auth/login', login);

app.get('/', (req, res) => {
// req = mengambil data dari body dan parameter ( req.body req.para)
// res =
// res.send
res.json({message: "Welcome to POS API" });
});


export default app;