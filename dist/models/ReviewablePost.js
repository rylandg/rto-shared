"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
const __1 = require("../");
var PostPhase;
(function (PostPhase) {
    PostPhase["UNPUBLISHED"] = "UNPUBLISHED";
    PostPhase["WAITING_FOR_MATCH"] = "WAITING_FOR_MATCH";
    PostPhase["REVIEWER_TURN"] = "REVIEWER_TURN";
    PostPhase["REVIEWEE_TURN"] = "REVIEWEE_TURN";
    PostPhase["COMPLETED"] = "COMPLETED";
})(PostPhase = exports.PostPhase || (exports.PostPhase = {}));
exports.PostPhaseV = t.keyof({
    [PostPhase.UNPUBLISHED]: null,
    [PostPhase.WAITING_FOR_MATCH]: null,
    [PostPhase.REVIEWER_TURN]: null,
    [PostPhase.REVIEWEE_TURN]: null,
    [PostPhase.COMPLETED]: null,
});
exports.ReviewablePostV = t.intersection([
    __1.BasicPostV,
    t.type({
        id: t.string,
        ownerId: t.string,
        starValue: t.number,
        googleDocsId: t.string,
        currentIterations: t.number,
        reviewerIds: t.array(t.string),
        observers: t.array(t.string),
        timeCreated: t.string,
        endIterationTime: t.string,
        phase: exports.PostPhaseV,
    }),
]);
//# sourceMappingURL=ReviewablePost.js.map