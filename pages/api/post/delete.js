import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(요청, 응답) {
    if (요청.method == 'DELETE') {  //요청받은 HTTP 메서드가 DELETE인지 확인
          //요청받은 내용? body가 뭔지 확인
        let session = await getServerSession(요청, 응답, authOptions)
        const db = (await connectDB).db('dream')    //connectDB함수로 MonggoDB와 연결 dream 데이터베이스 선택
        let result_find = await db.collection('data').findOne({ _id: new ObjectId(요청.body) })
        if (result_find.author == session.user.email) {
            let result = await db.collection('data').deleteOne({ _id: new ObjectId(요청.body) })
            //data 컬렉션에서 요청.body에 포함된 _id 값을 가진 문서 하나를 삭제합니다.
            return 응답.status(200).json('삭제완료')   //JSON 형식으로 응답합니다.
        } else {
            return 응답.status(500).json('작성자 불일치')
        }
    }
}
