# TypeScript Type Coercion Runtime Error

This example demonstrates a subtle issue in TypeScript where type safety, while strong, doesn't always prevent runtime errors. Specifically, it focuses on how implicit type coercion can bypass TypeScript's type checking at compile time, leading to unexpected runtime behavior.

## The Problem
The `subtract` function is defined to accept two numbers.  However, passing a string ("3") to it results in a runtime error instead of a compile-time type error because TypeScript allows for implicit coercion of the string to a number during the subtraction operation.   This isn't caught at compile time, resulting in a runtime failure.

## How to reproduce
1.  Compile and run `bug.ts`.
2. Observe the runtime error.