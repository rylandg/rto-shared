"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("io-ts"));
const optional_1 = require("../optional");
const ReviewTag_1 = require("./ReviewTag");
exports.PublicUserV = t.type({
    uid: t.string,
    photo_url: t.string,
    display_name: t.string,
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
        email_address: t.string,
        gold_stars: t.number,
        demerits: t.number,
        profile_tags: t.array(ReviewTag_1.ReviewTagV),
        token: optional_1.optional(t.string),
        post_ids: t.array(t.string),
        review_ids: t.array(t.string),
        roles: optional_1.optional(t.array(exports.UserRoleV)),
    }),
]));
function defaultClientUser() {
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
        roles: [],
    };
}
exports.defaultClientUser = defaultClientUser;
//# sourceMappingURL=ClientUser.js.map