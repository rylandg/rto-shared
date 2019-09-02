import * as t from 'io-ts';
export declare const PublicUserV: t.TypeC<{
    uid: t.StringC;
    photoURL: t.StringC;
    displayName: t.StringC;
}>;
export declare type PublicUser = t.TypeOf<typeof PublicUserV>;
export declare const ClientUserV: t.Type<Pick<{
    uid: string;
    photoURL: string;
    displayName: string;
} & {
    name: string;
    emailAddress: string;
    goldStars: number;
    demerits: number;
    profileTags: {
        value: string;
        magnitude: number;
    }[];
    token: string | undefined;
    postIds: string[];
    reviewIds: string[];
}, "name" | "uid" | "photoURL" | "displayName" | "emailAddress" | "goldStars" | "demerits" | "profileTags" | "postIds" | "reviewIds"> & Partial<Pick<{
    uid: string;
    photoURL: string;
    displayName: string;
} & {
    name: string;
    emailAddress: string;
    goldStars: number;
    demerits: number;
    profileTags: {
        value: string;
        magnitude: number;
    }[];
    token: string | undefined;
    postIds: string[];
    reviewIds: string[];
}, "token">>, {
    uid: string;
    photoURL: string;
    displayName: string;
} & {
    name: string;
    emailAddress: string;
    goldStars: number;
    demerits: number;
    profileTags: {
        value: string;
        magnitude: number;
    }[];
    token: string;
    postIds: string[];
    reviewIds: string[];
}, unknown>;
export declare function defaultClientUser(): ClientUser;
export declare type ClientUser = t.TypeOf<typeof ClientUserV>;
