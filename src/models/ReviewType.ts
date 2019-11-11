import * as t from 'io-ts';

export const ReviewTypeV = t.type({
  spell_check: t.boolean,
  grammar_check: t.boolean,
  fact_check: t.boolean,
  high_level_check: t.boolean,
  technical_check: t.boolean,
});

export type ReviewType = t.TypeOf<typeof ReviewTypeV>;

function compareCheck(reviewerStatus: boolean, revieweeStatus: boolean): boolean {
  return revieweeStatus === true ? reviewerStatus : true;
}

export function compareReviewTypes(reviewer: ReviewType, reviewee: ReviewType): ReviewType {
  return {
    spell_check: compareCheck(reviewer.spell_check, reviewee.spell_check),
    grammar_check: compareCheck(reviewer.grammar_check, reviewee.grammar_check),
    fact_check: compareCheck(reviewer.fact_check, reviewee.fact_check),
    high_level_check: compareCheck(reviewer.high_level_check, reviewee.high_level_check),
    technical_check: compareCheck(reviewer.technical_check, reviewee.technical_check),
  };
}
