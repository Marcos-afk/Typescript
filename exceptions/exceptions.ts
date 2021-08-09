

function WithString ( input : string) : string {
    if(input === undefined || input === ''){
        throw new StringError(` A string ${input} não é válida`);
    }

    return input;
}

class StringError implements Error{
    name: string = 'StringError';
    message: string;
    stack?: string | undefined;

    constructor( message : string){
        this.message = message;
        if(typeof console !== undefined){
                console.log(`Error : ${message} `);
        }
    }

    toString() : string{
        return `${this.name} || ${this.message}`;
    }

}

try {
    let input = WithString('');
} catch (error) {
    if(error instanceof StringError){
        console.log(`ocorreu um erro : ${error}`);
        
    }
    console.log(`ocorreu um erro geral : ${error}`);
}