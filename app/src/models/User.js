"use strict";

const UserStorage = require('./UserStorage');
const users = require('./UserStorage');


class User{
    constructor(body){
        this.body = body;
    }

    async login(){
        //  UserStorage.getUsers("id","pwd");
        const {id , pwd} = await UserStorage.getUserInfo(this.body.id);
        
        if(id){
            if(id ===this.body.id && pwd ===this.body.pwd){
            console.log("아이디 비번 일치 , sucess: true 보냄");
                return {success : true};                
            }
            return {success : false , msg: "비밀번호가 틀렸다"}
        }
        return  {success : false , msg: "존재하지 않는 아이디입니다."}
    }

    async register() {
        try{
            const response = await UserStorage.save(this.body);
            return response;
        }catch(error) {
            const a = {success: false , msg: "동일한 아이디가 있습니다."};

            console.log(error);
            return a;
            // return {success: false , msg: error};
        }
    }
}
module.exports = User;
