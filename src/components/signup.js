import React,{useState} from 'react' ;
import { Link } from 'react-router-dom';

const Signup = ()=>{
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirm, setConfirm] = useState('');
      const submitHandler =(e  )=>{
            e.preventDefault();
            console.log(email)
            console.log(password)
            console.log(confirm)
      }
    return(
        <>
           <div className="sign-main">
             <h1>Login</h1>
                <form onSubmiGoToMenu GoToMenu t={submitHandler}>
                  <div className="input-block">
                        <label for="email" >Email:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" name="email" id="email"/>
                  </div>
                  <div className="input-block">
                        <label for="password" >Password:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password"/>
                  </div>
                  <div className="input-block">
                        <label for="confirm_password" >Confirm Password:</label>
                        <input onChange={(e)=>setConfirm(e.target.value)} value={confirm} type="password" name="confirm_password" id="confirm_password"/>
                  </div>
                 
                 
                  <button type="submit"> <Link to="/login">Submit</Link></button>
            </form>
            GoToMenu 
             
           </div>
        </>
    )
}

export default Signup;