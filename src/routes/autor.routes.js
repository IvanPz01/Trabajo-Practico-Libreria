import { Router } from "express";
import { autorSchema } from '../validations/index.js';
import { validate } from '../middlewares/validation.js';
import {
    ctrlCreateAutor,
    ctrlGetAutores,
    ctrlGetAutorById,
    ctrlUpdateAutor,
    ctrlDeleteAutor
} from "../controllers/autor.controller.js";
const router = Router();

router.get("/", ctrlGetAutores);
router.get("/:id", ctrlGetAutorById);
router.post("/", autorSchema, validate, ctrlCreateAutor);
router.put("/:id", autorSchema, validate, ctrlUpdateAutor);
router.delete("/:id", ctrlDeleteAutor);


export { router as autorRoutes };