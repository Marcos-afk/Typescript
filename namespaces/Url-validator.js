"use strict";
var Validation;
(function (Validation) {
    let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    class UrlValidator {
        isValid(url) {
            return urlRegex.test(url);
        }
    }
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=Url-validator.js.map