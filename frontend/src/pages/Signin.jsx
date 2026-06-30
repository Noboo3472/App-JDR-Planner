import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Singin(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [erreur,setErreur]=useState("")
    const navigate = useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response = await fetch('/api/auth/signin',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body : JSON.stringify({email,password,name})
            });

            const data = response.json()

        if(!response){
            setErreur(data.message||"Erreur de connexion");
            return
        }

        navigate('/login');

        }catch(error){
            setErreur("Erreur Résaux")
            console.error(error)
        }
    }

    return(
        <div>
            <h1>Créer un compte</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email </label>
                <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="password">Mot de Passe </label>
                <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} required />
            </div>
            <input type="submit" name="creerCompte" id="creerComte" value={"Créer un Compte"}/>
        </form>
        </div>
    )
}

export default Singin