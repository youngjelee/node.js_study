"use Strict";

class UserStorage {
    static #users= {
        id: ["wpdud1221", "test2" , "test3"],
        pwd : ["pwd1","pwd2","pwd3"],
        names:["영이","일이","삼이"]
    };

    static getUers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        } , {});
        return newUsers; 
    }
}

module.exports =  UserStorage;