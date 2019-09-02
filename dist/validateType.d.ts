import { Errors } from 'io-ts';
import { Either } from 'fp-ts/lib/Either';
interface Decodable {
    decode: (typeRepr: any) => Either<Errors, any>;
}
export declare function validateType<T>(typeRepr: any, validator: Decodable): T;
export {};
