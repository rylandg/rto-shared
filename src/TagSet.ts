import { ReviewTag, ReviewTagV, validateReviewTag } from './models/ReviewTag';

type TagSetMapper = (item: ReviewTag, index?: number) => any;

export class TagSet {
  public tags: ReviewTag[];

  constructor(initialTags: ReviewTag | ReviewTag[] = []) {
    this.tags = [];
    let arrTags: ReviewTag[] = ([] as ReviewTag[]).concat(initialTags);
    arrTags.forEach((initialTag) => {
      this.add(initialTag);
    });
  }

  add(tagToAdd: ReviewTag): TagSet {
    const modifiedTag = { ...tagToAdd };
    modifiedTag.value = modifiedTag.value.replace(/\W+/g, '-').toLowerCase();
    const tagExists = this.has(modifiedTag);
    if (!tagExists) {
      this.tags.push(modifiedTag);
    } else {
      throw new Error(`Tag ${modifiedTag.value} already exists in set`);
    }
    return this;
  }

  getByValue(getValue: string): ReviewTag {
    const foundTag = this.tags.filter(({ value }) => value === getValue);
    if (foundTag.length === 0) {
      throw new Error(`Failed to find tag w/ value ${getValue}`);
    }
    return foundTag[0];
  }

  has(tagToCheck: ReviewTag, strict: boolean = false): boolean {
    return this.tags.some(({ magnitude, value }) => {
      const valueMatch = value === tagToCheck.value;
      if (strict === false) {
        return valueMatch;
      }
      return valueMatch && (magnitude === tagToCheck.magnitude);
    });
  }

  map(mapper: TagSetMapper): any[] {
    return this.tags.map(mapper);
  }

  size(): number {
    return this.tags.length;
  }

  static fromRawTags(rawTags: any[]): TagSet {
    const newSet = new TagSet();
    rawTags.forEach((rawTag) => {
      newSet.add(validateReviewTag(rawTag));
    });
    return newSet;
  }
}

