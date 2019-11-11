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
exports.GoogleUserV = t.type({
    google_id: t.string,
    email: t.string,
    name: t.string,
    image_url: t.string,
    access_token: t.string,
    token_obj: t.any,
});
//# sourceMappingURL=GoogleUser.js.map