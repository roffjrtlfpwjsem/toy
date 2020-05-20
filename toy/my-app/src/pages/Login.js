import React from 'react';

const Login = () => {

	function LoginClick(e) {
	    e.preventDefault();
	    //console.log('LoginClick함수');

	    const login_tf = false; // 로그인 성공 true 실패 false	   
	    if(login_tf){
	    	// 로그인성공
	    	
	    }else{
	    	// 로그인 실패
	    	alert('로그인 실패');   	
	    }
  	}

    return(
        <div>
            <h2>로그인페이지</h2>

            <div className="LoginBox">
            	<p><input type="text" name="userid" id="userid"/></p>
            	<p><input type="password" name="userpw" id="userpw"/></p>
            	<button onClick={LoginClick} >로그인</button>
            </div>
        </div>
    )

}



export default Login;