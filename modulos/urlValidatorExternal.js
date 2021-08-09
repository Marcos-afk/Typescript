"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlValidatorExternal = void 0;
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
class urlValidatorExternal {
    isValid(url) {
        return urlRegex.test(url);
    }
}
exports.urlValidatorExternal = urlValidatorExternal;
//# sourceMappingURL=urlValidatorExternal.js.map