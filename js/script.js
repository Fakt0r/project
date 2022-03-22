"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Eror');
}

// const num = 50;

// if (num < 49) {
//     console.log('Eror');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Eror');


const num = 50;

switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100:
            console.log('Neverno');
            break;
            case 50:
        console.log('V toshku!');
        break;   
    default:
        console.log('Ne v etot raz');
        break;     
}