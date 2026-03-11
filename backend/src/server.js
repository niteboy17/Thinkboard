import express from 'express';
import notesRoutes from './routes/nodesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: "http://localhost:5173", // Allow requests from this origin
}));
app.use(express.json());    //middeleware to parse JSON bodies in requests
app.use(rateLimiter);


//simple custom middleware to log request method and URL
app.use((req, res, next) => {
    console.log(`Request method is ${req.method} and Request URL is ${req.url}`);
    next();
})

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    });
});


