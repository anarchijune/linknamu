import LinkCard from "./LinkCard";

type LinkItem = {
  title: string;
  url: string;
};

const links: LinkItem[] = [
  { title: "깃허브", url: "https://github.com/anarchijune" },
  {
    title: "유튜브",
    url: "https://www.youtube.com/channel/UCDn0O-i589GYCkJzH-xc_oA",
  },
];

export default function LinkList() {
  return (
    <ul className="mt-8 flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.url}>
          <LinkCard title={link.title} url={link.url} />
        </li>
      ))}
    </ul>
  );
}
