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
    banco.db[user].stage = 4;
    return stages.step[4].obj.index(user, '');
  }

  return [`Confirma ou cancelar endereco de entrega : \n ${msg}`];
}

exports.index = index;
