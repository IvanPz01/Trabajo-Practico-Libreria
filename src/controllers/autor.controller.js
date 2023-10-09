import { createAutor, getAutores, updateAutor, deleteAutor, getAutorById } from './autor.metodos.js';

export const ctrlGetAutores = async (req, res) => {
    try {
        const autores = await getAutores();
        res.status(200).json(autores);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlGetAutorById = async (req, res) => {
    try {
        const autor = await getAutorById(req.params.id);
        res.status(200).json(autor);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlCreateAutor = async (req, res) => {
    try {
        const autor = await createAutor(req.body);
        res.status(201).json(autor);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlUpdateAutor = async (req, res) => {
    try {
        await updateAutor(req.params.id, req.body);
        res.status(200).json({ msg: 'Autor actualizado' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlDeleteAutor = async (req, res) => {
    try {
        await deleteAutor(req.params.id);
        res.status(200).json({ msg: 'Autor eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}