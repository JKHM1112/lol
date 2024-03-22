import Link from "next/link";
import './globals.css'
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  const db = (await connectDB).db('dream')
  let result = null
  if (session) {
    result = await db.collection('user_cred').findOne({ email: session.user.email })
  }
  //result= user_cred 컬렉션에 일치 'user_cred'도큐먼트 하나만 반환하며 그중 email에서 : 와 같은 걸 찾으란것?
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/" className="logo"> 대충 사이트 이름 </Link>
          <Link href="/lists"> 전체list</Link>
          {
            result ? <Link href={"/list/" + result._id}>내list</Link> : null
          }
          <Link href="/write" > 입력하기 </Link>
          {
            session ? <></> : <Link href="/register"> 회원가입 </Link>
          }

          {
            session ? <span> {session.user.name} <LogoutBtn /> </span> : <LoginBtn />
          }
        </div>
        {children}
      </body>
    </html>
  )
}
