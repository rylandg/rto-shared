import * as t from 'io-ts';
/**
 * Type lambda returning a union of key names from input type P having type A
 */
declare type FieldsWith<A, P> = {
    [K in keyof P]-?: (A extends P[K] ? K : never);
}[keyof P];
/**
 * Dual for FieldsWith - returns the rest of the fields
 */
declare type FieldsWithout<A, P> = Exclude<keyof P, FieldsWith<A, P>>;
/**
 * Typa lambda returning new type with all fields within P having type U marked as optional
 */
declare type MakeOptional<P, U = undefined> = Pick<P, FieldsWithout<U, P>> & Partial<Pick<P, FieldsWith<U, P>>>;
/**
 * Fix signature by marking all fields with undefined as optional
 */
export declare const fixOptionals: <C extends t.Mixed>(c: C) => t.Type<MakeOptional<C["_A"], undefined>, C["_O"], C["_I"]>;
/**
 * Just an alias for T | undefined coded
 */
export declare const optional: <C extends t.Mixed>(c: C) => t.Type<C["_A"] | undefined, C["_O"], C["_I"]>;
export {};
