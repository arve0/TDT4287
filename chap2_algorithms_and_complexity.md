---
title: Chapter 2 - Algorithm and complexity
---

# Algorithm design techniques

## Exhaustive search
Brute force, examines every possible alternative to fine one particular solution.

## Branch-and-bound
Also called pruning. Omit large number of alternatives in brute force algorithm.

## Dynamic programming
Break problem into smaller subproblems and use solutions of subproblems to contruct the solution of the large one. Avoids recomputing values that are already known.

The rocks game. Start with two piles of *even* number of rocks. Example 2x2. You may take one rock from one of the piles, or two rocks from both piles. The player taking the last rock wins.

  | 0 | 1 | 2 |
0 |   | W | L |
1 | W | W | W |
2 | L | W | L |

## Divide-and-conquer
When a smaller size of the problem is easier to solve then the large problem. Split the problem, solve the subproblems independently, combine the solutions of subproblems into original problem.

## Machine learning
Collect data, compute statistics and find the most probable solution to new data.

## Randomized
Solve problems in randomized order, instead of using a deterministic algorithm.

# Problems

## Problem 2.1
> Write an algorithm that, given a list of `n` numbers, returns the largest and smallest numbers in the list.

```js
/**
 * Returns smallest and largest numbers in list.
 */
function largestAndSmallestNumbers(list) {
  return {
    smallest: list.slice(1).reduce((s, n) => n < s ? n : s, list[0]),
    largest: list.slice(1).reduce((l, n) => n > l ? n : l, list[0])
  }
}

largestAndSmallestNumbers([4, 6, 7, 1, 10, -1, -6, -7, 12, 99, -0, 9])
// { smallest: -7, largest: 99 }
```

> Estimate the running time of the algorithm.

2 * O_slice(n) + 2 * O_reduce(n) = O(4n^2)

> Can you design an algorithm that performs only 3n/2 comparisons to find the smallest and largest number?

Branch comparisons?

```js
function largestAndSmallestNumbersBranched(list) {
  var smallest = list[0];
  var largest = list[0];
  for (var i = 1; i < list.length; i += 1) {
    if (list[i] < smallest) {
      smallest = list[i];
    } else if (list[i] > largest) {
      // only reached if list[i] >= smallest
      largest = list[i];
    }
  }
  return { smallest, largest };
}
```

## Timing
```js
function time(fn, parameters) {
  var start = Date.now();
  fn.apply(null, parameters);
  return Date.now() - start;
}

/**
 * Gives an array of `n` numbers in range [-100, 99].
 */
function randomNumbers(n) {
  var a = [];
  for (var i = 0; i < n; i += 1) {
    a.push(Math.floor(Math.random() * 200) - 100);
  }
  return a;
}

var a = randomNumbers(1e6);

time(largestAndSmallestNumbers, [a])
// 118

time(largestAndSmallestNumbersBranched, [a])
// 4
```
