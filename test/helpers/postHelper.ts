import { v4 as uuidv4 } from 'uuid';
//@ts-ignore
import * as randomWords from 'random-words';

import { ReviewablePost } from '../../src/models/Post';

export function getBasicPost(): ReviewablePost {
  return {
    title: randomWords({ exactly: 5, join: ' ' }),
    isPublic: false,
    accelerated: false,
    maxIterations: 3,
    reviewType: {
      spellCheck: false,
      grammarCheck: false,
      factCheck: false,
      highLevelCheck: false,
      technicalCheck: false,
    },
    reviewTags: [],
    timePerIterationInMinutes: 120,
    id: uuidv4(),
    ownerId: uuidv4(),
    isStarted: true,
    googleDocsId: uuidv4(),
    currentIterations: 0,
    // validate that at least one type of review is chosen
    reviewerIds: [],
    observers: [],
    timeCreated: (new Date()).toISOString(),
    endIterationTime: '',
    // calculate this based on qualities of the post
    starValue: 0,
    reviewCompleted: false,
  };
}
