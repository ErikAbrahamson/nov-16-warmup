var transform = function(old) {
  var newPoints = {};

  Object.keys(old).forEach(function(key) {
      old[key].forEach(function(el) {
          newPoints[el.toLowerCase()] = Number(key);
      });
  });
  return newPoints;
};

module.exports = transform;
