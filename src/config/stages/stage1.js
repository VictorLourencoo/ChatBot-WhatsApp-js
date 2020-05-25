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
    message === 'Confirmar' ||
    message === 'confirmar' ||
    message === 'CONFIRMAR'
  ) {
    banco.db[user].stage = 2;
    return ['Estamos finalizando seu pedido'];
  }
  //PARA NO FINLIZANDO PEDIDO, E NECESSARIO COMFIRMAR NOVAMENTE PARA CONTINUAR

  if (!produtos.options[message]) {
    return [
      'Codigo invalido, digite novamente',
      'Deseja confirmar ou cancelar o pedido?',
    ];
  }

  banco.db[user].itens.push(produtos.options[message]);

  return [
    `item(${produtos.options[message].descricao}) adicionado com sucesso`,
    'Deseja confirmar ou cancelar o pedido?',
  ];
}
exports.index = index;
