"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const ThrowReporter_1 = require("io-ts/lib/ThrowReporter");
const pipeable_1 = require("fp-ts/lib/pipeable");
const Either_1 = require("fp-ts/lib/Either");
const optional_1 = require("../optional");
const ReviewTag_1 = require("./ReviewTag");
const ReviewType_1 = require("./ReviewType");
// export const ReviewTagV = t.type({
//   value: t.string,
//   magnitude: t.number,
// });
// export const ReviewTypeV = t.type({
//   spellCheck: t.boolean,
//   grammarCheck: t.boolean,
//   factCheck: t.boolean,
//   highLevelCheck: t.boolean,
//   technicalCheck: t.boolean,
// });
// // export const ReviewOptionsV = t.intersection([
//   BasicPostV,
//   t.type({
//     id: t.string,
//     ownerId: t.string,
//     starValue: t.number,
//     isStarted: t.boolean,
//     googleDocsId: t.string,
//     currentIterations: t.number,
//     reviewerIds: t.array(t.string),
//     observers: t.array(t.string),
//     timeCreated: t.string,
//     endIterationTime: t.string,
//     reviewCompleted: t.boolean,
//   }),
// ]);
exports.ReviewOptionsV = optional_1.fixOptionals(t.type({
    reviewTypes: ReviewType_1.ReviewTypeV,
    tags: optional_1.optional(t.array(ReviewTag_1.ReviewTagV)),
    allowPartialMatches: t.boolean,
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