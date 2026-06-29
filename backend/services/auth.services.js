import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import {prisma} from "../lib/prisma.js"

//fonction de création de comptes

export const CréerUnCompte = async(email,password,name)=>{
    const hashedPassword = await bcrypt.hash(password, 10);
    const NouveauCompte = {
        email,
        password:hashedPassword,
        name,
        createdAt : new Date()
    }
    return NouveauCompte
}

//Fonction de login

export const login = async(email,password)=>{
        const utilisateurExistant = await prisma.User.findUnique({where:{email}});
        if(!utilisateurExistant){
            return null
        }
        else{
            const correspondant = await bcrypt.compare(password,utilisateurExistant.password)

            if(!correspondant){
                return null
            }
            else{
                const token = jwt.sign({ id: utilisateurExistant.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
                return {token, utilisateurExistant}
            }
        }
};