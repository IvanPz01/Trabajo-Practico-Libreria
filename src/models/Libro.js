import { Schema, model } from "mongoose";
import { addLibroToAutor, deleteLibroToAutor } from "./Autor.js";
import { uploadImageToCloudinary } from "../helpers/uploadImage.js";

const libroSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: Schema.Types.ObjectId,
    ref: "Autor",
  },
  isbn: {
    type: String,
    required: true,
  },
  editorial: {
    type: String,
    required: true,
  },
  fechaPublicacion: {
    type: Date,
    required: true,
  },
  portada: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
});

export const Libro = model("Libro", libroSchema);
