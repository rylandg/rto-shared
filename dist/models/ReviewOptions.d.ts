import * as t from 'io-ts';
export declare const ReviewOptionsV: t.Type<Pick<{
    review_types: {
        spell_check: boolean;
        grammar_check: boolean;
        fact_check: boolean;
        high_level_check: boolean;
        technical_check: boolean;
    };
    tags: {
        value: string;
        magnitude: number;
    }[] | undefined;
    allow_partial_matches: boolean;
}, "review_types" | "allow_partial_matches"> & Partial<Pick<{
    review_types: {
        spell_check: boolean;
        grammar_check: boolean;
        fact_check: boolean;
        high_level_check: boolean;
        technical_check: boolean;
    };
    tags: {
        value: string;
        magnitude: number;
    }[] | undefined;
    allow_partial_matches: boolean;
}, "tags">>, {
    review_types: {
        spell_check: boolean;
        grammar_check: boolean;
        fact_check: boolean;
        high_level_check: boolean;
        technical_check: boolean;
    };
    tags: {
        value: string;
        magnitude: number;
    }[];
    allow_partial_matches: boolean;
}, unknown>;
export declare type ReviewOptions = t.TypeOf<typeof ReviewOptionsV>;
export declare function validateReviewOptions(reviewRepr: any): Promise<ReviewOptions>;
