import test from 'ava';

import { ReviewTag } from '../src/models/ReviewTag';
import { TagSet } from '../src/TagSet';


const germanyTag = { value: 'germany', magnitude: 4 };
const franceTag = { value: 'france', magnitude: 2 };
const reallyFranceTag = { value: 'france', magnitude: 8 };
const scifiTag = { value: 'science-fiction', magnitude: 3 };
const duplicateTags = [scifiTag, scifiTag];

test('Correctly validates duplicate tags', (t) => {
  t.throws(() => new TagSet(duplicateTags), 'Tag science-fiction already exists in set');
});

test('Stops duplicate tag addition', (t) => {
  const fooSet = new TagSet(germanyTag);
  t.throws(() => fooSet.add(germanyTag), 'Tag germany already exists in set');
});

test('Has finds without magnitude', (t) => {
  const fooSet = new TagSet(franceTag);
  t.true(fooSet.has(franceTag));
  t.true(fooSet.has(reallyFranceTag));
});

test('Has finds with magnitude', (t) => {
  const fooSet = new TagSet(franceTag);
  t.false(fooSet.has(reallyFranceTag, true));
  t.true(fooSet.has(franceTag, true));
});

test('Map returns all tags', (t) => {
  const setTags = [scifiTag, germanyTag, franceTag];
  const fooSet = new TagSet(setTags);
  const retTags = fooSet.map((tag: ReviewTag) => tag);
  t.deepEqual(setTags, retTags);
});
