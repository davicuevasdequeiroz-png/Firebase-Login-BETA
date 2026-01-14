
import {auth} from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
    const loginGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Usuário logado:", result.user);
            
        } catch (error) {
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