import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-background px-4 py-12 text-foreground">
      <div className="relative w-full max-w-md">
        <div className="absolute right-0 top-[-2rem] sm:top-[-1rem]">
          <ThemeToggle />
        </div>
        <Profile
          name="JKLEE"
          bio="내 모든 링크를 한 곳에서 만나보세요."
        />
        <LinkList />
      </div>
    </main>
  );
}
