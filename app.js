/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerdas que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

*/




const asciiHeart = [
  "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
  "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
  "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
  "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
  " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
  "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
  "     ⠉⢿⣿⣿⣿⠟⠋⠀",
  "⠀      ⠙⠻⠁"
]

const animateByLine = (ms) => {
  asciiHeart.forEach((linea, index) => {
    setTimeout(() => {
      console.log(linea);
    }, index * ms);
  })
}
animateByLine(500);


// const animateByChart = (ms) => {
//   let retraso = ms;
//   asciiHeart.map(element => {
//     let arr = Array.from(element);
//     arr.forEach((char, index) => {
//       setTimeout(() => {
//         process.stdout.write(char);
//         if (index === arr.length - 1) {
//           process.stdout.write('\n');
//         }
//       }, retraso);
//       retraso += ms;
//     });
//   });
// };

// animateByChart(100);

