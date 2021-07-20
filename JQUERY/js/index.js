$(function () {
    console.log('Cargado documento');

    console.log($('h1'));

    $('h1:first-of-type').html('Prueba');

    console.log($('h1')[1].innerHTML, $('h1:last-of-type').html());

    $('#formulario-pruebas').on('submit', function(e) {
        e.preventDefault();

        if(!$('#mensaje').length) {
            $('<span id="mensaje"></span>').insertAfter('#formulario-pruebas button');
        }

        if(!nombre.value) {
            $('#mensaje').html('No me puedes dejar el nombre vacío');
        } else {
            $('#mensaje').html('Hola ' + $('#nombre').val());
        }
    });
});

function funciones() {
    console.log(restar);

    var restar = function (a, b) { return a - b; };

    console.log(restar(5, 6));

    var operacion = restar;

    console.log(operacion(1, 2));

    // ES2015
    operacion = (a, b) => a * b;

    console.log(operacion(5, 3));

    console.log(sumar(34, 5));

    function sumar(a, b) {
        return a + b;
    }
}

function sintaxis() {
    // Comentario de línea

    /*
    Comentario
    Multilínea
    */

    alert('Hola');

    confirm('¿Estás seguro?');

    prompt('Dime tu nombre');

    console.debug('Detallado');

    console.log('Mensaje en consola');

    console.warn('Cuidado');

    console.error('Algo ha fallado');

    // <=ES5
    'use strict'; // Obliga a declarar las variables

    var variable = 5;

    console.log(variable);

    // >= ES2015 (== ES6)
    let variableLet = 10;
    const variableConst = 11;

    variableLet = 15;
    // variableConst = 123;

    console.log(typeof true)
    console.log(typeof 12);
    console.log(typeof 'hola');
    console.log(typeof new Date());

    console.log(typeof variableLet);
    variableLet = 'asdfas';
    console.log(typeof variableLet);

    const dato = '45';
    console.log(dato, typeof dato);
    const numero = +dato; //parseInt(dato);

    if (isNaN(numero)) {
        console.log('No se ha podido convertir el número');
    } else {
        console.log(numero, typeof numero);
    }

    let num;

    console.log(num, typeof num);

    let valor = null;

    console.log(valor, typeof valor);

    console.log(valor ? 'Tiene valor' : 'No tiene valor');

    // '', 0, undefined, null, NaN valen false

    console.log(dato, typeof dato);

    console.log(dato == 45);
    console.log(dato === 45);

    let c = 11;

    while (c) {
        console.log(--c);
    }

    console.log('¡Ignición!');

    const arr = [1, 2, 3];

    console.log(arr[0]);

    arr[1] = 10;

    arr[3] = 1234;

    arr[10] = 543;

    arr[7] = 'adsfasdfads';

    arr.push(765);

    arr['casa'] = 'Home';

    arr.perro = 'Dog';

    console.log(arr.length);

    console.log(arr);

    for (let elemento of arr) {
        console.log(elemento);
    }

    $(arr).each(function() {
        console.log(this.toString());
    });

    for (let clave in arr) {
        console.log(clave, arr[clave]);
    }
}