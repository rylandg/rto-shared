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
const ThrowReporter_1 = require("io-ts/lib/ThrowReporter");
const pipeable_1 = require("fp-ts/lib/pipeable");
const Either_1 = require("fp-ts/lib/Either");
const optional_1 = require("../optional");
const ReviewTag_1 = require("./ReviewTag");
const ReviewType_1 = require("./ReviewType");
exports.ReviewOptionsV = optional_1.fixOptionals(t.type({
    review_types: ReviewType_1.ReviewTypeV,
    tags: optional_1.optional(t.array(ReviewTag_1.ReviewTagV)),
    allow_partial_matches: t.boolean,
}));
// TODO: Genericize this
async function validateReviewOptions(reviewRepr) {
    const potentialReviewOpts = exports.ReviewOptionsV.decode(reviewRepr);
    try {
        ThrowReporter_1.ThrowReporter.report(potentialReviewOpts);
    }
    catch (err) {
        const paths = pipeable_1.pipe(potentialReviewOpts, Either_1.fold(errors => errors.map(error => error.context.map(({ key }) => key).join('.')), () => ['0error']));
        throw new Error(`Missing fields ${paths}`);
    }
    return reviewRepr;
}
exports.validateReviewOptions = validateReviewOptions;
//# sourceMappingURL=ReviewOptions.js.map