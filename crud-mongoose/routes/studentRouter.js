import express from 'express';
import { studentModel } from '../models/student.js'

const app = express();

app.post('/student', async (req, res) => {
    try {
        const student = new studentModel(req.body);
        await student.save();
        res.send(student)
    } catch (error) {
        res.status(500).send(error)
    }
});

app.get('/student', async (req, res) => {
    try {
        const student = await studentModel.find({});
        res.send(student);
    } catch (error) {
        res.status(500).send(error)
    }
});

app.patch('student/:id', async (req, res)=>{
    try {
        const id = req.params.id;
        studentModel.findByIdAndUpdate({_id:id}, req.body, {new: true});
res.sed
    } catch (error) {
        
    }
})


export { app as studentRouter };