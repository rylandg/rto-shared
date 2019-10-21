import * as t from 'io-ts';
export declare const BasicPostV: t.TypeC<{
    title: t.StringC;
    isPublic: t.BooleanC;
    accelerated: t.BooleanC;
    reviewType: t.TypeC<{
        spellCheck: t.BooleanC;
        grammarCheck: t.BooleanC;
        factCheck: t.BooleanC;
        highLevelCheck: t.BooleanC;
        technicalCheck: t.BooleanC;
    }>;
    reviewTags: t.ArrayC<t.TypeC<{
        value: t.StringC;
        magnitude: t.NumberC;
    }>>;
    timeInMinutes: t.NumberC;
}>;
export declare type BasicPost = t.TypeOf<typeof BasicPostV>;
