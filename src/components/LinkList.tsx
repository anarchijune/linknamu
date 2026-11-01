"use client";

import { useEffect, useState } from "react";
import { links } from "@/lib/links";
import LinkCard from "./LinkCard";

export default function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch((error) => console.error("클릭 수 로딩 실패:", error));
    return () => {
      cancelled = true;
    };
  }, []);

  const handleClick = (id: string) => {
    // 낙관적 업데이트 후 서버에 기록
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch((error) => console.error("클릭 기록 실패:", error));
  };

  return (
    <ul className="mt-8 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
