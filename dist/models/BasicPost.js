"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const ReviewTag_1 = require("./ReviewTag");
const ReviewType_1 = require("./ReviewType");
exports.BasicPostV = t.type({
    title: t.string,
    isPublic: t.boolean,
    accelerated: t.boolean,
    maxIterations: t.number,
    reviewType: ReviewType_1.ReviewTypeV,
    reviewTags: t.array(ReviewTag_1.ReviewTagV),
    timePerIterationInMinutes: t.number,
});
//# sourceMappingURL=BasicPost.js.map