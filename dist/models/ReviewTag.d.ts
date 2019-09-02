import * as t from 'io-ts';
export declare const ReviewTagV: t.TypeC<{
    value: t.StringC;
    magnitude: t.NumberC;
}>;
export declare type ReviewTag = t.TypeOf<typeof ReviewTagV>;
export declare function validateReviewTag(tagRepr: any): ReviewTag;
export declare function isReviewTag(tagRepr: unknown): tagRepr is ReviewTag;
export declare const ScoredReviewTagV: t.IntersectionC<[t.TypeC<{
    value: t.StringC;
    magnitude: t.NumberC;
}>, t.TypeC<{
    score: t.NumberC;
}>]>;
export declare type ScoredReviewTag = t.TypeOf<typeof ScoredReviewTagV>;
