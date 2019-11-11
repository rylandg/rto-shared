import * as t from 'io-ts';
export declare const ReviewTypeV: t.TypeC<{
    spell_check: t.BooleanC;
    grammar_check: t.BooleanC;
    fact_check: t.BooleanC;
    high_level_check: t.BooleanC;
    technical_check: t.BooleanC;
}>;
export declare type ReviewType = t.TypeOf<typeof ReviewTypeV>;
export declare function compareReviewTypes(reviewer: ReviewType, reviewee: ReviewType): ReviewType;
