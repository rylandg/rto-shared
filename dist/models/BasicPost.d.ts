import * as t from 'io-ts';
export declare const BasicPostV: t.TypeC<{
    title: t.StringC;
    is_public: t.BooleanC;
    accelerated: t.BooleanC;
    review_type: t.TypeC<{
        spell_check: t.BooleanC;
        grammar_check: t.BooleanC;
        fact_check: t.BooleanC;
        high_level_check: t.BooleanC;
        technical_check: t.BooleanC;
    }>;
    review_tags: t.ArrayC<t.TypeC<{
        value: t.StringC;
        magnitude: t.NumberC;
    }>>;
    time_in_minutes: t.NumberC;
}>;
export declare type BasicPost = t.TypeOf<typeof BasicPostV>;
