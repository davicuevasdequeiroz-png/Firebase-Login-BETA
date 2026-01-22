"use client";
import Login from './auth/Login';
import Logout from './auth/Logout';
import { auth } from "../firebaseConfig";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.backgroundImage}></div>
      <img
        src="logo-icrop.png"
        alt="Logo iCrop"
        style={styles.logo}
      />
      <div style={styles.glassCard}>
        <h1 style={styles.title}>Autenticação</h1>
        <p style={styles.subtitle}>Acesso Seguro Firebase</p>        
        <div style={styles.authContainer}>
           {user ? <Logout user={user} /> : <Login />}
        </div>
      </div>
      <div style={styles.footer}>
        <div style={styles.footerLinks}>
            {/*href="#" links*/}
            <a href="#" style={styles.link}>Termos de Uso</a>
            <span style={styles.separator}>|</span>
            <a href="#" style={styles.link}>iAra</a>
        </div>
        <p style={styles.subtitle}>© iCrop Tecnologia e Consultoria Agricola S.A</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundImage: "url('background.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  logo: {
    width: '140px',
    marginBottom: '40px',
    filter: 'brightness(0) invert(1) drop-shadow(0 4px 6px rgba(0,0,0,0.3))', 
    zIndex: 10
  },
  glassCard: {
    position: 'relative',
    zIndex: 10,
    width: '90%',
    maxWidth: '400px',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: 'rgba(227, 224, 224, 0.05)',
    backdropFilter: 'blur(9px) saturate(90%)',
    WebkitBackdropFilter: 'blur(40px) saturate(150%)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderTop: '1px solid rgba(255, 255, 255, 0.4)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    borderRadius: '30px',
  },
  title: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 5px 0',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '15px',
    fontWeight: '400',
    margin: '0 0 30px 0',
  },
  authContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  footer: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10,
  },
  footerLinks: {
    display: 'flex',
    gap: '15px',
    marginBottom: '10px',
  },
  link: {
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  separator: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '14px',
  }
};

export default App;