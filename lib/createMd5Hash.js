'use strict';

var crypto = require('crypto');

module.exports = function createMd5Hash(content) {
  return crypto.createHash('md5').update(content).digest('hex');
};
