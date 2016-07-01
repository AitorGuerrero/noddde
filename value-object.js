"use strict";
class ValueObject {
    constructor(value) {
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
}
exports.ValueObject = ValueObject;
/**
 * Decorator
 * @param constructor
 * @returns {function(any): *}
 */
function notEmpty(constructor) {
    let newConstructor = function (value) {
        if (!value)
            throw new EmptyValueError();
        return new constructor(value);
    };
    newConstructor.prototype = constructor.prototype;
    return newConstructor;
}
exports.notEmpty = notEmpty;
/**
 * Decorator
 * @param constructor
 * @returns {function(any): *}
 */
function typeString(constructor) {
    let newConstructor = function (value) {
        if (typeof value !== 'string')
            throw new BadTypeError(value, 'string');
        return new constructor(value);
    };
    newConstructor.prototype = constructor.prototype;
    return newConstructor;
}
exports.typeString = typeString;
class EmptyValueError extends Error {
    constructor() {
        super('Value could not be empty');
    }
}
exports.EmptyValueError = EmptyValueError;
class BadTypeError extends Error {
    constructor(value, expectedType) {
        super(`Bad type for value object. Expected "${expectedType}", ${typeof value} provided`);
    }
}
exports.BadTypeError = BadTypeError;
//# sourceMappingURL=value-object.js.map