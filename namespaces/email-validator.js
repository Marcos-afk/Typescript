"use strict";
var Validation;
(function (Validation) {
    let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    class EmailValidator {
        isValid(email) {
            return emailRegex.test(email);
        }
    }
    Validation.EmailValidator = EmailValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=Email-validator.js.map