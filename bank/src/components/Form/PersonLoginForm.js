import { React, useState } from 'react';
import './form.css';
function Form() {

        
        const [emailOrUsername, setEmailOrUsername] = useState('');
        const [password, setPassword] = useState('');

        
        const handleLogin = () => {
        };

  return (
    <div>
     <form style={{ marginTop: '30px', marginLeft: '30px' }}>
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
    </div>
  )
}

export default Form
 