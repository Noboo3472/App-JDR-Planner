import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [erreur,setErreur]=useState("");
    const navigate = useNavigate()

    const handleSubmit= async(e)=>{
        e.preventDefault();

    try{
        const response = await fetch('/api/auth/login',{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if(!response){
            setErreur(data.message||"Erreur de connexion");
            return
        }

        localStorage.setItem("token",data.token);

        navigate('/dashboard');

    }catch(error){
        setErreur("Erreur Résaux")
        console.error(error)
    }
}

    return(
        <div>
            <h1>Se Connecter</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlForor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                {erreur && <p style={{ color: "red" }}>{erreur}</p>}
                <div>
                    <input type="submit" name="connexion" id="connexion" value={"Se connecter"}/>
                </div>
            </form>
            <div>
                <input type="button" name="créerCompte" id="créerCompte" value={"Créer un compte"} onClick={()=>navigate('/signin')}/>
            </div>
        </div>
    )
}

export default Login