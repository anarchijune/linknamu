export default function ProfileAvatar() {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="JKLEE 캐릭터 프로필 사진"
      className="h-36 w-36 rounded-full bg-card shadow-md ring-4 ring-avatar-ring"
    >
      {/* 몸통 */}
      <path d="M30 200c0-38 30-62 70-62s70 24 70 62z" fill="#4c6ef5" />
      <path d="M85 140l15 18 15-18z" fill="#ffffff" />
      {/* 목 */}
      <rect x="88" y="120" width="24" height="24" rx="8" fill="#f1c9a5" />
      {/* 머리카락(뒤) */}
      <ellipse cx="100" cy="88" rx="47" ry="48" fill="#3b2a20" />
      {/* 얼굴 */}
      <ellipse cx="100" cy="94" rx="40" ry="43" fill="#ffd9b8" />
      {/* 앞머리 */}
      <path
        d="M58 84c4-30 24-40 46-38 22 2 38 14 38 38-10-14-24-20-40-20-16 0-32 6-44 20z"
        fill="#3b2a20"
      />
      {/* 안경 */}
      <g fill="none" stroke="#212529" strokeWidth="3">
        <circle cx="82" cy="96" r="12" />
        <circle cx="118" cy="96" r="12" />
        <path d="M94 96h12" />
      </g>
      {/* 눈 */}
      <circle cx="82" cy="96" r="3.5" fill="#212529" />
      <circle cx="118" cy="96" r="3.5" fill="#212529" />
      {/* 볼터치 */}
      <circle cx="70" cy="112" r="6" fill="#ffa8a8" opacity="0.6" />
      <circle cx="130" cy="112" r="6" fill="#ffa8a8" opacity="0.6" />
      {/* 입 */}
      <path
        d="M88 118q12 12 24 0"
        fill="none"
        stroke="#212529"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
