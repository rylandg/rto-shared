"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["E_CREATING_USER"] = "E_CREATING_USER";
    ErrorCode["E_INVALID_USER"] = "E_INVALID_USER";
    ErrorCode["E_FINDING_USER"] = "E_FINDING_USER";
    ErrorCode["E_INVALID_ROLE"] = "E_INVALID_ROLE";
    ErrorCode["E_INVALID_CREDENTIALS"] = "E_INVALID_CREDENTIALS";
    ErrorCode["E_NO_SUCH_USER"] = "E_NO_SUCH_USER";
    ErrorCode["E_INVALID_POST"] = "E_INVALID_POST";
    ErrorCode["E_CREATING_POST"] = "E_CREATING_POST";
    ErrorCode["E_PUBLISHING_POST"] = "E_PUBLISHING_POST";
    ErrorCode["E_DELETING_POST"] = "E_DELETING_POST";
    ErrorCode["E_NO_MATCH_FOUND"] = "E_NO_MATCH_FOUND";
    ErrorCode["E_MATCHING"] = "E_MATCHING";
    ErrorCode["E_UNAUTH_RES_ACCESS"] = "E_UNAUTH_RES_ACCESS";
    ErrorCode["E_MISSING_REQ_PARAM"] = "E_MISSING_REQ_PARAM";
    ErrorCode["E_DOCS_POOL_ADD_FAIL"] = "E_DOCS_POOL_ADD_FAIL";
    ErrorCode["E_UNKNOWN"] = "E_UNKNOWN";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
exports.errorCodes = {
    E_CREATING_USER: 'User could not be registered',
    E_INVALID_USER: 'Provided user is not valid',
    E_FINDING_USER: 'Error encountered when locating user',
    E_INVALID_ROLE: 'User lacks valid roles',
    E_INVALID_CREDENTIALS: 'Provided credentials are invalid',
    E_NO_SUCH_USER: 'No matching user found',
    E_INVALID_POST: 'Provided post is not valid',
    E_CREATING_POST: 'Error encountered when creating post',
    E_PUBLISHING_POST: 'Error encountered when publishing post',
    E_DELETING_POST: 'Error encountered when deleting post',
    E_NO_MATCH_FOUND: 'Could not find matchable post',
    E_MATCHING: 'Error encountered when searching for match',
    E_UNAUTH_RES_ACCESS: "That isn't your resource to change",
    E_MISSING_REQ_PARAM: 'Request is missing a required parameter',
    E_DOCS_POOL_ADD_FAIL: 'Failed to add new docs to the pool',
    E_UNKNOWN: 'An unknown error occurred',
};
exports.maybeTranslateError = (eCode) => {
    return exports.errorCodes[eCode] || undefined;
};
//# sourceMappingURL=errors.js.map