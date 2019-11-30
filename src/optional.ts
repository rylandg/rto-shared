import * as t from 'io-ts';

/**
 * Type lambda returning a union of key names from input type P having type A
 */
type FieldsWith<A, P> = { [K in keyof P]-?: (A extends P[K] ? K : never) }[keyof P]

/**
 * Dual for FieldsWith - returns the rest of the fields
 */
type FieldsWithout<A, P> = Exclude<keyof P, FieldsWith<A, P>>

/**
 * Typa lambda returning new type with all fields within P having type U marked as optional
 */
type MakeOptional<P, U = undefined> = Pick<P, FieldsWithout<U, P>> & Partial<Pick<P, FieldsWith<U, P>>>

/**
 * Fix signature by marking all fields with undefined as optional
 */
export const fixOptionals = <C extends t.Mixed>(c: C): t.Type<MakeOptional<t.TypeOf<C>>, t.OutputOf<C>, t.InputOf<C>> => c

/**
 * Just an alias for T | undefined coded
 */
export const optional = <C extends t.Mixed>(c: C): t.Type<t.TypeOf<C> | undefined, t.OutputOf<C>, t.InputOf<C>> =>
  t.union([t.undefined, c])

export const Nullable = t.union([t.null, t.undefined]);
