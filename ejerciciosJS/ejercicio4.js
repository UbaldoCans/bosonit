//Dado tres arrays de números, sacar en un nuevo array la intersección de estos.
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2]; 

let resultIntersection = [];

    resultIntersection = arrNumber1.filter(i => 
        arrNumber2.includes(i) && 
        arrNumber3.includes(i));




console.log(resultIntersection)