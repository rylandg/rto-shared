import { v4 as uuidv4 } from 'uuid';

import { ClientUser, User } from '../../src/models/User';

export function genNLengthNum(numDigits: number): string {
  const add = 1;
  let max = 12 - add;

  if (numDigits > max) {
    return genNLengthNum(max) + genNLengthNum(numDigits - max);
  }

  max = Math.pow(10, numDigits + add);
  const min = max / 10; 
  const num = Math.floor(Math.random() * (max - min + 1) ) + min;

  return ('' + num).substring(add); 
}

export function getBasicUser(): User {
  return {
    uid: uuidv4(),
    googleId: genNLengthNum(20),
    googleAccessToken: 'access_token',
    emailVerified: true,
    photoURL: 'photo.url',
    emailAddress: 'yourmail@gmail.com',
    displayName: 'Johnnie Rocket',
    name: 'John Doe',
    signedIn: true,
    disabled: false,
    goldStars: 0,
    demerits: 0,
    profileTags: [],
    postIds: [],
    reviewIds: [],
  };
}
