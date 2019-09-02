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
    isPublic: t.BooleanC;
    accelerated: t.BooleanC;
    maxIterations: t.NumberC;
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
    timePerIterationInMinutes: t.NumberC;
}>, t.TypeC<{
    id: t.StringC;
    ownerId: t.StringC;
    starValue: t.NumberC;
    googleDocsId: t.StringC;
    currentIterations: t.NumberC;
    reviewerIds: t.ArrayC<t.StringC>;
    observers: t.ArrayC<t.StringC>;
    timeCreated: t.StringC;
    endIterationTime: t.StringC;
    phase: t.KeyofC<{
        [PostPhase.UNPUBLISHED]: null;
        [PostPhase.WAITING_FOR_MATCH]: null;
        [PostPhase.REVIEWER_TURN]: null;
        [PostPhase.REVIEWEE_TURN]: null;
        [PostPhase.COMPLETED]: null;
    }>;
}>]>;
export declare type ReviewablePost = t.TypeOf<typeof ReviewablePostV>;
