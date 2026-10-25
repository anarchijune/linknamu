import ProfileAvatar from "./ProfileAvatar";

type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <ProfileAvatar />
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="max-w-xs text-balance text-sm opacity-70">{bio}</p>
    </section>
  );
}
