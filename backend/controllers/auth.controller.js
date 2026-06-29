import {prisma} from "../lib/prisma.js"
import {CréerUnCompte,login} from "../services/auth.services.js"

//Controller de créations de compte

export const CréerNouveauCompte = async(req,res)=>{
    try{
        const { email,password,name} = req.body;
        const existingUser = await prisma.User.findUnique({
            where: { email }
        });
        if(existingUser){
            return res.status(400).json({ message: 'Utilisateur déjà existant' });
        }

        const CréerNouvelUtilisateur = await prisma.User.create({
            data : { ... await CréerUnCompte(email,password,name)}
        }
        )

        res.status(201).json({
        User: {
            id: CréerNouvelUtilisateur.id,
            email: CréerNouvelUtilisateur.email,
            name: CréerNouvelUtilisateur.name
      },
    });

    }catch(error){
        console.error('SIGNUP ERROR =>', error);
        res.status(500).json({
            message: 'Erreur lors de l\'inscription',
            error: error.message});
    }
};

export const loginController = async(req,res)=>{
    try{
        const {email,password}=req.body
        const resultat = await login(email,password);

        if(!resultat){
            return res.status(400).json({message: "Email ou Mot de passe incorrect !"});
        }

        res.status(200).json({
            token: resultat.token,
            User: {
                id: resultat.utilisateurExistant.id,
                email: resultat.utilisateurExistant.email,
                name: resultat.utilisateurExistant.name,
            }
        });
    }catch(error){
                res.status(500).json({ message: 'Erreur lors de la connexion', error: error.message });
    }
};