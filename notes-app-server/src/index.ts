import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({ datasources: { db: { url: "mysql://user:password@localhost:3306/databasename" } } });

app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
    const notes = await prisma.note.findMany();

    res.json(notes);
});

app.post("/api/notes", async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res
            .status(400)
            .json({ error: 'Title and content are required' });
    }

    try {
        const note = await prisma.note.create({
            data: {
                title,
                content
            }
        });
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
})

app.put("/api/notes/:id", async (req, res) => {
    const { title, content } = req.body;
    const id = parseInt(req.params.id);

    if (!title || !content) {
        return res
            .status(400)
            .json({ error: 'Title and content are required' });
    }

    if (!id || isNaN(id)){
        return res
            .status(400)
            .json({ error: 'Id must have a valid number' });
    }

    try {
        const updatedNote =
            await prisma.note.update({
                where: { id },
                data: { title, content }
            });
        res.json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.delete("/api/notes/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id || isNaN(id)){
        return res
            .status(400)
            .json({ error: 'Id must have a valid number' });
    }

    try {
        await prisma.note.delete({ where: { id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});