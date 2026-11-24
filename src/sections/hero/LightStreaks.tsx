import type { CSSProperties } from "react";

type Streak = {
  top: string;
  width: string;
  color: string;
  duration: number; // soniya
  delay: number; // manfiy: animatsiya o'rtasidan boshlanadi
  reverse?: boolean; // qarama-qarshi yo'nalish
  desktopOnly?: boolean; // mobilda yashirin
};

const streaks: Streak[] = [
  { top: "58%", width: "14rem", color: "#ffd9a0", duration: 7, delay: -2 },
  { top: "66%", width: "22rem", color: "#ff9a3c", duration: 9, delay: -6, reverse: true },
  { top: "73%", width: "16rem", color: "#ed3237", duration: 6, delay: -1, reverse: true },
  { top: "80%", width: "26rem", color: "#ffffff", duration: 11, delay: -8 },
  { top: "86%", width: "12rem", color: "#ffb866", duration: 8, delay: -4, desktopOnly: true },
  { top: "62%", width: "18rem", color: "#cfe3ff", duration: 10, delay: -9, desktopOnly: true },
];

// Tungi yo'l chiroqlari kabi o'tib turadigan nurlar. Stillari index.css dagi `.light-streak` da.
function LightStreaks() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {streaks.map((streak) => (
        <span
          key={streak.top}
          className="light-streak"
          data-desktop-only={streak.desktopOnly || undefined}
          style={
            {
              top: streak.top,
              width: streak.width,
              "--streak-color": streak.color,
              animationDuration: `${streak.duration}s`,
              animationDelay: `${streak.delay}s`,
              animationDirection: streak.reverse ? "reverse" : "normal",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default LightStreaks;
