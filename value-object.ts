export class ValueObject {

    private _value;

    constructor(value) {
        this._value = value;
    }

    valueOf() {
        return this._value;
    }
}

/**
 * Decorator
 * @param constructor
 * @returns {function(any): *}
 */
export function notEmpty(constructor): any {
    let newConstructor = function(value) {
        if (!value) throw new EmptyValueError();
        return new constructor(value);
    };
    newConstructor.prototype = constructor.prototype;

    return newConstructor;
}

/**
 * Decorator
 * @param constructor
 * @returns {function(any): *}
 */
export function typeString(constructor) {
    let newConstructor = function(value) {
        if (typeof value !== 'string') throw new BadTypeError(value, 'string');
        return new constructor(value);
    };
    newConstructor.prototype = constructor.prototype;

    return newConstructor;
}

export class EmptyValueError extends Error {
    constructor() {
        super('Value could not be empty');
    }
}

export class BadTypeError extends Error {
    constructor(value, expectedType) {
        super(`Bad type for value object. Expected "${expectedType}", ${typeof value} provided`);
    }
}