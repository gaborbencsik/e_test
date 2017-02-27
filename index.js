'use strict';

let d3 = [
  {dest: "paris", dep: false},
  {dest: "berlin", dep: "london"},
  {dest: "london", dep: "budapest"},
  {dest: "tokio", dep: "paris"},
  {dest: "shanghai", dep: "berlin"},
  {dest: "budapest", dep: false}
];

let d4 = [
  {dest: "paris", dep: false},
  {dest: "berlin", dep: "london"},
  {dest: "london", dep: false}
];

let isDepBeforeDest = function (dest, dep, array) {
  let isBefore;
  let destIndex = array.indexOf(dest);
  let depIndex = array.indexOf(dep);
  if (depIndex < destIndex) {
    isBefore = true;
  } else {
    isBefore = false;
  }
  return isBefore;
};

const travalPlanner = function (input) {
  let newArray = [];

  input.forEach( function(elem) {
    if (newArray.includes(elem.dest)) { // ha benne van dest a listában
      if (elem.dep) { // van dependencia
        if (newArray.includes(elem.dep)) { // benne van dep a listában
          if () { // dep nincs dest elött

            // action -> move dest dep után
          } else { // dep dest elött van-e
            // nothing
          }
        } else { // nincs dep a listában

          // action -> dep push dest elé
        }

      } else { // ha nincs dependencia
        // nothing
      }
    } else { // ha nincs benne a listában dest
      if (elem.dep) { // van dependencia
        if (newArray.includes(elem.dep)) { // benne van dep a listában

          // action -> push dep után
        } else { // nincs benne dep a listában
          newArray.push(elem.dep);
          newArray.push(elem.dest);
          // action -> push dep
          // action -> push dest dep után
        }
      } else {
        newArray.push(elem.dest);
        // action -> push a lista végére
      }
    }
  })
};




// let createDestArray = function (input) {
//   let newArray = []
//   input.forEach( function (item) {
//     newArray.push(item.dest);
//   });
//   return newArray
// };
//
// let findItemInArray = function (item, array) {
//   let number = -1;
//   array.forEach( function (elem, index) {
//     if (item === elem) {
//       number = index;
//     }
//   })
//   return number
// };

// const travalPlanner = function (input) {
//   let destArray = createDestArray(input);
//
//   input.forEach( function (elem) {
//     let destItemIndex;
//     let depItemIndex;
//     if (elem.dep) {
//       // console.log(elem.dest);
//       // console.log(destArray);
//       destItemIndex = findItemInArray(elem.dest, destArray);
//       depItemIndex = findItemInArray(elem.dep, destArray);
//       destArray.splice(destItemIndex, 1);
//       destArray.splice(depItemIndex, 0, elem.dest);
//       // console.log(destArray);
//     }
//   });
//
//   return destArray
// };

//
// const travalPlanner = function (input) {
//   let destArray= [];
//
//   input.forEach( function (elem) {
//     if (!elem.dep) {
//       if (!destArray.includes(elem.dest)) {
//         destArray.push(elem.dest)
//       }
//     }
//     else if (elem.dep) {
//       if (destArray.includes(elem.dep)) {
//         let number = findItemInArray(elem.dep, destArray);
//         console.log(number);
//         destArray.splice(number+1, 0, elem.dest);
//       } else {
//         destArray.push(elem.dest)
//       }
//     }
//   });
//
//   return destArray
// };


console.log(travalPlanner(d3));

module.exports = travalPlanner;
