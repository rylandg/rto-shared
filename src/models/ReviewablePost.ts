import * as t from 'io-ts';
import { ThrowReporter } from 'io-ts/lib/ThrowReporter';
import { pipe } from 'fp-ts/lib/pipeable'
import { fold } from 'fp-ts/lib/Either'

import { BasicPost, BasicPostV, ReviewType, ReviewTypeV, ReviewTag, ReviewTagV } from '../';

export enum PostPhase {
  UNPUBLISHED = 'UNPUBLISHED',
  WAITING_FOR_MATCH = 'WAITING_FOR_MATCH',
  REVIEWER_TURN = 'REVIEWER_TURN',
  REVIEWEE_TURN = 'REVIEWEE_TURN',
  COMPLETED = 'COMPLETED',
}

export const PostPhaseV = t.keyof({
  [PostPhase.UNPUBLISHED]: null,
  [PostPhase.WAITING_FOR_MATCH]: null,
  [PostPhase.REVIEWER_TURN]: null,
  [PostPhase.REVIEWEE_TURN]: null,
  [PostPhase.COMPLETED]: null,
});

export enum ReviewStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export const ReviewStatusV = t.keyof({
  [ReviewStatus.PENDING]: null,
  [ReviewStatus.ACCEPTED]: null,
  [ReviewStatus.REJECTED]: null,
});

export const ReviewerV = t.type({
  user_id: t.string,
  status: ReviewStatusV,
});

export const ReviewablePostV = t.intersection([
  BasicPostV,
  t.type({
    id: t.string,
    owner_id: t.string,
    star_value: t.number,
    google_docs_id: t.string,
    time_created: t.string,
    phase: PostPhaseV,
    reviewers: t.array(ReviewerV),
  }),
]);

export type ReviewablePost = t.TypeOf<typeof ReviewablePostV>;
