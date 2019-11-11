"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReviewablePost_1 = require("../models/ReviewablePost");
const faker_1 = __importDefault(require("faker"));
const uuid_1 = require("uuid");
function getRandomReviewType() {
    const rT = {
        spellCheck: false,
        grammarCheck: false,
        factCheck: false,
        highLevelCheck: false,
        technicalCheck: false,
    };
    let numOfTypes = Math.floor(Math.random() * 3);
    const rTKeys = Object.keys(rT);
    while (numOfTypes !== 0) {
        const chosenKey = Math.floor(Math.random() * rTKeys.length);
        const chosenRT = rTKeys[chosenKey];
        if (rT[chosenRT] !== true) {
            rT[chosenRT] = true;
            numOfTypes -= 1;
        }
    }
    return rT;
}
function createFakePost(ownerId) {
    const phaseChoice = Math.floor(Math.random() * 3);
    const options = [ReviewablePost_1.PostPhase.COMPLETED, ReviewablePost_1.PostPhase.UNPUBLISHED, ReviewablePost_1.PostPhase.WAITING_FOR_MATCH];
    const phase = options[phaseChoice];
    return {
        title: faker_1.default.lorem.sentence(),
        isPublic: false,
        accelerated: false,
        reviewType: getRandomReviewType(),
        reviewTags: [],
        timeInMinutes: 120,
        id: uuid_1.v4(),
        ownerId: ownerId || uuid_1.v4(),
        googleDocsId: uuid_1.v4(),
        reviewerIds: [],
        observers: [],
        timeCreated: (new Date()).toISOString(),
        starValue: 0,
        phase: phase,
    };
    // return {
    //   faker.
    //   title: t.string,
    //   isPublic: t.boolean,
    //   accelerated: t.boolean,
    //   reviewType: ReviewTypeV,
    //   reviewTags: t.array(ReviewTagV),
    //   timeInMinutes: t.number,
    //   id: t.string,
    //   ownerId: t.string,
    //   starValue: t.number,
    //   googleDocsId: t.string,
    //   reviewerIds: t.array(t.string),
    //   observers: t.array(t.string),
    //   timeCreated: t.string,
    //   phase: PostPhaseV,
    //   version: t.string,
    // };
}
exports.createFakePost = createFakePost;
//# sourceMappingURL=post.js.map