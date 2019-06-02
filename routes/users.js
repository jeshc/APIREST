var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Movie = require('../models/movie');

mongoose.set('useFindAndModify', false);
var conn = mongoose.connect('mongodb+srv://developer:jajasalu2@cluster0-ll8bb.azure.mongodb.net/UCM?retryWrites=true', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

/*http://localhost:3000/api/users*/
/* GET users listing. */

function nuevaPelicula() {
  var pelicula= Movie({
    imagen:'https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/89/74/cf/8974cfa0-5e27-1c5e-390a-e97e5d12a51d/contsched.rdzrzprk.lsr/268x0w.jpg',
    fase:'Fase Uno',
    pelicula: {
      id:15,
      pelicula:'Iron Man',
      estrenoEnEEUU:'2 de mayo de 2008',
      directores:'Jon Favreau',
      guionistas:'Mark Fergus, Hawk Ostby, Art Marcum y Matt Holloway',
      productores:'Avi Arad y Kevin Feige',
      estado:'Estrenada'
    }

  });

pelicula.save(function(err, data) {
  if (err) {
    console.log("------------------------ERROR --------------------------");
  } else {
    console.log("--------------------------OK ---------------------------");
  }
});
}

function nuevasPeliculas() {

  var pelicula=[
    {imagen: "https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/89/74/cf/8974cfa0-5e27-1c5e-390a-e97e5d12a51d/contsched.rdzrzprk.lsr/268x0w.jpg",
      fase:"Fase uno",pelicula: {id: 1,
      pelicula: "Iron Man",
      estrenoEnEEUU: "2 de mayo de 2008",
      directores: "Jon Favreau",
      guionistas: "Mark Fergus, Hawk Ostby, Art Marcum y Matt Holloway",
      productores: "Avi Arad y Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://images-na.ssl-images-amazon.com/images/I/61ikONHVOAL._SY606_.jpg",
      fase:"Fase uno",pelicula: {id: 2,
      pelicula: "The Incredible Hulk",
      estrenoEnEEUU: "13 de junio de 2008",
      directores: "Louis Leterrier",
      guionistas: "Zak Penn",
      productores: "Avi Arad, Gale Anne Hurd y Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "http://t0.gstatic.com/images?q=tbn:ANd9GcRW2C1UhS8KDgvt0vRcV5044fbHvmEIXnHHpcOGksc8ULdrgfcO",
      fase:"Fase uno",pelicula: {id: 3,
      pelicula: "Iron Man 2",
      estrenoEnEEUU: "7 de mayo de 2010",
      directores: "Jon Favreau",
      guionistas: "Justin Theroux",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://vignette.wikia.nocookie.net/marvel/images/a/a9/Thor_%28Pel%C3%ADcula%29.jpg/revision/latest?cb=20110417010724&path-prefix=es",
      fase:"Fase uno",pelicula: {id: 4,
      pelicula: "Thor",
      estrenoEnEEUU: "6 de mayo de 2011",
      directores: "Kenneth Branagh",
      guionistas: "Ashley Edward Miller, Zack Stentz y Don Payne",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://is4-ssl.mzstatic.com/image/thumb/Video128/v4/b9/b8/f1/b9b8f1f7-6363-96cf-54c8-38281c6496f0/contsched.oihqldfq.lsr/268x0w.jpg",
      fase:"Fase uno",pelicula: {id: 5,
      pelicula: "Captain America: The First Avenger",
      estrenoEnEEUU: "22 de julio de 2011",
      directores: "Joe Johnston",
      guionistas: "Christopher Markus y Stephen McFeely",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://i.ytimg.com/vi/48fKIXlxaXk/maxresdefault.jpg",
      fase:"Fase uno",pelicula: {id: 6,
      pelicula: "The Avengers",
      estrenoEnEEUU: "4 de mayo de 2012",
      directores: "Joss Whedon",
      guionistas: "Joss Whedon",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/1f/Iron_Man_3_Portada.png/revision/latest?cb=20150507192606&path-prefix=es",
      fase:"Fase dos",pelicula: {id: 7,
      pelicula: "Iron Man 3",
      estrenoEnEEUU: "3 de mayo de 2013",
      directores: "Shane Black",
      guionistas: "Drew Pearce y Shane Black",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://media.comicbook.com/wp-content/uploads/2013/09/Thor_Un_Mundo_Oscuro_Poster_Latino_ex_JPosters.jpg",
      fase:"Fase dos",pelicula: {id: 8,
      pelicula: "Thor: The Dark World",
      estrenoEnEEUU: "8 de noviembre de 2013",
      directores: "Alan Taylor",
      guionistas: "Christopher Yost y Christopher Markus & Stephen McFeely",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://images-na.ssl-images-amazon.com/images/I/91OxromzoSL._SY445_.jpg",
      fase:"Fase dos",pelicula: {id: 9,
      pelicula: "Captain America: The Winter Soldier",
      estrenoEnEEUU: "4 de abril de 2014",
      directores: "Anthony y Joe Russo",
      guionistas: "Christopher Markus & Stephen McFeely",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://i.pinimg.com/originals/0a/57/ca/0a57ca21247b2036b43d91eb8c487acf.jpg",
      fase:"Fase dos",pelicula: {id: 10,
      pelicula: "Guardians of the Galaxy",
      estrenoEnEEUU: "1 de agosto de 2014",
      directores: "James Gunn",
      guionistas: "James Gunn y Nicole Perlman",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://images-na.ssl-images-amazon.com/images/I/719S7I-%2ByBL._SY679_.jpg",
      fase:"Fase dos",pelicula: {id: 11,
      pelicula: "Avengers: Age of Ultron",
      estrenoEnEEUU: "1 de mayo de 2015",
      directores: "Joss Whedon",
      guionistas: "Joss Whedon",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://peliculasyalgoma.files.wordpress.com/2017/03/ant_man_ver9_xxlg.jpg?w=816&h=9999",
      fase:"Fase dos",pelicula: {id: 12,
      pelicula: "Ant-Man",
      estrenoEnEEUU: "17 de julio de 2015",
      directores: "Peyton Reed",
      guionistas: "Edgar Wright & Joe Cornish y Adam McKay y Paul Rudd",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://images-na.ssl-images-amazon.com/images/I/71VwAGJmXrL._SY606_.jpg",
      fase:"Fase tres",pelicula: {id: 13,
      pelicula: "Captain America: Civil War",
      estrenoEnEEUU: "6 de mayo de 2016",
      directores: "Anthony y Joe Russo",
      guionistas: "Christopher Markus & Stephen McFeely",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://images-na.ssl-images-amazon.com/images/I/71VwAGJmXrL._SY606_.jpg",
      fase:"Fase tres",pelicula: {id: 14,
      pelicula: "Doctor Strange",
      estrenoEnEEUU: "4 de noviembre de 2016",
      directores: "Anthony y Joe Russo",
      guionistas: "Christopher Markus & Stephen McFeely",
      productores: "Kevin Feige",
      estado: "Estrenada"}},

    {imagen: "https://imagessl8.casadellibro.com/m/ig/8/5701988.jpg",
      fase:"Fase tres",pelicula: {id: 15,
      pelicula: "Guardians of the Galaxy Vol. 2",
      estrenoEnEEUU: "5 de mayo de 2017",
      directores: "James Gunn",
      guionistas: "James Gunn",
      productores: "Kevin Feige",
      estado: "Estrenada"}},





  ];


  Movie.collection.insert(pelicula,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);//nos expone lo que nos da la base de datos, mongoDB le asigna un ID por defecto es un tipo HASH
    }
  });
}



/*router.get('/', function(req, res, next) {
  Movie.find({}, function(err, datos) {
    res.status(200).json(datos);

  });

});*/


//No eliminar
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
      res.status(200).render('saludo', { otraCosa: datos.pelicula.pelicula,content: datos,url:datos.imagen});
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

/*Falta put y patch*/
router.patch('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.patch('/:userId', function(req, res, next) {
  Movie.findOneAndUpdate({'pelicula.id': req.params.userId},{$set:{'pelicula.id':50}},
  function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
      {mensaje: "se ha cambiado exitosamente el ID"}
    }

  });
});
router.put('/',function(req,res,next){
  res.status(405).json({mensaje:'Accion no permitida'});
});

router.put('/:userId', function(req, res, next) {
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
  Movie.update({'pelicula.id': req.params.userId},pelicula,function(){
      res.send(pelicula);
  });
});

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


function main(){
  //nuevaPelicula()
  //nuevasPeliculas();
}
main();
