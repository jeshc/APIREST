var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/movie');
/*http://localhost:3000/api/users*/
/* GET users listing. */

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
      //res.status(200).render('saludo', { otraCosa: datos.pelicula.pelicula,content: datos,url:datos.imagen});
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});
/*router.get('/:userId', function(req, res, next) {
  Movie.findOne({'pelicula.id': req.params.userId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {

      res.status(200).render('saludo', { otraCosa: datos.pelicula.pelicula,content: datos,url:datos.imagen});

    }

  });
  //res.json(req.params.userId);
});*/
//  var id = req.body.id;
//  res.redirect('/api/users/'+id)





/*router.post('/submit',function(req,res,next){
var id= req.params.id
  res.redirect('/...')
  res.status(405).json({mensaje:'Accion no permitida'});
});*/




/*router.post('/', function(req, res, next) {
  var usuario = Movie({
    imagen: "URL imagen",
    fase:"200000",
    pelicula: {
      id: 75,
      pelicula:"El asesineitor",
      estrenoEnEEUU:"3000",
      directores:"¿?",
      guionistas:"anuma",
      productores:"-",
      estado:"Proximamente"
    }
  });
  //res.send(usuario);
  usuario.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});*/




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
      mensaje: "Error al guardar"
    });
  } else {
    var id = req.body.id;
      res.redirect('/api/users/'+id)
    res.status(201)/*.json(data);*/
  }
});
});

router.post('/:id',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});
/*Falta put y patch*/
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
      res.redirect('/api/users/'+id)
      res.status(200)/*.json(data);*/
      //res.status(200).json(datos);
      //{mensaje: "se ha cambiado exitosamente el ID"}
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
      //res.status(200).render('saludo', { otraCosa: datos.pelicula.pelicula,content: datos,url:datos.imagen});
      //res.status(200).json(datos);
      var id = req.body.id;
      res.redirect('/api/users/'+id)
      res.status(200)/*.json(data);*/

    }

  });


});

/* *********ESTE PUT FUNCIONA***********
   *********NO ELIMINAR******************
router.put('/:userId', function(req, res, next) {
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
  Movie.update({'pelicula.id': req.params.userId},pelicula,function(){
      res.send(pelicula);
  });
});
        FIN DEL PUT***********/
  /*{$set:{'imagen':"https://www.obs-edu.com/sites/default/files/wp-content/uploads/sites/3/2015/12/Time-for-Change.jpg"}},
  {$set:{'fase':"Nueva fase"}},
  {$set:{'pelicula.pelicula':"Nueva pelicula"}},
  {$set:{'pelicula.estrenoEnEEUU':"2030"}},
  {$set:{'pelicula.directores':"Desconocidos"}},
  {$set:{'pelicula.guionistas':"Nuevos"}},
  {$set:{'pelicula.productores':"Sin"}},
  {$set:{'pelicula.estado':"Proximamente"}},
*/


/*router.put('/?id=10', function(req, res, next) {
    Movie.update(
      {'pelicula.id': req.params.id=10},
      {
          $set:{imagen: req.body.imagen,
          fase: req.body.fase,
          pelicula:{
          id: req.body.id,
          pelicula:req.body.pelicula,
          estrenoEnEEUU:req.body.estrenoEnEEUU,
          directores:req.body.directores,
          guionistas:req.body.guionistas,
          productores:req.body.productores,
          estado:req.body.estado}}
      }
    )
  });*/
  //res.json(req.params.userId);






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
