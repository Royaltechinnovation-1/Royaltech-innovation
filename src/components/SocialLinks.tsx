"use client";

import { useId } from "react";

const profiles = [
  {
    href: "https://www.facebook.com/p/RoyalTech-Innovation-61596431871796/",
    label: "Facebook",
    brand: "facebook",
  },
  {
    href: "https://www.instagram.com/royaltechinnovat/",
    label: "Instagram",
    brand: "instagram",
  },
  {
    href: "https://www.youtube.com/channel/UCD7X5YC7rSwiNjRv-02OJyg",
    label: "YouTube",
    brand: "youtube",
  },
  {
    href: "https://www.behance.net/royaltechinnovation",
    label: "Behance",
    brand: "behance",
  },
] as const;

const facebookPath =
  "M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.414c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.765v2.316h3.59l-.467 3.696h-3.123V24h6.117C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z";

const instagramPath =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z";

const behancePath =
  "M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.98c.13 3.211 3.483 3.312 4.588 2.029h3.158zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zM6.466 14.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z";

export default function SocialLinks({ className }: { className: string }) {
  const gradientId = `ig-${useId().replace(/:/g, "")}`;

  return (
    <nav className={className} aria-label="Social">
      {profiles.map((item) => (
        <a
          key={item.brand}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={`is-${item.brand}`}
        >
          {item.brand === "youtube" ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                fill="#FF0000"
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
              />
              <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          ) : item.brand === "instagram" ? (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <defs>
                <radialGradient id={gradientId} cx="30%" cy="107%" r="150%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="5%" stopColor="#fdf497" />
                  <stop offset="45%" stopColor="#fd5949" />
                  <stop offset="60%" stopColor="#d6249f" />
                  <stop offset="90%" stopColor="#285AEB" />
                </radialGradient>
              </defs>
              <path fill={`url(#${gradientId})`} d={instagramPath} />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d={item.brand === "facebook" ? facebookPath : behancePath} />
            </svg>
          )}
        </a>
      ))}
    </nav>
  );
}
