import * as t from 'io-ts';
export declare const ReviewOptionsV: t.Type<Pick<{
    reviewTypes: {
        spellCheck: boolean;
        grammarCheck: boolean;
        factCheck: boolean;
        highLevelCheck: boolean;
        technicalCheck: boolean;
    };
    tags: {
        value: string;
        magnitude: number;
    }[] | undefined;
    allowPartialMatches: boolean;
}, "reviewTypes" | "allowPartialMatches"> & Partial<Pick<{
    reviewTypes: {
        spellCheck: boolean;
        grammarCheck: boolean;
        factCheck: boolean;
        highLevelCheck: boolean;
        technicalCheck: boolean;
    };
    tags: {
        value: string;
        magnitude: number;
    }[] | undefined;
    allowPartialMatches: boolean;
}, "tags">>, {
    reviewTypes: {
        spellCheck: boolean;
        grammarCheck: boolean;
        factCheck: boolean;
        highLevelCheck: boolean;
        technicalCheck: boolean;
    };
    tags: {
        value: string;
        magnitude: number;
    }[];
    allowPartialMatches: boolean;
}, unknown>;
export declare type ReviewOptions = t.TypeOf<typeof ReviewOptionsV>;
export declare function validateReviewOptions(reviewRepr: any): Promise<ReviewOptions>;
