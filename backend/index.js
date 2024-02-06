import  express, { request, response }  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"

const app = express(); 
//middleware for parsing request body
app.use(express.json());
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
    .catch(() => {
        console.log(error);
    });
    