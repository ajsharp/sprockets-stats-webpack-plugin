'use strict';

var path = require('path');

module.exports = function getLocialPathForAssets(sourceAssetsPath, moduleUserRequest, moduleAssets) {
  var logicalPath = path.relative(sourceAssetsPath, moduleUserRequest);
  var filenameKey = Object.keys(moduleAssets).slice(-1)[0];
  var obj = {};

  obj[filenameKey] = {
    logical_path: logicalPath
  };

  return obj;
};
