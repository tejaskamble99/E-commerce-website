import express from 'express';
import userRoute from './routes/user.js';
import { connectDB } from './utils/features.js';
const app = express();
const port = 4000;
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API Working with /api/v1");
});
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log(`Tejas is working on http://localhost:${port}`);
});
