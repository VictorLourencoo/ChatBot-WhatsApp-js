const produtos = require('../../Produtos');
const banco = require('../../model/banco');

function index(user, message) {
  let itens = 'Produtos \n\n';

  //retorna um array de objetos enumerados de acordo com o loop
  Object.keys(produtos.options).forEach((value) => {
    let produto = produtos.options[value];
    itens += `${value} - ${produto.descricao}    R$ ${produto.preco} \n`;
  });
  //qual estado
  banco.db[user].stage = 1;

  return [
    'Sou Fred, Um bot virtual, irei apresentar nossos produtos, escolha e envie o codigo conrrespondente',
    itens,
  ];
}
exports.index = index;
