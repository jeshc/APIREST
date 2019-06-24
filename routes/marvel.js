var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/movie');


router.get('/', function(req, res, next) {
  Movie.find({}, function(err, datos) {
    res.status(200).json(datos);
  });

});
router.get('/:id', function(req, res, next) {
  Movie.findOne({'pelicula.id': req.params.id
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {

      res.status(200).json(datos);
    }

  });

});




router.post('/', function(req, res, next) {
  var pelicula = Movie({
    imagen: req.body.imagen,
    fase: req.body.fase,
    pelicula:{
    id: req.body.id,
    pelicula:req.body.pelicula,
    estrenoEnEEUU:req.body.estrenoEnEEUU,
    directores:req.body.directores,
    guionistas:req.body.guionistas,
    productores:req.body.productores,
    estado:req.body.estado}
});
pelicula.save(function(err, data) {
  if (err) {
    res.status(404).json({
      mensaje: ""
    });
  } else {
    var id = req.body.id;
      res.redirect('/api/marvel/'+id)
    res.status(201)
  }
});
});

router.post('/:id',function(req,res,next){
  res.status(404).json({mensaje:'Accion no permitida'});
});

router.patch('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.patch('/:userId', function(req, res, next) {
  var peli = {
    imagen: req.body.imagen,
    fase: req.body.fase,

};
  Movie.findOneAndUpdate({'pelicula.id': req.params.userId},peli,
  function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No encontrado"
      });
    } else {
      var id = req.params.userId;
      res.redirect('/api/marvel/'+id)
      res.status(200)
    }

  });
});
router.put('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.put('/:userId',async(req,res,next)=>{
  var pelicula = {
    imagen: req.body.imagen,
    fase: req.body.fase,
    pelicula:{
    id: req.body.id,
    pelicula:req.body.pelicula,
    estrenoEnEEUU:req.body.estrenoEnEEUU,
    directores:req.body.directores,
    guionistas:req.body.guionistas,
    productores:req.body.productores,
    estado:req.body.estado}
};
  let update = req.body

  Movie.findOneAndUpdate({'pelicula.id': req.params.userId}, pelicula, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "id no encontrado"
      });
    } else {
      var id = req.body.id;
      res.redirect('/api/marvel/'+id)
      res.status(200)

    }

  });


});

router.delete('/:userId', function(req, res, next) {
  Movie.findOneAndDelete({"pelicula.id": req.params.userId/*Obtengo el valor y lo asigno a delete*/}, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});


module.exports = router;
