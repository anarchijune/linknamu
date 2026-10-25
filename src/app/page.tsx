import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-[#a5d8ff] px-4 py-12 text-[#171717]">
      <div className="w-full max-w-md">
        <Profile
          name="JKLEE"
          bio="내 모든 링크를 한 곳에서 만나보세요."
        />
        <LinkList />
      </div>
    </main>
  );
}
