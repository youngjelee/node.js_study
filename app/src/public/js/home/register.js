"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pwd  = document.querySelector("#pwd"),
    confirmPwd  = document.querySelector("#confirm-pwd"),
    registerBtn = document.querySelector("#button");

    console.log("hello");

    registerBtn.addEventListener('click',register);

    function register(){
        if(!id.value) return alert("아이디를 입력해주세요");
        if(pwd.value !== confirmPwd.value) {
            return alert("비밀번호를 확인해주세요");
        }
      const req = {
          id : id.value,
          name : name.value,
          pwd : pwd.value
      };
    console.log(req);

    fetch("/register",{
        method : "POST",
        headers :  {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => res.json())
      .then((res) => {
          console.log("res",res);
          if(res.success) {
              alert(res.msg);
              location.href="/login";
          }else{
              alert(res.msg);
            //   alert("가입실패");
          }
      })
      .catch((err) =>{
          console.error(new Error("로그인중 에러발생"));
      });
};