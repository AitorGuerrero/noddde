'use strict';
class SerializableValue {
    constructor(_serialized) {
        this._serialized = _serialized;
    }
    get serialized() {
        return this._serialized;
    }
    isEqualTo(checkedValue) {
        return checkedValue.serialized === this.serialized;
    }
}
exports.SerializableValue = SerializableValue;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SerializableValue;
//# sourceMappingURL=serializable-value-object.js.map