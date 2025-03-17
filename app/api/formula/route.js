import Formula from "@/models/formula";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const formula = await Formula.find({})

        return new Response(JSON.stringify(formula), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all Formula", { status: 500 })
    }
} 