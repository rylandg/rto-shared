import * as t from 'io-ts';
import { ThrowReporter } from 'io-ts/lib/ThrowReporter';
import { pipe } from 'fp-ts/lib/pipeable'
import { fold } from 'fp-ts/lib/Either'

import { fixOptionals, optional } from '../optional';

import { ReviewTag, ReviewTagV } from './ReviewTag';
import { ReviewType, ReviewTypeV } from './ReviewType';

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
