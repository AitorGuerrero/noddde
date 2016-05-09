'use strict';

export class SerializableValue
{
    constructor (protected _serialized: string) {}

    get serialized () {
        return this._serialized;
    }

    isEqualTo(checkedValue: SerializableValue): boolean {
        return checkedValue.serialized === this.serialized;
    }
}

export default SerializableValue;