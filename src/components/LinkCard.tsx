type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block rounded-xl bg-card px-12 py-3 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    >
      {title}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-normal opacity-60">
        {count}회
      </span>
    </a>
  );
}
