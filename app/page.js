import { connectDB } from "@/util/database"

export default async function Home() {
  const db = (await connectDB).db("dream")
  let result = await db.collection('data').find().toArray()
  return (
    <div>
      <p>어서오삼</p>
    </div>
  )
}

