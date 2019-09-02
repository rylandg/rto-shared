import * as t from 'io-ts';

export const ReviewTypeV = t.type({
  spellCheck: t.boolean,
  grammarCheck: t.boolean,
  factCheck: t.boolean,
  highLevelCheck: t.boolean,
  technicalCheck: t.boolean,
});

export type ReviewType = t.TypeOf<typeof ReviewTypeV>;

function compareCheck(reviewerStatus: boolean, revieweeStatus: boolean): boolean {
  return revieweeStatus === true ? reviewerStatus : true;
}

export function compareReviewTypes(reviewer: ReviewType, reviewee: ReviewType): ReviewType {
  return {
    spellCheck: compareCheck(reviewer.spellCheck, reviewee.spellCheck),
    grammarCheck: compareCheck(reviewer.grammarCheck, reviewee.grammarCheck),
    factCheck: compareCheck(reviewer.factCheck, reviewee.factCheck),
    highLevelCheck: compareCheck(reviewer.highLevelCheck, reviewee.highLevelCheck),
    technicalCheck: compareCheck(reviewer.technicalCheck, reviewee.technicalCheck),
  };
}
