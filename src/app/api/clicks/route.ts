import { NextResponse } from "next/server";
import { links } from "@/lib/links";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 { [id]: count } 형태로 반환
export async function GET() {
  try {
    const col = await getClicksCollection();
    const docs = await col.find({}).toArray();
    const counts: Record<string, number> = {};
    for (const link of links) counts[link.id] = 0;
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }
    return NextResponse.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "조회 실패" }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청" }, { status: 400 });
  }

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "알 수 없는 링크" }, { status: 404 });
  }

  try {
    const col = await getClicksCollection();
    const result = await col.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json({ error: "저장 실패" }, { status: 500 });
  }
}
