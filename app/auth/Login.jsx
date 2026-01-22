"use client";
import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import {motion}  from 'framer-motion';

function Login() {
    const router = useRouter();

    const loginGoogle = async () => {
        const provider = new GoogleAuthProvider();
        
        provider.setCustomParameters({
            hd: "icrop.com.br"
        });

        try {
            const result = await signInWithPopup(auth, provider);
            const email = result.user.email;
            
            if (!email.endsWith("@icrop.com.br")) {
                auth.signOut(); 
                alert("Apenas e-mails corporativos são permitidos!");
                return;
            }

            router.push("https://icrop.com.br");

        } catch(error) {
            console.error("Erro ao fazer login com Google:", error);
        }
    };
    return (
        <div>
            <p style={{ 
            fontFamily: "Arial, sans-serif",
            fontSize: '30px', 
            fontWeight: '800', 
            margin: '0 0 14px 0',
            color: '#e2e2e2'
            }}>Login</p>
            <motion.button 
                    whileHover={{ scale: 1.03 }}
                    transition={{type: 'spring', stiffness: 250, damping: 28}}
            onClick={loginGoogle}
                style={{
                    backgroundColor: '#ffffff',
                    color: '#333333',
                    padding: '20px 60px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
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

                    }}>
                        Entrar com Google Workspace
                </span>
            </motion.button>
            
        </div>
    );
}
export default Login;