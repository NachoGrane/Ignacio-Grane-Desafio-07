import './css/style.css';

// Inciso 1
const nombre = 'Ignacio';

// Inciso 2

let edad = 27;
let precio = 165.75;
let ciudad = 'La Plata';
let esEstudiante = true;

// Inciso 3

const nombre2 = 'Martin';
const apellido = 'Gomez';
console.log(`Hola, ${nombre2} ${apellido}.`);

// Inciso 4

const num1 = 10;
const num2 = 50;

// ! Suma

const Suma = num1 + num2;
console.log(`El resultado de la suma de ${num1} y ${num2} es ${Suma}`);

// ! Resta

const Resta = num1 - num2;
console.log(`El resultado de la resta entre ${num1} y ${num2} es ${Resta}`);

// ! Multiplicación

const multiplicacion = num1 * num2;
console.log(
  `El resultado de la multiplicación entre ${num1} y ${num2} es ${multiplicacion}`,
);

// ! División

const division = num1 / num2;
console.log(
  `El resultado de la division entre ${num1} y ${num2} es ${division}`,
);

// Inciso 5

let contador = 0;

contador++; // Esta en 0 y debe dar 1.

console.log(contador);

contador--; //Esta en 1 y debe dar 0.

console.log(contador);

// Inciso 6

// const nombreUsuario = prompt('Ingrese un nombre de usuario', '');
// console.log(`El nombre del usuario ingresado es ${nombreUsuario}`);

// Inciso 7

// const radio = prompt('Ingrese el radio');
// const pi = 3.14;
// const calculoArea = pi * (radio * radio);

// console.log(`El área es igual a ${calculoArea}`);

// Inciso 8

// const gradosCelsius = prompt('Ingrese los grados celsius');
// const gradosFahrenheit = (9 / 5) * gradosCelsius + 32;

// console.log(
//   `Los grados celsius ${gradosCelsius} corresponden a ${gradosFahrenheit} grados fahrenheit`,
// );

// Inciso 9

// let cantNum = 0;
// const numero1 = prompt('Ingrese el número 1');
// cantNum++;
// const numero2 = prompt('Ingrese el número 2');
// cantNum++;
// const numero3 = prompt('Ingrese el número 3');
// cantNum++;
// const calculoPromedio =
//   (Number(numero1) + Number(numero2) + Number(numero3)) / cantNum;
// console.log(
//   `El calculo de promedio entre los 3 numeros ingresados es de ${calculoPromedio}`,
// );

// Inciso 10

const numero = 10;

console.log(numero >= 0 ? 'Es positivo' : 'Es negativo');

// Inciso 11

// const edadUsuario = prompt('Ingrese su edad');

// if (edadUsuario >= 18) {
//   console.log('Es mayor de edad');
// } else console.log('Es menor de edad');

// Inciso 12

// let diaSemana = prompt(
//   'Ingrese un día de la semana \n 1. lunes \n 2. martes \n 3. miércoles \n 4. jueves \n 5. viernes \n 6. sábado \n 7. domingo',
// );
// switch (diaSemana) {
//   case '1':
//     console.log('El día de la semana seleccionado es el lunes');
//     break;
//   case '2':
//     console.log('El día de la semana seleccionado es el martes');
//     break;
//   case '3':
//     console.log('El día de la semana seleccionado es el miércoles');
//     break;
//   case '4':
//     console.log('El día de la semana seleccionado es el jueves');
//     break;
//   case '5':
//     console.log('El día de la semana seleccionado es el viernes');
//     break;
//   case '6':
//     console.log('El día de la semana seleccionado es el sábado');
//     break;
//   case '7':
//     console.log('El día de la semana seleccionado es el domingo');
//     break;
//   default:
//     console.log('Número de día de semana inexistente');
//     break;
// }
