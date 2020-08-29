import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Mauricio:7468@bootcamp.ijmxh.mongodb.net/grades?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(

    console.log("Conectado ao banco Atlas")
).catch(err => {
    console.log("Erro ao conectar ao banco de dados ", err);
});

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    lastModified: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('student', studentSchema, 'student');

const student = mongoose.model('student');

new student({
    name: "Paulo Assis",
    subject: "Matemática",
    type: "Trabalho Prático",
    value: 22
}).save().then(() => console.log("Documento Inserido")).catch(err => console.log("Erro ao inserir o documento"))
