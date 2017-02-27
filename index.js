'use strict';

let isDepBeforeDest = function (destination, dependency, array) {
  let isBefore;
  let destinationIndex = array.indexOf(destination);
  let dependencyIndex = array.indexOf(dependency);
  if (dependencyIndex < destinationIndex) {
    isBefore = true;
  } else {
    isBefore = false;
  }
  return isBefore;
};

const travelPlanner = function (input) {
  let newArray = [];

  input.forEach( function(e) {
    if (newArray.includes(e.destination)) {
      if (e.dependency) {
        if (newArray.includes(e.dependency)) {
          if (!isDepBeforeDest(e.destination, e.dependency, newArray)) {
            newArray.splice(newArray.indexOf(e.destination), 1);
            newArray.splice(newArray.indexOf(e.dependency), 0, e.destination);
          };
        } else {
          newArray.splice(newArray.indexOf(e.destination), 0, e.dependency);
        };
      };
    } else {
      if (e.dependency) {
        if (newArray.includes(e.dependency)) {
          newArray.splice(newArray.indexOf(e.dependency)+1, 0, e.destination);
        } else {
          newArray.push(e.dependency);
          newArray.push(e.destination);
        };
      } else {
        newArray.push(e.destination);
      };
    };
  });
  return newArray
};

module.exports = travelPlanner;
