"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const optional_1 = require("../optional");
const ReviewTag_1 = require("./ReviewTag");
exports.PublicUserV = t.type({
    uid: t.string,
    photoURL: t.string,
    displayName: t.string,
});
var UserRole;
(function (UserRole) {
    UserRole["BETA"] = "BETA";
    UserRole["ADMIN"] = "ADMIN";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
exports.UserRoleV = t.keyof({
    [UserRole.BETA]: null,
    [UserRole.ADMIN]: null,
});
exports.ClientUserV = optional_1.fixOptionals(t.intersection([
    exports.PublicUserV,
    t.type({
        name: t.string,
        emailAddress: t.string,
        goldStars: t.number,
        demerits: t.number,
        profileTags: t.array(ReviewTag_1.ReviewTagV),
        token: optional_1.optional(t.string),
        postIds: t.array(t.string),
        reviewIds: t.array(t.string),
        roles: optional_1.optional(t.array(exports.UserRoleV)),
    }),
]));
function defaultClientUser() {
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
exports.defaultClientUser = defaultClientUser;
//# sourceMappingURL=ClientUser.js.map