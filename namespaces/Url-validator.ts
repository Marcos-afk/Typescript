
namespace Validation{
    let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    export class UrlValidator{
        isValid(url : string) : boolean{
            return urlRegex.test(url);
        }
    }
}