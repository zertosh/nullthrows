import nullthrows from "../../..";

function fn(): string | null {
  return Math.random() < 0.5 ? 'hello' : null;
}

var good: string = nullthrows(fn());

var bad1: string = fn();

var bad2: number = nullthrows(fn());
