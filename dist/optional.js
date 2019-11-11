"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("io-ts"));
/**
 * Fix signature by marking all fields with undefined as optional
 */
exports.fixOptionals = (c) => c;
/**
 * Just an alias for T | undefined coded
 */
exports.optional = (c) => t.union([t.undefined, c]);
//# sourceMappingURL=optional.js.map