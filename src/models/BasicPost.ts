import * as t from 'io-ts';

import { ReviewTag, ReviewTagV } from './ReviewTag';
import { ReviewType, ReviewTypeV } from './ReviewType';

export const BasicPostV = t.type({
  title: t.string,
  isPublic: t.boolean,
  accelerated: t.boolean,
  reviewType: ReviewTypeV,
  reviewTags: t.array(ReviewTagV),
  timeInMinutes: t.number,
});

export type BasicPost = t.TypeOf<typeof BasicPostV>;
