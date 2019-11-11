import * as t from 'io-ts';
export declare const PublicUserV: t.TypeC<{
    uid: t.StringC;
    photo_url: t.StringC;
    display_name: t.StringC;
}>;
export declare type PublicUser = t.TypeOf<typeof PublicUserV>;
export declare enum UserRole {
    BETA = "BETA",
    ADMIN = "ADMIN"
}
export declare const UserRoleV: t.KeyofC<{
    [UserRole.BETA]: null;
    [UserRole.ADMIN]: null;
}>;
export declare const ClientUserV: t.Type<Pick<{
    uid: string;
    photo_url: string;
    display_name: string;
} & {
    name: string;
    email_address: string;
    gold_stars: number;
    demerits: number;
    profile_tags: {
        value: string;
        magnitude: number;
    }[];
    token: string | undefined;
    post_ids: string[];
    review_ids: string[];
    roles: UserRole[] | undefined;
}, "name" | "uid" | "photo_url" | "display_name" | "email_address" | "gold_stars" | "demerits" | "profile_tags" | "post_ids" | "review_ids"> & Partial<Pick<{
    uid: string;
    photo_url: string;
    display_name: string;
} & {
    name: string;
    email_address: string;
    gold_stars: number;
    demerits: number;
    profile_tags: {
        value: string;
        magnitude: number;
    }[];
    token: string | undefined;
    post_ids: string[];
    review_ids: string[];
    roles: UserRole[] | undefined;
}, "token" | "roles">>, {
    uid: string;
    photo_url: string;
    display_name: string;
} & {
    name: string;
    email_address: string;
    gold_stars: number;
    demerits: number;
    profile_tags: {
        value: string;
        magnitude: number;
    }[];
    token: string;
    post_ids: string[];
    review_ids: string[];
    roles: UserRole[];
}, unknown>;
export declare function defaultClientUser(): ClientUser;
export declare type ClientUser = t.TypeOf<typeof ClientUserV>;
