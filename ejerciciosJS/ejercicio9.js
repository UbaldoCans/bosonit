/*Crea una función que a partir de un objeto de entrada, 
retorne un objeto asegurándose que las claves del objeto 
estén en lowercase.
La función debe tener un objeto como único parámetro.*/

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

const lowercaseKeys = obj =>
Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
}, {});

const myObjLower = lowercaseKeys(myObject);
console.warn(myObjLower);

  