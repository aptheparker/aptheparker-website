export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" strokeWidth="4" fill="none" />
      <text x="50" y="65" fontFamily="Arial, sans-serif" fontSize="48" fontWeight="bold" fill="url(#logoGradient)" textAnchor="middle">AP</text>
    </svg>
  );
}
