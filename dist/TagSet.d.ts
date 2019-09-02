import { ReviewTag } from './models/ReviewTag';
declare type TagSetMapper = (item: ReviewTag, index?: number) => any;
export declare class TagSet {
    tags: ReviewTag[];
    constructor(initialTags?: ReviewTag | ReviewTag[]);
    add(tagToAdd: ReviewTag): TagSet;
    getByValue(getValue: string): ReviewTag;
    has(tagToCheck: ReviewTag, strict?: boolean): boolean;
    map(mapper: TagSetMapper): any[];
    size(): number;
    static fromRawTags(rawTags: any[]): TagSet;
}
export {};
