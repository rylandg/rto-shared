import * as t from 'io-ts';

import { fixOptionals, optional } from '../optional';

import { ReviewTag, ReviewTagV } from './ReviewTag';

export const PublicUserV = t.type({
  uid: t.string,
  photo_url: t.string,
  display_name: t.string,
});

export type PublicUser = t.TypeOf<typeof PublicUserV>;

export enum UserRole {
  BETA = 'BETA',
  ADMIN = 'ADMIN',
}

export const UserRoleV = t.keyof({
  [UserRole.BETA]: null,
  [UserRole.ADMIN]: null,
});

export const ClientUserV = fixOptionals(t.intersection([
  PublicUserV,
  t.type({
    name: t.string,
    email_address: t.string,
    gold_stars: t.number,
    demerits: t.number,
    profile_tags: t.array(ReviewTagV),
    token: optional(t.string),
    post_ids: t.array(t.string),
    review_ids: t.array(t.string),
    roles: optional(t.array(UserRoleV)),
  }),
]));

export function defaultClientUser(): ClientUser {
  return {
    uid: '',
    photo_url: '',
    display_name: '',
    name: '',
    email_address: '',
    gold_stars: 0,
    demerits: 0,
    profile_tags: [],
    token: '',
    post_ids: [],
    review_ids: [],
    roles: [UserRole.BETA],
  };
}

export type ClientUser = t.TypeOf<typeof ClientUserV>;
