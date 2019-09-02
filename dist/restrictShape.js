"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function restrictShape(source, empty) {
    const copy = Object.assign({}, empty);
    for (const prop in copy) {
        if (source[prop] && copy.hasOwnProperty(prop)) {
            copy[prop] = source[prop];
        }
    }
    return copy;
}
exports.restrictShape = restrictShape;
//# sourceMappingURL=restrictShape.js.map