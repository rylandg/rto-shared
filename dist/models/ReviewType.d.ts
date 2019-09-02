import * as t from 'io-ts';
export declare const ReviewTypeV: t.TypeC<{
    spellCheck: t.BooleanC;
    grammarCheck: t.BooleanC;
    factCheck: t.BooleanC;
    highLevelCheck: t.BooleanC;
    technicalCheck: t.BooleanC;
}>;
export declare type ReviewType = t.TypeOf<typeof ReviewTypeV>;
export declare function compareReviewTypes(reviewer: ReviewType, reviewee: ReviewType): ReviewType;
