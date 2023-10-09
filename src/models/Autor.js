import { Schema, model } from "mongoose";

const autorSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    biografia: {
        type: String,
        required: true
    },
    libros: [{
        type: Schema.Types.ObjectId,
        ref: "Libro"
    }]
});

export const Autor = model("Autor", autorSchema);
