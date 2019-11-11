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
const validateType_1 = require("../validateType");
const has = Object.prototype.hasOwnProperty;
exports.ReviewTagV = t.type({
    value: t.string,
    magnitude: t.number,
});
function validateReviewTag(tagRepr) {
    const parsedTag = validateType_1.validateType(tagRepr, exports.ReviewTagV);
    const { magnitude } = parsedTag;
    if (!Number.isInteger(magnitude)) {
        throw new Error('Magnitude for tag must be an integer');
    }
    else if (magnitude < 1 || magnitude > 9) {
        throw new Error('Magnitude must be in the range of 1 - 9');
    }
    return parsedTag;
}
exports.validateReviewTag = validateReviewTag;
function isReviewTag(tagRepr) {
    return validateReviewTag(tagRepr) !== undefined;
}
exports.isReviewTag = isReviewTag;
exports.ScoredReviewTagV = t.intersection([
    exports.ReviewTagV,
    t.type({
        score: t.number,
    }),
]);
//# sourceMappingURL=ReviewTag.js.map