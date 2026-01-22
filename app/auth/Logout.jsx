import {auth} from "../../firebaseConfig";
import { signOut } from "firebase/auth";

function Logout({user} ) {
    return (
        <>
            <h2 style={{ color: '#ffffff' }}>Olá, {user?.displayName}</h2>
            
            <button onClick={() => signOut(auth)}
                style={{
                    backgroundColor: '#ababab',
                    color: 'black',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: '.5s',
                    fontWeight: '500',
                    fontSize: '16px'
                }}
            >Sair</button>
        </>
    );
}
export default Logout;