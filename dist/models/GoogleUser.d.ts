import * as t from 'io-ts';
export declare const GoogleUserV: t.TypeC<{
    google_id: t.StringC;
    email: t.StringC;
    name: t.StringC;
    image_url: t.StringC;
    access_token: t.StringC;
    token_obj: t.AnyC;
}>;
export declare type GoogleUser = t.TypeOf<typeof GoogleUserV>;
