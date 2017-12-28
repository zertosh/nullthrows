// This code does not run, but it is type-checked.

import nullthrows from ".";

["string array"].push(nullthrows(maybeString()));

function maybeString() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return null;

    case 1:
      return undefined;

    default:
      return "string indeed";
  }
}
