import express from 'express'
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import './config/sql-database-connection.js'

dotenv.config();

const app = express();
const PORT = 7001;

app.get('/', (req,res)=>{
    res.status(200);
    res.send("Welcome to the node - express server")
});

app.use('/api/users', userRoutes);

app.listen(PORT, (error)=>{
    if(!error){
        console.log('Server is running in the port 7001');
    }
    else{
        console.log(error, 'Error in the server');
    }
})