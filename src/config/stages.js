var stage = {
  0: {
    description: 'Boas vindas',
    obj: require('./stages/stage0'),
  },

  1: {
    description: 'Mostrar Opções',
    obj: require('./stages/stage1'),
  },
  2: {
    description: 'Resumo da venda',
    obj: require('./stages/stage2'),
  },
  3: {
    description: 'Endereço',
    obj: require('./stages/stage3'),
  },
  4: {
    description: 'encerramento',
    obj: require('./stages/stage4'),
  },
};

exports.step = stage;
