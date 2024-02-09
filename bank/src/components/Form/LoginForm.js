import { React, useState } from 'react';
import Footer from '../Footer/Footer';
import './LoginForm.css';



function LoginForm() {

        
        const [emailOrUsername, setEmailOrUsername] = useState('');
        const [password, setPassword] = useState('');

        
        const handleLogin = () => {
        };

  return (
    <div className=' login_form' style={{backgroundColor:'white'}}>

      <h3 style={{color:'royalblue', marginLeft:'500px', marginTop:'30px'}}> Hey!, you are almost there</h3>
        
     <form style={{ marginTop: '30px', marginLeft: '520px', display:'grid', width:'200px' }}>
              <label>Email/Username:</label>
              <input
                type="text"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />

              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={handleLogin} style={{
                fontSize: '12px', marginTop: '10px', backgroundColor: 'aqua',
                color: "black"
              }}>Login</button>

            </form>
          <div style={{height:'500px', width:'100%'}}></div>
          
      <Footer />  
    </div>
  )
}

export default LoginForm
 