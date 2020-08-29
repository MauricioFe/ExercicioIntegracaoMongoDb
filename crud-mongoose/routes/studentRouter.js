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
})


export { app as studentRouter };