import nullthrows from "../../..";

function fn(): string | null {
  return Math.random() < 0.5 ? 'hello' : null;
}

var good1: string = nullthrows(fn());
var good2: string = nullthrows(fn(), 'my error message');

var bad1: string = fn();

var bad2: number = nullthrows(fn());
