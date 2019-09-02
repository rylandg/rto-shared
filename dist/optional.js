"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
/**
 * Fix signature by marking all fields with undefined as optional
 */
exports.fixOptionals = (c) => c;
/**
 * Just an alias for T | undefined coded
 */
exports.optional = (c) => t.union([t.undefined, c]);
//# sourceMappingURL=optional.js.map