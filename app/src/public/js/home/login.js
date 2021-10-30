"use strict";

const id = document.querySelector("#id"),
    pwd  = document.querySelector("#pwd"),
    loginBtn = document.querySelector("button");

    console.log(id);
    console.log("hello");

    loginBtn.addEventListener('click',login);

    function login(){
      const req = {
          id : id.value,
          pwd : pwd.value,
      };
    

    fetch("/login",{
        method : "POST",
        headers :  {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json())
      .then((res) => {
          if(res.success) {
              location.href="/";
          }else{
              alert(res.msg);
          }
      })
      .catch((err) =>{
          console.error(new Error("로그인중 에러발생"));
      });
};