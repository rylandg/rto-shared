export function restrictShape<T extends any, S extends any>(source: T, empty: S): S {
  const copy = { ...empty };
  for (const prop in copy) {
    if (source[prop] && copy.hasOwnProperty(prop)) {
      copy[prop] = source[prop];
    }
  }
  return copy;
}
