const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    id_producto:{type: String, required: true, max:60},
    nombre_producto:{type: String, required: true, max:60},
    precio:{type: Number, required: true},
    mascotas:{type: String, required: true, max:15},
    
});
module.exports = mongoose.model("productos", ProductoSchema)
