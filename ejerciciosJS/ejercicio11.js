/**Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.
 */
const myArray = [1, 2, 3, 4, 5, 6, 7]

let splitArrayIntoChunks = (myArray, item)=>{
  
    const arraysOfArrays=[];
    
   for(let i = 0;i< myArray.length; i+=item){ 
     
    let newsArrays =	myArray.slice(i, i+item);
     arraysOfArrays.push(newsArrays)
   }
     return arraysOfArrays
     }
   
   
   console.log(splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 1));