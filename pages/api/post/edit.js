import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  if (요청.method == 'POST') {
    // 요청/method = edit에서 수정하라고 보낸것들
    let session = await getServerSession(요청, 응답, authOptions)
    const db = (await connectDB).db('dream')
    let result_find = await db.collection('data').findOne({ _id: new ObjectId(요청.body._id) })

    if (result_find.author == session.user.email) {
      let 바꿀거 = {
        cham1: 요청.body.cham1, cham2: 요청.body.cham2
        , before6: 요청.body.before6, after6: 요청.body.after6
        , side: 요청.body.side, rune1: 요청.body.rune1
        , rune2: 요청.body.rune2, spell1: 요청.body.spell1
        , spell11: 요청.body.spell11, spell2: 요청.body.spell2
        , spel22: 요청.body.spell22, review: 요청.body.review
      }
      let result = await db.collection('data').updateOne(
        { _id: new ObjectId(요청.body._id) },
        { $set: 바꿀거 }
      );
      //{도큐먼트 찾아서}
      //{아래로 바꾼다.}

      응답.status(200).redirect('/lists')
    }else{
      return 응답.status(500).redirect('/lists')
    }
  }
}