import * as t from 'io-ts';

import { validateType } from '../validateType';

const has = Object.prototype.hasOwnProperty;

export const ReviewTagV = t.type({
  value: t.string,
  magnitude: t.number,
});

export type ReviewTag = t.TypeOf<typeof ReviewTagV>;

export function validateReviewTag(tagRepr: any): ReviewTag {
  const parsedTag: ReviewTag = validateType<ReviewTag>(tagRepr, ReviewTagV);
  const { magnitude } = parsedTag;
  if (!Number.isInteger(magnitude)) {
    throw new Error('Magnitude for tag must be an integer');
  } else if (magnitude < 1 || magnitude > 9) {
    throw new Error('Magnitude must be in the range of 1 - 9');
  }
  return parsedTag;
}

export function isReviewTag(tagRepr: unknown): tagRepr is ReviewTag {
  return validateReviewTag(tagRepr) !== undefined;
}

export const ScoredReviewTagV = t.intersection([
  ReviewTagV,
  t.type({
    score: t.number,
  }),
]);

export type ScoredReviewTag = t.TypeOf<typeof ScoredReviewTagV>;

