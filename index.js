import { unique, groupBy, sumBy } from './arrayUtils.js';

// --- Demonstração da função unique ---
console.log('--- Exercício 01: unique ---');
const numeros = [1, 2, 2, 3, 4, 4, 5];
const cores = ['azul', 'verde', 'azul', 'vermelho', 'verde'];

console.log('Exemplo 1 (Números):', unique(numeros)); // Esperado: [1, 2, 3, 4, 5]
console.log('Exemplo 2 (Strings):', unique(cores));   // Esperado: ['azul', 'verde', 'vermelho']
console.log('');

// --- Demonstração da função groupBy ---
console.log('--- Exercício 02: groupBy ---');
const produtos = [
  { nome: 'Camiseta', categoria: 'Roupas' },
  { nome: 'Calça', categoria: 'Roupas' },
  { nome: 'Mouse', categoria: 'Eletrônicos' },
  { nome: 'Teclado', categoria: 'Eletrônicos' }
];

const pessoas = [
  { nome: 'Ana', cidade: 'São Paulo' },
  { nome: 'Beto', cidade: 'Rio de Janeiro' },
  { nome: 'Carla', cidade: 'São Paulo' }
];

console.log('Exemplo 1 (Produtos por Categoria):', JSON.stringify(groupBy(produtos, 'categoria'), null, 2));
console.log('Exemplo 2 (Pessoas por Cidade):', JSON.stringify(groupBy(pessoas, 'cidade'), null, 2));
console.log('');

// --- Demonstração da função sumBy ---
console.log('--- Exercício 03: sumBy ---');
const vendas = [
  { item: 'A', valor: 10 },
  { item: 'B', valor: 20 },
  { item: 'C', valor: 15 }
];

const estoque = [
  { produto: 'X', quantidade: 5 },
  { produto: 'Y', quantidade: 12 },
  { produto: 'Z', quantidade: 8 }
];

console.log('Exemplo 1 (Soma de Vendas):', sumBy(vendas, 'valor'));     // Esperado: 45
console.log('Exemplo 2 (Soma de Estoque):', sumBy(estoque, 'quantidade')); // Esperado: 25
