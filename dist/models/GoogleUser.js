"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
exports.GoogleUserV = t.type({
    googleId: t.string,
    email: t.string,
    name: t.string,
    imageUrl: t.string,
    access_token: t.string,
    tokenObj: t.any,
});
//# sourceMappingURL=GoogleUser.js.map