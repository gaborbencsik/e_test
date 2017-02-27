'use strict';

const test = require('tape');
const travelPlanner = require('./index.js');

let d1 = [
  {destination: "paris", dependency: false},
  {destination: "berlin", dependency: "london"},
  {destination: "london", dependency: "budapest"},
  {destination: "tokio", dependency: "paris"},
  {destination: "shanghai", dependency: "berlin"},
  {destination: "budapest", dependency: false}
];

let d2 = [
  {destination: "paris", dependency: false},
  {destination: "berlin", dependency: "london"},
  {destination: "london", dependency: false}
];

let d3 = [
  {destination: "paris", dependency: false},
  {destination: "berlin", dependency: "london"},
  {destination: "london", dependency: "paris"},
  {destination: "budapest", dependency: "paris"}
];

test('trying with 3 elements', function (t) {
  let actual = travelPlanner(d2);
  let expected = ["paris", "london", "berlin"];

  t.deepEqual(actual, expected);
  t.end();
});

test('trying with 6 elements', function (t) {
  let actual = travelPlanner(d1);
  let expected = ["paris", "tokio", "budapest", "london", "berlin", "shanghai"];

  t.deepEqual(actual, expected);
  t.end();
});

test('trying with more dependencies', function (t) {
  let actual = travelPlanner(d3);
  let expected = ["paris", "budapest", "london", "berlin"];

  t.deepEqual(actual, expected);
  t.end();
});
