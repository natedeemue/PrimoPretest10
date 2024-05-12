const merge = require('../merge');

test('Normal case', () => {
  expect(merge([0,1,2], [3,4,5], [8,7,6])).toStrictEqual([0,1,2,3,4,5,6,7,8]);
});
test('Blank input', () => {
  expect(merge([], [3,4,5], [8,7,6])).toStrictEqual([3,4,5,6,7,8]);
});
test('Size varying', () => {
  expect(merge([2,4,5,6], [0,1], [7,6,5])).toStrictEqual([0,1,2,4,5,5,6,6,7]);
});
test('Repeating numbers', () => {
  expect(merge([0,0,5,10], [1,2,3,3], [8,6,4])).toStrictEqual([0,0,1,2,3,3,4,5,6,8,10]);
});

// console.log(merge( [], [], [] )) //all blank inputs

// console.log(merge( [-100,1,2], [3,4,5], [888,7,6] )) //sequence

// console.log(merge( [2,4,5,6], [0,1], [7,6,5] )) //size varying
// console.log(merge( [2], [-5,1], [97,10,6,5] ))

// console.log(merge( [0,0,5,10], [1,2,3,3333], [8,6,4] )) //repeating numbers

// console.log(merge(  )) //blank input
// console.log(merge( [0,1,2], [], [8,7,6] ))
// console.log(merge( [0,1,2], [3,4,5], [] ))