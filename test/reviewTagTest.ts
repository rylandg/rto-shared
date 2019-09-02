import test from 'ava';

import { ReviewTag, validateReviewTag } from '../src/models/ReviewTag';

const charmanderTag = { value: 'charmander', magnitude: 6 };
const squirtleTag = { value: 'squirtle', magnitude: 1 };
const eveeTag = { value: 'evee', magnitude: 3 };
const mewTag = { value: 'mew', magnitude: 9 };

test('Fails to validate invalid tags', (t) => {
  t.throws(() => 
    validateReviewTag({ value: 'weavile' }), 'Missing fields .magnitude');
  t.throws(() => 
    validateReviewTag({ magnitude: 3 }), 'Missing fields .value');
  t.throws(() =>
    validateReviewTag({ value: 'pikachu', magnitude: 31.4}), 'Magnitude for tag must be an integer');
  t.throws(() =>
    validateReviewTag({ value: 'snorlax', magnitude: 15 }), 'Magnitude must be in the range of 1 - 9');
});

test('Successfully validates valid tags', (t) => {
  t.is(validateReviewTag(charmanderTag), charmanderTag);
  t.is(validateReviewTag(squirtleTag), squirtleTag);
  t.is(validateReviewTag(eveeTag), eveeTag);
  t.is(validateReviewTag(mewTag), mewTag);
});
