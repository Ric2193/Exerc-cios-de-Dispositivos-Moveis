/**

 * Retorna um novo array contendo apenas elementos únicos.

 * @param {Array} arr - O array original.

 * @returns {Array} - Array sem duplicatas.

 */

export const unique = arr => [...new Set(arr)];



/**

 * Agrupa os objetos de um array por uma chave específica.

 * @param {Array} arr - O array de objetos.

 * @param {string} key - A chave pela qual os objetos serão agrupados.

 * @returns {Object} - Um objeto onde as chaves são os valores da propriedade e os valores são arrays de objetos.

 */

export const groupBy = (arr, key) =>
  
  arr.reduce((acc, obj) => {
    
    // Inicializa o array para a chave se ainda não existir e adiciona o objeto
    
    (acc[obj[key]] = acc[obj[key]] || []).push(obj);
    
    return acc;
    
  }, {});



/**

 * Soma os valores de uma propriedade específica em um array de objetos.
 
 * @param {Array} arr - O array de objetos.
 
 * @param {string} key - A chave cujo valor será somado.
 
 * @returns {number} - A soma total dos valores da chave.
 
 */

export const sumBy = (arr, key) =>
  
  arr.reduce((total, obj) => total + (obj[key] ?? 0), 0);











