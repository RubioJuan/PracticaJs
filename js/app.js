// Concatenar Arreglos

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const array3 = [...array1,...array2];
// console.log(array3)

// Clonar arrays

// const original = [1,2,3];
// const cloned = [...original];
// console.log(cloned);

// function sum(a,b,c){
//     return a+b+c;
// }

// const numbers = [1,2,3];
// const result = sum (...numbers);
// console.log(result);


// ROMPER RELACION VALOR-REFERENCIA


// let a = 10;
// let b = a;
// a = 30 ;

// console.log({ a , b});   = {a:30, b: 10}



// let juan = { nombre : 'Juan'};
// let ana = {... juan};
// ana.nombre = 'Ana';

// console.log ({juan , ana}); 




// const cambiaNombre = (persona) => {
//     persona.nombre = 'Tony';
//     return persona; 
// }

// let peter = { nombre : 'Peter'};
// let tony = cambiaNombre( peter );

// console.log ({ peter, tony}); 



// const frutas = [ 'Manzana','Pera','Piña'];

// console.time('slice');
// const otrasFrutas = frutas.slice();
// console.timeEnd('slice');

// console.time ('spread');
// const otrasFrutas2 = [...frutas];
// console.timeEnd('spread');

// otrasFrutas.push('Mango');

// console.table({ frutas, otrasFrutas});




// Ejercicio 1


// function arrays (array1,array2){
//     return [...array1,...array2];
// }

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const array3 = arrays(array1,array2);
// console.log(array3)


// Ejercico 2

// function nombres(juan, ana){
//     return {... juan, ...ana};
// }

// let juan = { nombre : 'Juan'};
// let ana = {... juan};
// ana.nombre = 'Ana';

// console.log ({juan , ana}); 


// Ejercicio 3

// const sum = (a,b,c) => {
//     return a+b+c;
// }

// const numbers = [1,2,3];
// const result = sum (...numbers);
// console.log(result);


// Ejercicio 4

// obj1 = {
//     pan : 2000,
//     huevos : 500
// }
// obj2 = {
//     leche : 5500,
//     jamon : 2200
// }
// const combinar = (obj1 , obj2) => {
//     return {...obj1, ...obj2}
// }
// console.log(combinar(obj1 , obj2));