import { body, param, query } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const agregarProductoValidator = [
    body("nombre").notEmpty().withMessage("El nombre es requerido"),
    body("descripcion").notEmpty().withMessage("La descripción es requerida"),
    body("precio").isNumeric().withMessage("El precio debe ser un número"),
    body("categoria").notEmpty().withMessage("La categoría es requerida"),
    body("stock").isNumeric().withMessage("El stock debe ser un número"),
    validarCampos,
    handleErrors
];

export const updateProductoValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    body("nombre").optional().notEmpty().withMessage("El nombre es requerido"),
    body("descripcion").optional().notEmpty().withMessage("La descripción es requerida"),
    body("precio").optional().isNumeric().withMessage("El precio debe ser un número"),
    body("categoria").optional().notEmpty().withMessage("La categoría es requerida"),
    body("stock").optional().isNumeric().withMessage("El stock debe ser un número"),
    validarCampos,
    handleErrors
];

export const getProductoByIdValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const deleteProductoValidator = [
    param("id").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const getProductosValidator = [
    query("limite").optional().isNumeric().withMessage("El límite debe ser un número"),
    query("desde").optional().isNumeric().withMessage("El valor de inicio debe ser un número"),
    validarCampos,
    handleErrors
];