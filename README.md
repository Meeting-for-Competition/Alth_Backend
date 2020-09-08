## Alth

#Restful Api

* POST /signup ( 유저 회원가입 )

> Parmas

    id : {type: String, unique: true}, // 아이디
    
    passwd : {type : String}, // 비밀번호

    name : {type : String}, // 이름

> Response

    HTTP 200 : { message: "success!"}

    HTTP 409 : { message : "already exist"}

    HTTP 400 : { message : e.message } // 나올 일 없음

* POST /signin ( 유저 로그인 )

> Params

    id : { type : String } // 유저 아이디

    passwd : { type : String } // 유저 비밀번호

> Response

    HTTP 200 : { user :
    
      id : {type: String, unique: true}, // 아이디
      
      passwd : {type : String},
      
      token : {type: String}, // 토큰
     } 

    HTTP 404 : { message : "User Not Found!"}

* GET /auto/:token( 자동로그인 )

> Params

    token : { type : String } // 유저 토큰

> Response

    HTTP 200 : { user :
    
      id : {type: String, unique: true}, // 아이디
      
      passwd : {type : String},
      
      token : {type: String}, // 토큰
     } 

    HTTP 404 : { message : "User Not Found!"}
    


* POST /addQuestion ( 문제 추기 )

> Params

    title: {type: String} // 문제 제목

    content: {type : String} // 문제 내용

    answer : {type: String} // 문제 정답 

> Response

    HTTP 200 :  { message : "Success"}


* POST /readQuestion ( 문제 불러오기 )

> Params


> Response

    HTTP 200 :  {
        title: {type: String} // 문제 제목

        content: {type : String} // 문제 내용

        answer : {type: String} // 문제 정답 (추후 solve 추가 예정)
    }

    HTTP 404 : { message : "User Not Found!"}



