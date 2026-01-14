"use client";
import Login from './auth/Login';
import Logout from './auth/Logout';
import {auth} from "../firebaseConfig";
import {useState, useEffect} from "react";

function App () {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  } , []);

    return (
      <>
        <div>
            <img 
              src="logo-icrop.png" 
              alt="Logo iCrop" 
              style={{ width: '141px', height: '63px' }} 
              />
    <div className="login-card">
              <h1>Autenticação com Firebase</h1>
              {user ? <Logout user={user} /> : <Login />}
        </div>
    </div>
      </>
  );
}
export default App;