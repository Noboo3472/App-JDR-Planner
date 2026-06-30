import {prisma} from "../lib/prisma.js";

//fonction de création de table
export const creerNouvelleTable = async(mjId, nameTable, description)=>{
    const nouvelleTable = await prisma.Table.create({
        data : {
            mjId,
            nameTable,
            description
        }
    })

    return nouvelleTable;
};

//fonction de suppression de table
export const supprimerTable = async(id)=>{
    const idInt = parseInt(id);
    const idExistant = await prisma.Table.findUnique({where:{id:idInt}});

    if(!idExistant){
        return null
    }
    else{
        const suppression = await prisma.Table.delete({ where: { id:idInt } });
        return `${idExistant.nameTable} supprimé`
    };
}