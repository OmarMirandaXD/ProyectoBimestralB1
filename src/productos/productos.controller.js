import Producto from "./productos.model.js";

export const getProductoById = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findById(id);

        if (!producto) {
            return res.status(404).json({
                success: false,
                message: "Producto no encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            producto
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener el producto",
            error: err.message
        });
    }
};


export const getProductos = async (req, res) => {
    try {
        const { limite = 5, desde = 0 } = req.query;
        const query = { status: true };

        const [total, productos] = await Promise.all([
            Producto.countDocuments(query),
            Producto.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ]);

        return res.status(200).json({
            success: true,
            total,
            productos
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al obtener los productos",
            error: err.message
        });
    }
};


export const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const producto = await Producto.findByIdAndUpdate(id, { status: false }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Producto eliminado",
            producto
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el producto",
            error: err.message
        });
    }
};


export const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedProducto = await Producto.findByIdAndUpdate(id, data, { new: true });

        res.status(200).json({
            success: true,
            msg: 'Producto Actualizado',
            producto: updatedProducto,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            msg: 'Error al actualizar producto',
            error: err.message
        });
    }
};


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