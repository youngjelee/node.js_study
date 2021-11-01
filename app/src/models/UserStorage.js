"use Strict";

const e = require("express");
const fs = require("fs").promises;

class UserStorage {
   
    static getUsers(isAll,...fields){

        return fs
           .readFile("./src/databases/user.json")
            .then((data)=>{
                const users = JSON.parse(data);
                if(isAll) return users;

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

        const newUsers = fields.reduce((newUsers,field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        } , {});
        return newUsers; 
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

 

    static async save(userInfo){

        const users = await this.getUsers(true);
        // console.log(users);
        if(users.id.includes(userInfo.id)) {
            console.log("에러");
            // return {success: true , msg:"중복된 아이디가있습니다."};
            throw Error("아이디가 중복됩니다");
        }
        users.id.push(userInfo.id);
        users.pwd.push(userInfo.pwd);
        users.names.push(userInfo.name);
        fs.writeFile("./src/databases/user.json",JSON.stringify(users));
        return {success: true, msg:"가입이 완료되었습니다."};
    }
}

module.exports =  UserStorage;