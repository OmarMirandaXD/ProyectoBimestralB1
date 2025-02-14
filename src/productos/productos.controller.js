import Producto from '../models/Producto';

export const agregarProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json({
            success: true,
            producto: nuevoProducto
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al agregar el producto",
            error: error.message
        });
    }
};

export const obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }
        res.status(200).json({
            success: true,
            producto
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el producto",
            error: error.message
        });
    }
};

export const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json({
            success: true,
            productos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los productos",
            error: error.message
        });
    }
};

export const editarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }
        res.status(200).json({
            success: true,
            producto
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al editr el producto",
            error: error.message
        });
    }
};

export const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }
        res.status(200).json({
            success: true,
            message: "Producto eliminado"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al eliminar el producto",
            error: error.message
        });
    }
};

export const controlInventario = async (req, res) => {
    try {
        const productos = await Producto.find();
        const inventario = productos.map(producto => ({
            id: producto._id,
            nombre: producto.nombre,
            stock: producto.stock
        }));
        res.status(200).json({
            success: true,
            inventario
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener el inventario",
            error: error.message
        });
    }
};

export const productosAgotados = async (req, res) => {
    try {
        const productos = await Producto.find({ stock: 0 });
        res.status(200).json({
            success: true,
            productos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los productos agotados",
            error: error.message
        });
    }
};

export const productosMasVendidos = async (req, res) => {
    try {
        const productos = await Producto.find().sort({ ventas: -1 }).limit(10);
        res.status(200).json({
            success: true,
            productos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al obtener los productos más vendidos",
            error: error.message
        });
    }
};