import { prisma } from "../lib/prisma.js"
import {creerNouvelleTable,supprimerTable} from "../services/tableManagement.service.js"

export const creerTable = async(req,res) =>{
    try{
        const {mjId, nameTable, description}=req.body

        const nouvelleTable = await creerNouvelleTable(mjId, nameTable, description);

        res.status(201).json({
            message : "Table crée",
            Table : {
                id : nouvelleTable.id,
                mjId : nouvelleTable.mjId,
                nameTable : nouvelleTable.nameTable,
                description : nouvelleTable.description
            }
        })
    }catch(error){
        console.error('Création de table erreur =>', error);
        res.status(500).json({
            message: 'Erreur lors de la création de table',
            error: error.message
        })
    };
}

export const supprimerTableController = async(req,res)=>{
    try{
        const {id}=req.params;
        const suppressionTable = await supprimerTable(id);

        if(!suppressionTable){
            return res.status(404).json({message:"Table introuvable"})
        }

        res.status(200).json({message : "Table Supprimé"})
    }catch(error){
        res.status(500).json({ message: 'Erreur lors de la suppression', error: error.message });
    }
}