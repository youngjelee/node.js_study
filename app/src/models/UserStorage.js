"use Strict";

const e = require("express");
const fs = require("fs").promises;

class UserStorage {
   
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
           return fs
           .readFile("./src/databases/user.json")
            .then((data)=>{

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
            .catch(console.error);
        
    }

 

    static save(userInfo){
        
    }
}

module.exports =  UserStorage;