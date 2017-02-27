'use strict';

const test = require('tape');
const travalPlanner = require('./index.js');

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

test('example 2', function (t) {
  let actual = travalPlanner(d4);
  let expected = ["paris", "london", "berlin"];

  t.deepEqual(actual, expected);
  t.end();
});

test('example 2', function (t) {
  let actual = travalPlanner(d3);
  let expected = ["tokio", "paris", "budapest", "london", "shanghai", "berlin"];

  t.deepEqual(actual, expected);
  t.end();
});
