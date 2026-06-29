import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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