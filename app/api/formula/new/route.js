import Formula from "@/models/formula";
import { connectToDB } from "@/utils/database";

export const POST =async (req) => {
    const {formula,userId,tag}=await req.json();
    
    try{
        await connectToDB();
        const newFormula=new Formula({creator:userId,formula,tag});
        await newFormula.save();
        return new Response(JSON.stringify(newFormula),{status:201});
    }catch(error){
        console.error("Failed to create formula:", error);
        return new Response("Failed to create formula",{status:500});
    }

}    