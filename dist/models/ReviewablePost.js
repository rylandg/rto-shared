"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("io-ts"));
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
        owner_id: t.string,
        star_value: t.number,
        google_docs_id: t.string,
        reviewer_ids: t.array(t.string),
        observers: t.array(t.string),
        time_created: t.string,
        phase: exports.PostPhaseV,
    }),
]);
//# sourceMappingURL=ReviewablePost.js.map