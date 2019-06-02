var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema/*Un esquema*/ =  Schema({
  imagen: String,
  fase:String,
  pelicula: {
    id:Number,
    pelicula:String,
    estrenoEnEEUU:String,
    directores:String,
    guionistas:String,
    productores:String,
    estado:String
  }

});

module.exports = mongoose.model('movie', UserSchema);
