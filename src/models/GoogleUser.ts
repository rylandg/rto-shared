import * as t from 'io-ts';

export const GoogleUserV = t.type({
  googleId: t.string,
  email: t.string,
  name: t.string,
  imageUrl: t.string,
  access_token: t.string,
  tokenObj: t.any,
});

export type GoogleUser = t.TypeOf<typeof GoogleUserV>;
