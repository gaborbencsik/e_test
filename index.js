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

  input.forEach( (route) => {
    // destination is already on the list
    if (newArray.includes(route.destination)) {
      if (route.dependency) {
        if (newArray.includes(route.dependency)) {
          // dependency does not stand before the destination
          if (!isDepBeforeDest(route.destination, route.dependency, newArray)) {
            newArray.splice(newArray.indexOf(route.destination), 1);
            newArray.splice(newArray.indexOf(route.dependency), 0, route.destination);
          };
        // dependency is not on the list yet
        } else {
          newArray.splice(newArray.indexOf(route.destination), 0, route.dependency);
        };
      };
    // destination is not on the list yet
    } else {
      if (route.dependency) {
        // dependency is already on the list
        if (newArray.includes(route.dependency)) {
          newArray.splice(newArray.indexOf(route.dependency)+1, 0, route.destination);
        // dependency is not on the list eigher
        } else {
          newArray.push(route.dependency);
          newArray.push(route.destination);
        };
      } else {
        newArray.push(route.destination);
      };
    };
  });
  return newArray
};

module.exports = travelPlanner;
