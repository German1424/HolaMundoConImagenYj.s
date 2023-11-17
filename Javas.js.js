'use stritc'
var user="Lucas";
var pass= "45352035";
var DNI ="44453292";

var usuario = prompt ("Ingrese su usuario", "");
var Contrasenia = prompt ("Ingresar contraseña","");

var userValido = (user == usuario);
var passValido = (pass == Contrasenia);

alert ("El Usuario es valido" +userValido);
alert ("La contraseña es correcta" +passValido);

var datosCorrectos = userValido && passValido;

if (document.form.password.value)'Contrasenia'