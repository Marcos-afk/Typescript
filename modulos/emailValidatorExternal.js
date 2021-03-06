"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorExternal = void 0;
let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
class EmailValidatorExternal {
    isValid(email) {
        return emailRegex.test(email);
    }
}
exports.EmailValidatorExternal = EmailValidatorExternal;
//# sourceMappingURL=emailValidatorExternal.js.map