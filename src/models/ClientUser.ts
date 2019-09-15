import * as t from 'io-ts';

import { fixOptionals, optional } from '../optional';

import { ReviewTag, ReviewTagV } from './ReviewTag';

export const PublicUserV = t.type({
  uid: t.string,
  photoURL: t.string,
  displayName: t.string,
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
    emailAddress: t.string,
    goldStars: t.number,
    demerits: t.number,
    profileTags: t.array(ReviewTagV),
    token: optional(t.string),
    postIds: t.array(t.string),
    reviewIds: t.array(t.string),
    roles: optional(t.array(UserRoleV)),
  }),
]));

export function defaultClientUser(): ClientUser {
  return {
    uid: '',
    photoURL: '',
    displayName: '',
    name: '',
    emailAddress: '',
    goldStars: 0,
    demerits: 0,
    profileTags: [],
    token: '',
    postIds: [],
    reviewIds: [],
    roles: [],
  };
}

export type ClientUser = t.TypeOf<typeof ClientUserV>;
