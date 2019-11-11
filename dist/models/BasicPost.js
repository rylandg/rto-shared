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
const ReviewTag_1 = require("./ReviewTag");
const ReviewType_1 = require("./ReviewType");
exports.BasicPostV = t.type({
    title: t.string,
    is_public: t.boolean,
    accelerated: t.boolean,
    review_type: ReviewType_1.ReviewTypeV,
    review_tags: t.array(ReviewTag_1.ReviewTagV),
    time_in_minutes: t.number,
});
//# sourceMappingURL=BasicPost.js.map