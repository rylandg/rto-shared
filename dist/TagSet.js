"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReviewTag_1 = require("./models/ReviewTag");
class TagSet {
    constructor(initialTags = []) {
        this.tags = [];
        let arrTags = [].concat(initialTags);
        arrTags.forEach((initialTag) => {
            this.add(initialTag);
        });
    }
    add(tagToAdd) {
        const modifiedTag = Object.assign({}, tagToAdd);
        modifiedTag.value = modifiedTag.value.replace(/\W+/g, '-').toLowerCase();
        const tagExists = this.has(modifiedTag);
        if (!tagExists) {
            this.tags.push(modifiedTag);
        }
        else {
            throw new Error(`Tag ${modifiedTag.value} already exists in set`);
        }
        return this;
    }
    getByValue(getValue) {
        const foundTag = this.tags.filter(({ value }) => value === getValue);
        if (foundTag.length === 0) {
            throw new Error(`Failed to find tag w/ value ${getValue}`);
        }
        return foundTag[0];
    }
    has(tagToCheck, strict = false) {
        return this.tags.some(({ magnitude, value }) => {
            const valueMatch = value === tagToCheck.value;
            if (strict === false) {
                return valueMatch;
            }
            return valueMatch && (magnitude === tagToCheck.magnitude);
        });
    }
    map(mapper) {
        return this.tags.map(mapper);
    }
    size() {
        return this.tags.length;
    }
    static fromRawTags(rawTags) {
        const newSet = new TagSet();
        rawTags.forEach((rawTag) => {
            newSet.add(ReviewTag_1.validateReviewTag(rawTag));
        });
        return newSet;
    }
}
exports.TagSet = TagSet;
//# sourceMappingURL=TagSet.js.map