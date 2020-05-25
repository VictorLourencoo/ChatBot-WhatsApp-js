// Supports ES6
// import { create, Whatsapp } from 'sulla';

const sulla = require('sulla');
const banco = require('./model/banco');
const stages = require('./config/stages');

sulla.create().then((client) => start(client));

//558596282473@c.us

function start(client) {
  client.onMessage((message) => {
    let response = stages.step[getStage(message.from)].obj.index(
      message.from,
      message.body
    );

    for (let i = 0; i < response.length; i++) {
      const itens = response[i];
      client.sendText(message.from, itens);
    }
  });
}

function getStage(user) {
  return banco.db[user].stage;
}
