import * as t from 'io-ts';
import { ThrowReporter } from 'io-ts/lib/ThrowReporter';
import { pipe } from 'fp-ts/lib/pipeable'
import { fold } from 'fp-ts/lib/Either'

import { fixOptionals, optional } from '../optional';

import { ReviewTag, ReviewTagV } from './ReviewTag';
import { ReviewType, ReviewTypeV } from './ReviewType';

export const ReviewOptionsV = fixOptionals(t.type({
  reviewTypes: ReviewTypeV,
  tags: optional(t.array(ReviewTagV)),
  allowPartialMatches: t.boolean,
}));

export type ReviewOptions = t.TypeOf<typeof ReviewOptionsV>;

// TODO: Genericize this
export async function validateReviewOptions(reviewRepr: any): Promise<ReviewOptions> {
  const potentialReviewOpts = ReviewOptionsV.decode(reviewRepr);
  try {
    ThrowReporter.report(potentialReviewOpts);
  } catch (err) {
    const paths = pipe(
      potentialReviewOpts,
      fold(errors => errors.map(error => error.context.map(({ key }) => key).join('.')), () => ['0error'])
    );
    throw new Error(`Missing fields ${paths}`);
  }
  return reviewRepr;
}
