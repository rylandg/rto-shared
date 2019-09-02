import * as t from 'io-ts';
export declare const GoogleUserV: t.TypeC<{
    googleId: t.StringC;
    email: t.StringC;
    name: t.StringC;
    imageUrl: t.StringC;
    access_token: t.StringC;
    tokenObj: t.AnyC;
}>;
export declare type GoogleUser = t.TypeOf<typeof GoogleUserV>;
