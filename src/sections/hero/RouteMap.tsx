import { useId } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { mapData } from "../../data";
import type { MapCity } from "../../types/map";

const { viewBox, dotSpacing, dots, hub, cities } = mapData;

const mapVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const routeVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const markerVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

const pulseVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.4, duration: 0.6 } },
};

// Hub'dan shaharga yuqoriga egilgan yoy (kvadratik Bezier)
function getRoutePath(city: MapCity): string {
  const midX = (hub.x + city.x) / 2;
  const midY = (hub.y + city.y) / 2;
  const distance = Math.hypot(city.x - hub.x, city.y - hub.y);
  return `M${hub.x} ${hub.y}Q${midX} ${midY - distance * 0.28 - 6} ${city.x} ${city.y}`;
}

const routes = cities.map((city) => ({ ...city, path: getRoutePath(city) }));

type RouteMapProps = {
  className?: string;
};

// Joylashuvi `.hero-aside` (index.css) orqali Hero'dan beriladi
function RouteMap({ className }: RouteMapProps) {
  const prefersReducedMotion = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const fadeId = `${uid}-fade`;
  const maskId = `${uid}-mask`;

  return (
    <div className={`relative isolate ${className ?? ""}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 -z-10 bg-[radial-gradient(closest-side,rgb(237_50_55/0.28),rgb(143_47_120/0.14)_55%,transparent)] blur-2xl"
      />
      <motion.svg
        viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
        role="img"
        aria-label={`Delivery routes from ${hub.name} across the USA and Canada`}
        variants={mapVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="h-auto w-full"
      >
        <defs>
          <linearGradient id={fadeId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0.15" />
            <stop offset="0.35" stopColor="#fff" />
          </linearGradient>
          <mask id={maskId}>
            <rect
              width={viewBox.width}
              height={viewBox.height}
              fill={`url(#${fadeId})`}
            />
          </mask>
        </defs>

        <motion.path
          d={dots}
          variants={fadeVariants}
          mask={`url(#${maskId})`}
          fill="none"
          stroke="#fff"
          strokeOpacity={0.42}
          strokeWidth={3.4}
          strokeLinecap="round"
          strokeDasharray={`0 ${dotSpacing}`}
        />

        {routes.map((route) => (
          <motion.path
            key={route.id}
            d={route.path}
            variants={routeVariants}
            fill="none"
            stroke="#fff"
            strokeOpacity={0.9}
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        ))}

        {routes.map((route) => (
          <g key={route.id}>
            <motion.circle
              cx={route.x}
              cy={route.y}
              r={3.5}
              fill="#fff"
              variants={markerVariants}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
            <motion.text
              x={route.x + route.dx}
              y={route.y + route.dy}
              textAnchor={route.anchor}
              variants={fadeVariants}
              fill="#fff"
              stroke="#14162e"
              strokeOpacity={0.6}
              strokeWidth={3}
              paintOrder="stroke"
              fontSize={12}
              fontWeight={700}
            >
              {route.name}
            </motion.text>
          </g>
        ))}

        {!prefersReducedMotion && (
          <motion.g variants={pulseVariants}>
            {routes.map((route, index) => (
              <circle
                key={route.id}
                r={2.8}
                fill="#fff"
                className="drop-shadow-[0_0_5px_#fff]"
              >
                <animateMotion
                  path={route.path}
                  dur={`${3 + index * 0.4}s`}
                  begin={`${index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </motion.g>
        )}

        <motion.g variants={pulseVariants}>
          {!prefersReducedMotion && (
            <motion.circle
              cx={hub.x}
              cy={hub.y}
              fill="none"
              stroke="#ed3237"
              strokeWidth={2}
              initial={{ r: 6, opacity: 0.7 }}
              animate={{ r: 18, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <circle
            cx={hub.x}
            cy={hub.y}
            r={5}
            fill="#ed3237"
            stroke="#fff"
            strokeWidth={2}
          />
        </motion.g>
      </motion.svg>

      <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-white [text-shadow:0_1px_6px_rgb(0_0_0/0.8)]">
        <span className="size-2 rounded-full bg-brand-red ring-2 ring-white" />
        {hub.name}
      </p>
    </div>
  );
}

export default RouteMap;
