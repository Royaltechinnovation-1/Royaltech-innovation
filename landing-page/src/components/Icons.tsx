const paths = {
  code: "M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14",
  cloud: "M7 18a4 4 0 01-.5-7.97A5.5 5.5 0 0117 8.5a4.5 4.5 0 01.5 9H7z",
  brain:
    "M9 4a3 3 0 00-3 3 3 3 0 00-2 2.8A3 3 0 005 13a3 3 0 002 4 3 3 0 005 1V5a2 2 0 00-3-1zm6 0a3 3 0 013 3 3 3 0 012 2.8A3 3 0 0119 13a3 3 0 01-2 4 3 3 0 01-5 1",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zm-3 9l2 2 4-4",
  device: "M7 3h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zm4 15h2",
  compass: "M12 3a9 9 0 100 18 9 9 0 000-18zm3.5 5.5l-2 5-5 2 2-5 5-2z",
  arrow: "M5 12h14m-6-6l6 6-6 6",
  mail: "M3 6h18v12H3V6zm0 0l9 7 9-7",
  pin: "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  );
}
