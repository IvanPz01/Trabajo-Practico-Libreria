import {
    getLibros,
    getLibroById,
    createLibro,
    updateLibro,
    deleteLibro,
    getLibroByISBN,
    getLibroByAnyWord,
    getLibroByTitulo,
    getLibroByGenero
} from '../helpers/libro.metodos.js';


export const ctrlGetLibros = async (req, res) => {
    try {
        const libros = await getLibros();
        res.status(200).json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlGetLibroById = async (req, res) => {
    try {
        const libro = await getLibroById(req.params.id);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlCreateLibro = async (req, res) => {
    try {
        const libro = { ...req.body, portada: req.files.portada };
        const newLibro = await createLibro(libro);
        res.status(201).json(newLibro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlUpdateLibro = async (req, res) => {
    try {
        const libro = await updateLibro(req.params.id, req.body);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlDeleteLibro = async (req, res) => {
    try {
        const libro = await deleteLibro(req.params.id);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlGetLibroByISBN = async (req, res) => {
    try {
        const libro = await getLibroByISBN(req.params.isbn);
        res.status(200).json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlGetLibroByAnyWord = async (req, res) => {
    try {
        const libros = await getLibroByAnyWord(req.params.anyword);
        res.status(200).json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlGetLibroByTitulo = async (req, res) => {
    try {

        await getLibroByTitulo(req.params.titulo);
        res.status(200).json({ libro });
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

export const ctrlGetLibroByGenero = async (req, res) => {
    try {
        await getLibroByGenero(req.params.genero);
        res.status(200).json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}