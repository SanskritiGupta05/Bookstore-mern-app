import  express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express(); 
//middleware for parsing request body
app.use(express.json());

//Middleware for handing CORS POLICY
//Option-1: Allow origins with Default of cors(*)
app.use(cors());

//Option - 2: Allow cutom origin - IT is also a BETTER way
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

//create a new route for / route
// het is an http method generally used for getting resource from server
app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome!')
});


app.use('/books', booksRoute);

//mongoose
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to DB');

        //need a function to listen to this PORT
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    