const express = require('express')

const rutas=express.Router()

const Esquema=require('../Modelos/bd_articulos')

rutas.post('/nuevo',(req,res)=>{
    let body=req.body
    let guardar=new Esquema({
        nombre:body.nombre,
        descripcion:body.descripcion,
        valor:body.valor,
        cantidad:body.cantidad,
        usuario:body.usuario,
        imagen:body.imagen
    })
    guardar.save((err,guardadodb)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json(guardadodb)
        }
    })
    //res.json({body})
})

rutas.get('/todo',(req,res)=>{
    Esquema
        .find({})
        .then(datos=>res.json(datos))
})

rutas.post('/actualizar2',(req,res)=>{
    let body=req.body
    if(body.nombre!=""){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                nombre:body.nombre
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log(info)
            }
        })
    }
    if(body.descripcion!=""){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                descripcion:body.descripcion
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log(info)
            }
        })
    }
    if(body.cantidad!=0){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                cantidad:body.cantidad
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log(info)
            }
        })
    }
    if(body.imagen!=""){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                imagen:body.imagen
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log(info)
            }
        })
    }
    if(body.valor!=""){
        Esquema.findByIdAndUpdate(body.id,{
            $set:{
                valor:body.valor
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log(info)
            }
        })
    }
})

rutas.post('/actualizar',(req,res)=>{
    let body=req.body
    Esquema.updateOne({nombre:body.nombre},{
        $set:{
            cantidad:body.cantidad,
            imagen:"No existe"
        }
    },function(error,info){
        if(error){
            res.send(error)
        }
        else{
            res.json(info)
        }
    })
})

rutas.post('/intercambiar',(req,res)=>{
    let body=req.body
    Esquema
        .findByIdAndUpdate(body.id,{
            $set:{
                mensaje:body.mensaje,
                usuario_c:body.usuario_c
            }
        },function(error,info){
            if(error){
                console.log(error)
            }
            else{
                console.log(info)
            }
        })
})

rutas.get('/borrar/:id',(req,res)=>{
    let {id}=req.params
    Esquema
        .findByIdAndDelete(id)
        .then(res.send("<h1>Documento borrado</h1>"))
})
module.exports=rutas