var param_replacer = require('tecsup-2023-rg');

var objetivo = "%hola% %manito% -- %manito% %hola%";
var idioma = "es";
var reemplazos = {
    "it": {
        "manito": "causa",
        "hola": "buenos días"
    },
    "es": {
        "manito": "causa",
        "hola": "buenos días"
    }
}

var resultado = param_replacer.replace(objetivo, reemplazos[idioma]);

console.log(resultado);