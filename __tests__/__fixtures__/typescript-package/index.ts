import nullthrows from "../../..";

function fn(): string | null {
  return Math.random() < 0.5 ? 'hello' : null;
}

var good1: string = nullthrows(fn());
var good2: string = nullthrows(fn(), 'my error message');

var bad1: string = fn();

var bad2: number = nullthrows(fn());

/**
 * A simple function that returns a conditional type based on nullability of the input type variable
 */
function doSomething<T>(
  param: T,
): null extends T ? 'a' | null : 'a' {
  if (!param) {
    return null as null extends T ? 'a' | null : 'a';
  }
  return 'a' as null extends T ? 'a' | null : 'a';
}

/**
 * A wrapper function that removes the possibility of returning null by using `nullthrows`.
 * It should remove null from both possible return types of the conditional type and typecheck correctly.
 */
function nonNullableWrappedDoSomething<T>(param: T): 'a' {
  return nullthrows(doSomething(param));
}

/**
 * A wrapper function that is incorrectly typed as it still could return null based on the conditional type.
 * This test case is included to ensure nothing about the underlying assumption changes:
 * that a `nullthrows` is required to get this to typecheck.
 */
function incorrectlyTypedWrappedDoSomething<T>(param: T): 'a' {
  return doSomething(param);
}
