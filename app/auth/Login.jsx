
import {auth} from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
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

        } catch(error) {
            console.error("Erro ao fazer login com Google:", error);
        }
    };

    return (
        <div>
            <h2>Login iCrop</h2>
            <button onClick={loginGoogle}
                style={{
                    backgroundColor: '#4285F4',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
  }}
        >
                Login with Google
            </button>
            
        </div>
    );
}
export default Login;