const produtos = require('../../Produtos');
const banco = require('../../model/banco');

function index(user, message) {
  if (
    message === 'Cancelar' ||
    message === 'cancelar' ||
    message === 'CANCELAR'
  ) {
    banco.db[user].stage = 0;
    return ['Compra cancelada com sucesso'];
  }

  if (
    message === 'Comfirmar' ||
    message === 'comfirmar' ||
    message === 'COMFIRMAR'
  ) {
    banco.db[user].stage = 3;
    return ['Digite o endereço de entrega:'];
  }
  //ERRO NAO ESTA CHAMANDO O RESUMO DA VENDA

  let resumo = 'RESUMO DO PEDIDO: \n';
  let precoTotal = 0;
  banco.db[user].itens.forEach((value) => {
    console.log(value);
    resumo += `${value.descricao}  ---------- ${value.preco} \n`;
    precoTotal += value.preco;
  });

  resumo += '----------------\n';
  resumo += `Total R$ ${precoTotal}`;
  return ['Voce seja confirmar ou cancelar a comprea?'];
}

exports.index = index;
