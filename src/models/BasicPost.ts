import * as t from 'io-ts';

import { ReviewTag, ReviewTagV } from './ReviewTag';
import { ReviewType, ReviewTypeV } from './ReviewType';

export const BasicPostV = t.type({
  title: t.string,
  is_public: t.boolean,
  accelerated: t.boolean,
  review_type: ReviewTypeV,
  review_tags: t.array(ReviewTagV),
  time_in_minutes: t.number,
});

export type BasicPost = t.TypeOf<typeof BasicPostV>;
