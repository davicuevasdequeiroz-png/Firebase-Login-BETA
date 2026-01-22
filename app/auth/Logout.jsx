'use client';
import {auth} from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import { motion } from "framer-motion";

function Logout({user} ) {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%' 
            }}>
            <h2 style={{margin: '0 0 10px 0', color: '#ffffff' }}>Olá, {user?.displayName}</h2>
            
            <motion.button
            
                    whileHover={{ scale: 1.03 }}
                    transition={{type:'spring' , stiffness: 250, damping: 30}}
            onClick={() => signOut(auth)}
                style={{
                    backgroundColor: '#ffffff',
                    color: '#333333',
                    padding: '10px 30px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: '.5s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <img
                        src="googleicon.png"
                        alt="Google Icon"
                        style={{width:'28px', height:'28px'}}
                />
                <span style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    letterSpacing: '0.3px'

                    }}>Sair</span>
            </motion.button>
        </div>
    );
}
export default Logout;