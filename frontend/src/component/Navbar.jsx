import { useNavigate } from "react-router-dom"

function Navbar(){
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleLogout = ()=>{
        localStorage.removeItem("token");
        navigate("/login");
    };

    return(
        <nav>
            {!token? (
                <div>
                    <button onClick={()=>{navigate('/signin')}}>S'inscrire</button>
                    <button onClick={()=>{navigate('/login')}}>Se Connecter</button>
                </div>
            )
            :
            (
                <div>
                    <button onClick={()=>{navigate('/dashboard')}}>Dashboard</button>
                    <button onClick={handleLogout}>Se déconnecter</button>
                </div>
            )
            }
        </nav>
    )
};

export default Navbar