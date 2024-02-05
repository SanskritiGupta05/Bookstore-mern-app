import  express, { request, response }  from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express(); 
//middleware for parsing request body
app.use(express.json());
//create a new route for / route
// het is an http method generally used for getting resource from server
app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome!')
});

//route to save a new book
app.post('/books', async (request,response) => {
    
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title,author,publishYear'
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

});

// Route to GET ALL Books from DB
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json(
            {
                count: books.length,
                data: books
            }
        );
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// route to get one book from DB by id
app.get('/books/:id', async (request, response) => {
    try {

        const {id} = request.params;


        const books = await Book.findById(id);

        return response.status(200).json(books);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// UPDATE a book

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
    