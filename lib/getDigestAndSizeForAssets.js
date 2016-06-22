'use strict';

var createMd5Hash = require('./createMd5Hash');

module.exports = function getDigestAndSizeForAssets(assets, blacklistRegex) {
  var assetMap = {};

  Object.keys(assets).forEach(function addAssetDigestAndSize(file) {
    var asset;
    var content;

    if (!file.match(blacklistRegex)) {
      asset = assets[file];
      content = asset.source();

      if (assetMap[file]) {
        assetMap[file].size = asset.size();
        assetMap[file].digest = createMd5Hash(content);
      } else {
        assetMap[file] = {
          size: asset.size(),
          digest: createMd5Hash(content)
        };
      }
    }
  });

  return assetMap;
}
