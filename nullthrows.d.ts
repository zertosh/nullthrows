/**
 * Throws if value is null or undefined, otherwise returns value.
 */

 declare function nullthrows<T>(value?: T | null, message?: string): T;
 declare namespace nullthrows {
   export { nullthrows as default };
 }
 export = nullthrows;
 