import { Router } from "express";
import {
    getProductoById,
    getProductos,
    deleteProducto,
    updateProducto,
    agregarProducto
} from "./productos.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *         - precio
 *         - categoria
 *         - stock
 *       properties:
 *         id:
 *           type: string
 *           description: ID autogenerado del producto
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *         descripcion:
 *           type: string
 *           description: Descripción del producto
 *         precio:
 *           type: number
 *           description: Precio del producto
 *         categoria:
 *           type: string
 *           description: Categoría del producto
 *         stock:
 *           type: number
 *           description: Stock del producto
 *         vendidos:
 *           type: number
 *           description: Cantidad de productos vendidos
 *         creadoEn:
 *           type: string
 *           format: date
 *           description: Fecha de creación del producto
 *         status:
 *           type: boolean
 *           description: Estado del producto
 *       example:
 *         id: d5fE_asz
 *         nombre: Producto Ejemplo
 *         descripcion: Descripción del producto ejemplo
 *         precio: 100
 *         categoria: Categoría Ejemplo
 *         stock: 50
 *         vendidos: 10
 *         creadoEn: 2023-10-01T00:00:00.000Z
 *         status: true
 */

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Gestión de productos
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de todos los productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
router.get("/", getProductos);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto obtenido por ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.get("/:id", getProductoById);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Agregar un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       500:
 *         description: Error al agregar el producto
 */
router.post("/", agregarProducto);

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al actualizar el producto
 */
router.put("/:id", updateProducto);

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error al eliminar el producto
 */
router.delete("/:id", deleteProducto);

export default router;