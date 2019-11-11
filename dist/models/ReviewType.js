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
exports.ReviewTypeV = t.type({
    spell_check: t.boolean,
    grammar_check: t.boolean,
    fact_check: t.boolean,
    high_level_check: t.boolean,
    technical_check: t.boolean,
});
function compareCheck(reviewerStatus, revieweeStatus) {
    return revieweeStatus === true ? reviewerStatus : true;
}
function compareReviewTypes(reviewer, reviewee) {
    return {
        spell_check: compareCheck(reviewer.spell_check, reviewee.spell_check),
        grammar_check: compareCheck(reviewer.grammar_check, reviewee.grammar_check),
        fact_check: compareCheck(reviewer.fact_check, reviewee.fact_check),
        high_level_check: compareCheck(reviewer.high_level_check, reviewee.high_level_check),
        technical_check: compareCheck(reviewer.technical_check, reviewee.technical_check),
    };
}
exports.compareReviewTypes = compareReviewTypes;
//# sourceMappingURL=ReviewType.js.map