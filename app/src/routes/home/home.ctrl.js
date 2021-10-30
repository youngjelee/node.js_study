"use strict";

const output = {
    
    home  : (req,res) =>{
        res.render("home/index");
    },
    login  : (req,res) =>{
        res.render("home/login");
    }
    
    
};


const users= {
    id: ["wpdud1221", "test2" , "test3"],
    pwd : ["pwd1","pwd2","pwd3"]
};

const process = {
  
    login : (req, res) => {
        const id = req.body.id ,
        pwd = req.body.pwd;

        // console.log(id,pwd);

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