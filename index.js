import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

// Config JSON Response
app.use(express.json());

// Solve CORS
app.use(cors({ 
    credentials: true, 
    origin: 'https://endearing-belekoy-8479b4.netlify.app',
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));

// Public Folder for Imgaes
app.use(express.static('public'));

// Routes
import UserRoutes from './routes/UserRoutes.js';
import PetRoutes from './routes/PetRoutes.js';
app.use('/users', UserRoutes);
app.use('/pets', PetRoutes);

const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});