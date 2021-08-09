/*Interfaces*/

interface User {
    name : string,
    password: string,
    age : number
}

interface Admin extends User{
    isAdmin : boolean
}


/*Fuções*/

function Login ( user: { name : string , password: string, age:number , isAdmin?:boolean}) : void {
  if(user.isAdmin){
        if(user.password.toLowerCase() === "admin" && user.name.toLowerCase() === "admin"){
            console.log(` Bem vindo ${user.name}`);
        }else{
            console.log(' Senha e/ou nome inválido(s)');
        }
  }else{
      if(user.password.toLowerCase() === "12345" && user.name.toLowerCase() === "marcos andré"){
        console.log(` Bem vindo ${user.name}`);
      }else{
        console.log(' Senha e/ou nome inválido(s)');
      }
  }
}

/*Usando interfaces*/

let user : User = {
    name : "Marcos André",
    password: "12345",
    age: 20
}

let admin : Admin = {
    name: "Admin",
    password: "Admin",
    age: 20,
    isAdmin : true
}

let user2 : User = {
    name : "Marcos Lima",
    password: "12345",
    age: 20
}

let admin2 : Admin = {
    name: "admn",
    password: "Admin",
    age: 20,
    isAdmin : false
}

/*Chamada das funções */

Login(user);
Login(user2);
Login(admin);
Login(admin2);
