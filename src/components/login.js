import React,{useState} from 'react' ;
import { Link } from 'react-router-dom';

const Login = ()=>{
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const submitHandler =(e)=>{
            e.preventDefault();
            console.log(email)
            console.log(password)
      }
    return(
        <>
           <div className="sign-main">
             <h1>Login</h1>
                <form onSubmit={submitHandler}>
                  <div className="input-block">
                        <label for="email" >Email:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" id="email"/>
                  </div>
                  <div className="input-block">
                        <label for="password" >Password:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password"/>
                  </div>
                    
                  <button> <Link to="/go-to-menu">Login</Link></button>
            </form>
            <button >Create new Account</button>
             
           </div>
        </>
    )
}

export default Login;