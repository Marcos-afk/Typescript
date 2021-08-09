import { validatorExternal } from "./validatorExternal";


let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
export class urlValidatorExternal implements validatorExternal{
        isValid(url : string) : boolean{
            return urlRegex.test(url);
        }
}
