
namespace Validation{
    let emailRegex: RegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
   
    export class EmailValidator{

        isValid(email : string) : boolean{
                return emailRegex.test(email);
        }
    }

}