import { unique, groupBy, sumBy } from './arrayUtils.js';

const numeros = [1, 2, 2, 3, 4, 4, 5];
const cores = ['azul', 'verde', 'azul', 'amarelo'];
console.log(unique(numeros));
console.log(unique(cores));

const produtos = [
  { nome: 'Camisa', categoria: 'Vestuário' },
  { nome: 'Calça', categoria: 'Vestuário' },
  { nome: 'Mouse', categoria: 'Eletrônicos' },
  { nome: 'Teclado', categoria: 'Eletrônicos' }
];
const alunos = [
  { nome: 'João', status: 'Aprovado' },
  { nome: 'Maria', status: 'Reprovado' },
  { nome: 'Pedro', status: 'Aprovado' }
];
console.log(JSON.stringify(groupBy(produtos, 'categoria'), null, 2));
console.log(JSON.stringify(groupBy(alunos, 'status'), null, 2));

const carrinho = [
  { item: 'Livro', preco: 50 },
  { item: 'Caneta', preco: 5 },
  { item: 'Caderno', preco: 25 }
];
const despesas = [
  { descricao: 'Aluguel', valor: 1200 },
  { descricao: 'Internet', valor: 100 },
  { descricao: 'Energia', valor: 150 }
];
console.log(sumBy(carrinho, 'preco'));
console.log(sumBy(despesas, 'valor'));
