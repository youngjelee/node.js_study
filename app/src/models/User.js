"use strict";

const UserStorage = require('./UserStorage');
const users = require('./UserStorage');


class User{
    constructor(body){
        this.body = body;
    }

    login(){
        //  UserStorage.getUsers("id","pwd");
        UserStorage.getUserInfo(this.body.id);
        
        // if(id){
        //     if(id ===this.body.id && pwd ===this.body.pwd){
        //         return {success : true};                
        //     }
        //     return {success : false , msg: "비밀번호가 틀렸다"}
        // }
        // return  {success : false , msg: "존재하지 않는 아이디입니다."}
    }

    register() {
        UserStorage.save(this.body);
    }
}
module.exports = User;
