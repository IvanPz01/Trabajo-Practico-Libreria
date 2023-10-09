import { Router } from "express";
import {
    ctrlGetLibros,
    ctrlGetLibroById,
    ctrlGetLibroByISBN,
    ctrlGetLibroByAnyWord,
    ctrlGetLibroByTitulo,
    ctrlGetLibroByGenero,
    ctrlCreateLibro,
    ctrlUpdateLibro,
    ctrlDeleteLibro
} from "../controllers/libro.controller.js";
import { libroSchema } from "../validations/index.js";
import { validate } from "../middlewares/validation.js";

const router = Router();

router.get("/", ctrlGetLibros);
router.get("/:id", ctrlGetLibroById);
router.get("/isbn/:isbn", ctrlGetLibroByISBN);
router.get('/search/:anyword', ctrlGetLibroByAnyWord);
router.get('/titulo/:titulo', ctrlGetLibroByTitulo);
router.get('/genero/:genero', ctrlGetLibroByGenero);
router.post("/", libroSchema, validate, ctrlCreateLibro);
router.put("/:id", libroSchema, validate, ctrlUpdateLibro);
router.delete("/:id", ctrlDeleteLibro);

export { router as libroRoutes };