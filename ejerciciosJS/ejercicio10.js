/**Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
 */
const html = ('<div><span>Donec sed mollis augue.Duis mollis posuere nulla, a molestie massa lacinia nec.</span> <strong>ipsum</strong></div>');

const cleanText = html.replace(/<\/?[^>]+(>|$)/g, "");

console.log(cleanText)