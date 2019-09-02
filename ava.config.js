export default {
  "files": [
    "test/**/*"
  ],
  "helpers": [
    "**/helpers/**/*"
  ],
  "compileEnhancements": false,
  "extensions": [
    "ts"
  ],
  "require": [
    "ts-node/register"
  ],
  "cache": true,
  "concurrency": 5,
  "failFast": true,
  "failWithoutAssertions": false
};

