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
    };
}
exports.defaultClientUser = defaultClientUser;
//# sourceMappingURL=ClientUser.js.map