export declare enum ErrorCode {
    E_CREATING_USER = "E_CREATING_USER",
    E_INVALID_USER = "E_INVALID_USER",
    E_FINDING_USER = "E_FINDING_USER",
    E_INVALID_ROLE = "E_INVALID_ROLE",
    E_INVALID_CREDENTIALS = "E_INVALID_CREDENTIALS",
    E_NO_SUCH_USER = "E_NO_SUCH_USER",
    E_INVALID_POST = "E_INVALID_POST",
    E_CREATING_POST = "E_CREATING_POST",
    E_PUBLISHING_POST = "E_PUBLISHING_POST",
    E_DELETING_POST = "E_DELETING_POST",
    E_NO_MATCH_FOUND = "E_NO_MATCH_FOUND",
    E_MATCHING = "E_MATCHING",
    E_UNAUTH_RES_ACCESS = "E_UNAUTH_RES_ACCESS",
    E_MISSING_REQ_PARAM = "E_MISSING_REQ_PARAM",
    E_DOCS_POOL_ADD_FAIL = "E_DOCS_POOL_ADD_FAIL",
    E_UNKNOWN = "E_UNKNOWN"
}
declare type ErrorCodes = {
    [key in keyof typeof ErrorCode]: string;
};
export declare const errorCodes: ErrorCodes;
export declare const maybeTranslateError: (eCode: ErrorCode) => string | undefined;
export {};
