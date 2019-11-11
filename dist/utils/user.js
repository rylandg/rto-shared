"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const uuid_1 = require("uuid");
const photoGenLink = 'https://i.pravatar.cc/50';
function createFakeUser() {
    const name = faker_1.default.name.findName();
    return {
        uid: uuid_1.v4(),
        photoURL: photoGenLink,
        name,
        emailAddress: faker_1.default.internet.email(),
        displayName: name,
        goldStars: Math.floor(Math.random() * 100),
        demerits: 0,
        token: uuid_1.v4(),
        postIds: [],
        reviewIds: [],
        profileTags: [],
    };
}
exports.createFakeUser = createFakeUser;
//# sourceMappingURL=user.js.map