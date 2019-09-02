"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
exports.ReviewTypeV = t.type({
    spellCheck: t.boolean,
    grammarCheck: t.boolean,
    factCheck: t.boolean,
    highLevelCheck: t.boolean,
    technicalCheck: t.boolean,
});
function compareCheck(reviewerStatus, revieweeStatus) {
    return revieweeStatus === true ? reviewerStatus : true;
}
function compareReviewTypes(reviewer, reviewee) {
    return {
        spellCheck: compareCheck(reviewer.spellCheck, reviewee.spellCheck),
        grammarCheck: compareCheck(reviewer.grammarCheck, reviewee.grammarCheck),
        factCheck: compareCheck(reviewer.factCheck, reviewee.factCheck),
        highLevelCheck: compareCheck(reviewer.highLevelCheck, reviewee.highLevelCheck),
        technicalCheck: compareCheck(reviewer.technicalCheck, reviewee.technicalCheck),
    };
}
exports.compareReviewTypes = compareReviewTypes;
//# sourceMappingURL=ReviewType.js.map