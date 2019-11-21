import * as t from 'io-ts';
export declare enum PostPhase {
    UNPUBLISHED = "UNPUBLISHED",
    WAITING_FOR_MATCH = "WAITING_FOR_MATCH",
    REVIEWER_TURN = "REVIEWER_TURN",
    REVIEWEE_TURN = "REVIEWEE_TURN",
    COMPLETED = "COMPLETED"
}
export declare const PostPhaseV: t.KeyofC<{
    [PostPhase.UNPUBLISHED]: null;
    [PostPhase.WAITING_FOR_MATCH]: null;
    [PostPhase.REVIEWER_TURN]: null;
    [PostPhase.REVIEWEE_TURN]: null;
    [PostPhase.COMPLETED]: null;
}>;
export declare const ReviewablePostV: t.IntersectionC<[t.TypeC<{
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
}>, t.TypeC<{
    id: t.StringC;
    owner_id: t.StringC;
    star_value: t.NumberC;
    google_docs_id: t.StringC;
    reviewer_ids: t.ArrayC<t.StringC>;
    observers: t.ArrayC<t.StringC>;
    time_created: t.StringC;
    phase: t.KeyofC<{
        [PostPhase.UNPUBLISHED]: null;
        [PostPhase.WAITING_FOR_MATCH]: null;
        [PostPhase.REVIEWER_TURN]: null;
        [PostPhase.REVIEWEE_TURN]: null;
        [PostPhase.COMPLETED]: null;
    }>;
    pending_reviewers: t.ArrayC<t.StringC>;
}>]>;
export declare type ReviewablePost = t.TypeOf<typeof ReviewablePostV>;
