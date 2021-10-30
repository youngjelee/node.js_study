"use strict";

const UserStorage = require("../../models/UserStorage");
const output = {
    
    home  : (req,res) =>{
        res.render("home/index");
    },
    login  : (req,res) =>{
        res.render("home/login");
    }
    
    
};

const process = {
  
    login : (req, res) => {
        const id = req.body.id ,
        pwd = req.body.pwd;

        // const userStorage = new UserStorage(); 

       const users =  UserStorage.getUers("id","pwd");

       if(users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if(users.pwd[idx] === pwd){
            console.log("로그인성공");
            return res.json({
                success: true,
            });
        }
    }


    return res.json ({
        success : false,
        msg : "로그인에 실패하셨습니다",
        
    });

    },
};

module.exports = {
    output,
    process    

};