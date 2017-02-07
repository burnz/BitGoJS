var common = require('./common');
var prova = require('prova');

prova.getNetwork = function() {
  return prova.networks[common.getRmgNetwork()];
};

prova.makeRandomKey = function() {
  return prova.ECPair.makeRandom({ network: prova.getNetwork() });
};

module.exports = prova;
