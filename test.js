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

let d4 = [
  {destination: "paris", dependency: false},
  {destination: "berlin", dependency: "london"},
  {destination: "london", dependency: "paris"},
  {destination: "budapest", dependency: "paris"},
  {destination: "tokio", dependency: "paris"}
];

let d5 = [
  {destination: "paris", dependency: false},
  {destination: "berlin", dependency: "london"},
  {destination: "london", dependency: "berlin"}
]

test('trying with 3 elements', (t) => {
  let actual = travelPlanner(d2);
  let expected = ["paris", "london", "berlin"];

  t.deepEqual(actual, expected);
  t.end();
});

test('trying with 6 elements', (t) => {
  let actual = travelPlanner(d1);
  let expected = ["paris", "tokio", "budapest", "london", "berlin", "shanghai"];

  t.deepEqual(actual, expected);
  t.end();
});

test('trying with more dependencies', (t) => {
  let actual = travelPlanner(d3);
  let expected = ["paris", "budapest", "london", "berlin"];

  t.deepEqual(actual, expected);
  t.end();
});

test('trying with more dependencies v2', (t) => {
  let actual = travelPlanner(d4);
  let expected = ["paris", "tokio", "budapest", "london", "berlin"];

  t.deepEqual(actual, expected);
  t.end();
});

test('destinations pointing at each other', (t) => {
  let actual = travelPlanner(d5);
  let expected = "error - destinations are pointing each other";

  t.deepEqual(actual, expected);
  t.end();
});
