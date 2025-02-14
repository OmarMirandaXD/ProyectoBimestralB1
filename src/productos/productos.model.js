import { Schema, model } from "mongoose";

const productoSchema = Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  vendidos: {
    type: Number,
    default: 0,
  },
  creadoEn: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: Boolean,
    default: true,
  }
},
{
  versionKey: false,
  timestamps: true,
});

productoSchema.methods.toJSON = function() {
  const { _id, ...producto } = this.toObject();
  producto.uid = _id;
  return producto;
}

export default model("Producto", productoSchema);