"use Strict";

const e = require("express");
const fs = require("fs").promises;

class UserStorage {
    // static #users= {
    //     id: ["wpdud1221", "test2" , "test3"],
    //     pwd : ["pwd1","pwd2","pwd3"],
    //     names:["영이","일이","삼이"]
    // };

    static getUsers(...fields){
        // const users = this.#users;

        // const newUsers = fields.reduce((newUsers,field) => {
        //     if(users.hasOwnProperty(field)){
        //         newUsers[field] = users[field];
        //     }
        //     return newUsers;
        // } , {});
        // return newUsers; 
    }

    static getUserInfo(id){
    //    console.log(fs.readFile("./src/databases/user.json"));
           return fs
           .readFile("./src/databases/user.json")
            .then((data)=>{
                if(err)  throw err;
                // console.log(JSON.parse(data));
                const users = JSON.parse(data);
                const idx = users.id.indexOf(id);
                const usersKeys = Object.keys(users);  // =>[id,pwd,name]
                const userInfo = usersKeys.reduce((newUser,info) => {
        
                  newUser[info] =users[info][idx];
                  return newUser;
                }, {});
                console.log(userInfo);
                return userInfo;
            })
            .catch((err) =>console.error);
        
    }

    static save(userInfo){
        
    }
}

module.exports =  UserStorage;