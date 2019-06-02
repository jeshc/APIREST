var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Final' });
});
router.get('/hola', function(req, res, next) {
  	//Solicitud a una ruta API REST
  //res.render('saludo', { url: 'https://peliculasyalgoma.files.wordpress.com/2017/03/ant_man_ver9_xxlg.jpg?w=816&h=9999', content: 'Pelicula',otraCosa: 'Pelicula'  });
  //res.render('saludo', { content: 'Pelicula' });
  //res.render('saludo', { otraCosa: 'saldra?' });


});
module.exports = router;
