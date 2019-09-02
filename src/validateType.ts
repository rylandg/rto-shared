import * as t from 'io-ts';
import { Errors } from 'io-ts';
import { ThrowReporter } from 'io-ts/lib/ThrowReporter';
import { pipe } from 'fp-ts/lib/pipeable'
import { Either, fold } from 'fp-ts/lib/Either'

interface Decodable {
  decode: (typeRepr: any) => Either<Errors, any>;
}

export function validateType<T>(typeRepr: any, validator: Decodable): T {
  const potentialType = validator.decode(typeRepr);
  try {
    ThrowReporter.report(potentialType);
  } catch (err) {
    console.log(err);
    const paths = pipe(
      potentialType,
      fold(errors => errors.map(error => error.context.map(({ key }) => key).join('.')), () => ['0error'])
    );
    throw new Error(`Missing fields ${paths}`);
  }
  return typeRepr;
}
