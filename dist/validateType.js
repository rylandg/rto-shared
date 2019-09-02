"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ThrowReporter_1 = require("io-ts/lib/ThrowReporter");
const pipeable_1 = require("fp-ts/lib/pipeable");
const Either_1 = require("fp-ts/lib/Either");
function validateType(typeRepr, validator) {
    const potentialType = validator.decode(typeRepr);
    try {
        ThrowReporter_1.ThrowReporter.report(potentialType);
    }
    catch (err) {
        console.log(err);
        const paths = pipeable_1.pipe(potentialType, Either_1.fold(errors => errors.map(error => error.context.map(({ key }) => key).join('.')), () => ['0error']));
        throw new Error(`Missing fields ${paths}`);
    }
    return typeRepr;
}
exports.validateType = validateType;
//# sourceMappingURL=validateType.js.map