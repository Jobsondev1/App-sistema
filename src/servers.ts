import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({message:"sistema rondando"}))

app.listen(3000);