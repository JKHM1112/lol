import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    if (요청.method == 'POST') {
        let session = await getServerSession(요청, 응답, authOptions)
        const db = (await connectDB).db("dream")
        let result_find = await db.collection('data').findOne({ _id: new ObjectId(요청.body._id) })
    } if (result_find.author != session.user.email) {
        return 응답.status(200).redirct('/list')
    }
}