import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    let session = await getServerSession(요청,응답,authOptions)
    if(session){
        요청.body.author=session.user.email
        요청.body.name=session.user.name
    }
    // author란 도큐먼트로 email이 작성되서 같이 저장된다.
    
    //요청.body는 내가 입력한 값이 도규먼트랑 같을 요청받는다.
    if (요청.method == 'POST') {
        if (Object.values(요청.body).some(value => value === '')) {
            //요청.body의 어떤 필드라도 비어있으면 실행될 코드를 작성합니다.
            console.log(" write에 하나 이상의 필드가 비어있습니다.");
            return 응답.redirect('/')
        }
        
        const db = (await connectDB).db('dream')
        let result = await db.collection('data').insertOne(요청.body)
        //result = data 컬렉션에 하나의 도큐먼트 요청.body에서 받아서 넣는다.
        return 응답.status(200).redirect('/')
    }
}