const Producto = require("../models/producto.model")
let response ={
    msg:"",
    exito: false
}
exports.create = function(req,res){
    let producto = new Producto({
    id_producto: req.body.id_producto,
    nombre_producto: req.body.nombre_producto,
    precio: req.body.precio,
    mascotas: req.body.mascotas,
    
    })

    producto.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar producto"
            res.json(response)
            return;
        }
    response.exito = true,
    response.msg = "El producto se guardó correctamente"
    res.json(response)
    })
}
exports.find = function(req,res){
    Producto.find(function(err, productos){
        res.json(productos)
    })
}
exports.findOne = function(req,res){
    Producto.findOne({_id: req.params.id}, function(err, producto){
        res.json(productos)
    })
}

exports.update = function(req,res){
    let producto = {
        id_producto: req.body.id_producto,
        nombre_producto: req.body.nombre_producto,
        precio: req.body.precio,
        mascotas: req.body.mascotas,
    }
    Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar producto"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El producto modifico correctamente"
        res.json(response)
    })
}
exports.remove = function(req,res){
    Producto.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el producto"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "Producto eliminado correctamente"
        res.json(response)
    })
}
