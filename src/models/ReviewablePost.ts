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

export const ReviewablePostV = t.intersection([
  BasicPostV,
  t.type({
    id: t.string,
    ownerId: t.string,
    starValue: t.number,
    googleDocsId: t.string,
    currentIterations: t.number,
    reviewerIds: t.array(t.string),
    observers: t.array(t.string),
    timeCreated: t.string,
    endIterationTime: t.string,
    phase: PostPhaseV,
  }),
]);

export type ReviewablePost = t.TypeOf<typeof ReviewablePostV>;
