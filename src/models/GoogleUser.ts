import * as t from 'io-ts';

export const GoogleUserV = t.type({
  google_id: t.string,
  email: t.string,
  name: t.string,
  image_url: t.string,
  access_token: t.string,
  token_obj: t.any,
});

export type GoogleUser = t.TypeOf<typeof GoogleUserV>;
