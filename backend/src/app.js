import express from 'express';
import notesRoutes from './routes/notesRoute.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimit from './middleware/rateLimit.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); //middleware to parse JSON bodies
app.use(rateLimit);

app.use("/api/notes", notesRoutes);

connectDB().then(() => { 
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error('Database connection error:', error);
});