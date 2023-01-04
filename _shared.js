const path = require('path');

function trim(s) {
  return ('' + s).trim();
}

const projectDir = path.resolve(__dirname);

function resolveFromProject(...pa) {
  return path.resolve(projectDir, pa.join('/'));
}

function resolveFromDist(...pa) {
  return path.resolve(projectDir, 'dist', pa.join('/'));
}

function resolveFromSource(...pa) {
  return path.resolve(projectDir, 'src', pa.join('/'));
}

function parseQuery(query) {
  var map = {};
  if (!query || typeof query !== 'string') {
    return map;
  }
  (query || '').split('&').forEach(function (entry) {
    var split = entry.split('=');
    var key = (split[0] || '').trim();
    var value = decodeURIComponent(split[1] || '').trim();
    if (key) {
      map[key] = value;
    }
  });
  return map;
}

module.exports = {
  resolveFromProject,
  resolveFromDist,
  resolveFromSource,
  parseQuery,
  trim,
};
