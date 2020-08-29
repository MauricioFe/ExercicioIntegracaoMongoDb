import mongoose from 'mongoose';
import express from 'express';
import {studentRouter} from './routes/studentRouter.js'
const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(3000, ()=> console.log('API Started'))

mongoose.connect('mongodb+srv://Mauricio:7468@bootcamp.ijmxh.mongodb.net/grades?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(

    console.log("Conectado ao banco Atlas")
).catch(err => {
    console.log("Erro ao conectar ao banco de dados ", err);
});


