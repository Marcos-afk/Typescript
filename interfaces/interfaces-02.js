"use strict";
/*Interfaces*/
/*Fuções*/
function Login(user) {
    if (user.isAdmin) {
        if (user.password.toLowerCase() === "admin" && user.name.toLowerCase() === "admin") {
            console.log(` Bem vindo ${user.name}`);
        }
        else {
            console.log(' Senha e/ou nome inválido(s)');
        }
    }
    else {
        if (user.password.toLowerCase() === "12345" && user.name.toLowerCase() === "marcos andré") {
            console.log(` Bem vindo ${user.name}`);
        }
        else {
            console.log(' Senha e/ou nome inválido(s)');
        }
    }
}
/*Usando interfaces*/
let user = {
    name: "Marcos André",
    password: "12345",
    age: 20
};
let admin = {
    name: "Admin",
    password: "Admin",
    age: 20,
    isAdmin: true
};
let user2 = {
    name: "Marcos Lima",
    password: "12345",
    age: 20
};
let admin2 = {
    name: "admn",
    password: "Admin",
    age: 20,
    isAdmin: false
};
/*Chamada das funções */
Login(user);
Login(user2);
Login(admin);
Login(admin2);
//# sourceMappingURL=interfaces-02.js.map