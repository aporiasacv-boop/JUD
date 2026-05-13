"use client";

import { motion } from "framer-motion";

/**
 * Ilustraciones SVG temáticas (derecho) usadas en Hero y About.
 *
 * Si más adelante quieres reemplazar una de estas ilustraciones por una
 * fotografía real (recomendado para producción), basta con sustituir el
 * <svg> correspondiente por <Image src="/images/tu-foto.jpg" ... />.
 */

export function ScalesArtwork() {
  return (
    <svg
      viewBox="0 0 400 480"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustración de balanza de la justicia entre columnas clásicas"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0A3A57" stopOpacity="0.95" />
          <stop offset="1" stopColor="#062C43" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#E8D4A8" />
          <stop offset="1" stopColor="#B89868" />
        </linearGradient>
        <radialGradient id="haloGrad" cx="50%" cy="35%" r="55%">
          <stop stopColor="#D7C29A" stopOpacity="0.28" />
          <stop offset="1" stopColor="#D7C29A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="columnGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#D7C29A" stopOpacity="0.22" />
          <stop offset="1" stopColor="#D7C29A" stopOpacity="0.06" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="400" height="480" fill="url(#bgGrad)" />
      <rect width="400" height="480" fill="url(#haloGrad)" />

      {/* Líneas decorativas verticales */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line
          key={i}
          x1={30 + i * 50}
          y1={0}
          x2={30 + i * 50}
          y2={480}
          stroke="#D7C29A"
          strokeOpacity={0.05}
          strokeWidth={0.5}
        />
      ))}

      {/* Columnas clásicas izquierda y derecha */}
      <g opacity="0.55">
        <rect x="40" y="120" width="38" height="260" rx="3" fill="url(#columnGrad)" />
        <rect x="40" y="110" width="38" height="14" rx="2" fill="#D7C29A" fillOpacity="0.35" />
        <rect x="34" y="380" width="50" height="10" rx="2" fill="#D7C29A" fillOpacity="0.35" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={`l-${i}`}
            x1={48 + i * 4}
            y1={130}
            x2={48 + i * 4}
            y2={370}
            stroke="#D7C29A"
            strokeOpacity={0.18}
            strokeWidth={0.6}
          />
        ))}

        <rect x="322" y="120" width="38" height="260" rx="3" fill="url(#columnGrad)" />
        <rect x="322" y="110" width="38" height="14" rx="2" fill="#D7C29A" fillOpacity="0.35" />
        <rect x="316" y="380" width="50" height="10" rx="2" fill="#D7C29A" fillOpacity="0.35" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={`r-${i}`}
            x1={330 + i * 4}
            y1={130}
            x2={330 + i * 4}
            y2={370}
            stroke="#D7C29A"
            strokeOpacity={0.18}
            strokeWidth={0.6}
          />
        ))}
      </g>

      {/* Arco superior decorativo */}
      <path
        d="M 78 120 Q 200 70 322 120"
        stroke="#D7C29A"
        strokeOpacity="0.35"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Balanza de la justicia con animación sutil de oscilación */}
      <motion.g
        style={{ transformOrigin: "200px 170px" }}
        animate={{ rotate: [-1.2, 1.2, -1.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Poste vertical */}
        <rect x="197" y="170" width="6" height="180" rx="3" fill="url(#goldGrad)" />
        {/* Base */}
        <path
          d="M 165 360 L 235 360 L 225 380 L 175 380 Z"
          fill="url(#goldGrad)"
          stroke="#8E7449"
          strokeWidth="0.6"
        />
        <rect x="155" y="378" width="90" height="6" rx="2" fill="url(#goldGrad)" />

        {/* Brazo horizontal */}
        <rect x="105" y="167" width="190" height="5" rx="2" fill="url(#goldGrad)" />
        <circle cx="200" cy="170" r="7" fill="url(#goldGrad)" stroke="#8E7449" strokeWidth="0.6" />

        {/* Cuerdas a los platos */}
        <line x1="120" y1="172" x2="135" y2="220" stroke="#D7C29A" strokeOpacity="0.7" strokeWidth="1" />
        <line x1="120" y1="172" x2="105" y2="220" stroke="#D7C29A" strokeOpacity="0.7" strokeWidth="1" />
        <line x1="280" y1="172" x2="295" y2="220" stroke="#D7C29A" strokeOpacity="0.7" strokeWidth="1" />
        <line x1="280" y1="172" x2="265" y2="220" stroke="#D7C29A" strokeOpacity="0.7" strokeWidth="1" />

        {/* Plato izquierdo */}
        <ellipse
          cx="120"
          cy="225"
          rx="32"
          ry="9"
          fill="url(#goldGrad)"
          stroke="#8E7449"
          strokeWidth="0.6"
          filter="url(#softGlow)"
        />
        <ellipse cx="120" cy="223" rx="32" ry="5" fill="#062C43" opacity="0.35" />

        {/* Plato derecho */}
        <ellipse
          cx="280"
          cy="225"
          rx="32"
          ry="9"
          fill="url(#goldGrad)"
          stroke="#8E7449"
          strokeWidth="0.6"
          filter="url(#softGlow)"
        />
        <ellipse cx="280" cy="223" rx="32" ry="5" fill="#062C43" opacity="0.35" />
      </motion.g>

      {/* Estrellas decorativas */}
      <g fill="#D7C29A" opacity="0.7">
        <circle cx="90" cy="60" r="1.2" />
        <circle cx="340" cy="55" r="1.5" />
        <circle cx="60" cy="430" r="1" />
        <circle cx="350" cy="420" r="1.3" />
        <circle cx="200" cy="40" r="1.8" />
      </g>

      {/* Marco interior sutil */}
      <rect
        x="12"
        y="12"
        width="376"
        height="456"
        rx="14"
        fill="none"
        stroke="#D7C29A"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
    </svg>
  );
}

export function CourthouseArtwork() {
  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Ilustración de fachada institucional con columnas y libros de derecho"
    >
      <defs>
        <linearGradient id="bgGradA" x1="0" y1="0" x2="0" y2="500">
          <stop stopColor="#0A3A57" stopOpacity="0.9" />
          <stop offset="1" stopColor="#062C43" />
        </linearGradient>
        <linearGradient id="goldGradA" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#E8D4A8" />
          <stop offset="1" stopColor="#B89868" />
        </linearGradient>
        <linearGradient id="bookGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1B4A6B" />
          <stop offset="1" stopColor="#0A3A57" />
        </linearGradient>
        <radialGradient id="spot" cx="50%" cy="20%" r="60%">
          <stop stopColor="#D7C29A" stopOpacity="0.25" />
          <stop offset="1" stopColor="#D7C29A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="500" fill="url(#bgGradA)" />
      <rect width="400" height="500" fill="url(#spot)" />

      {/* Frontón triangular */}
      <path
        d="M 60 150 L 200 70 L 340 150 Z"
        fill="#0A3A57"
        stroke="#D7C29A"
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      <path
        d="M 90 150 L 200 90 L 310 150"
        fill="none"
        stroke="#D7C29A"
        strokeOpacity="0.2"
        strokeWidth="0.8"
      />
      <circle cx="200" cy="125" r="5" fill="url(#goldGradA)" opacity="0.7" />

      {/* Cornisa */}
      <rect x="55" y="148" width="290" height="10" fill="url(#goldGradA)" opacity="0.5" />
      <rect x="60" y="158" width="280" height="4" fill="#D7C29A" opacity="0.25" />

      {/* Columnas (4) */}
      {[0, 1, 2, 3].map((i) => {
        const x = 75 + i * 75;
        return (
          <g key={i}>
            <rect x={x} y="162" width="30" height="180" fill="#0A3A57" />
            <rect x={x - 4} y="160" width="38" height="6" rx="1" fill="url(#goldGradA)" opacity="0.55" />
            <rect x={x - 6} y="342" width="42" height="8" rx="1" fill="url(#goldGradA)" opacity="0.55" />
            {[0, 1, 2, 3, 4].map((j) => (
              <line
                key={j}
                x1={x + 4 + j * 5}
                y1="168"
                x2={x + 4 + j * 5}
                y2="338"
                stroke="#D7C29A"
                strokeOpacity="0.2"
                strokeWidth="0.6"
              />
            ))}
          </g>
        );
      })}

      {/* Escalones */}
      <rect x="50" y="350" width="300" height="6" rx="1" fill="url(#goldGradA)" opacity="0.45" />
      <rect x="40" y="358" width="320" height="6" rx="1" fill="url(#goldGradA)" opacity="0.35" />
      <rect x="30" y="366" width="340" height="6" rx="1" fill="url(#goldGradA)" opacity="0.25" />

      {/* Libros en la base */}
      <g transform="translate(60 395)">
        <rect width="280" height="60" rx="2" fill="#0A3A57" opacity="0" />
        {/* Pila de libros */}
        <g transform="translate(20 0)">
          <rect x="0" y="20" width="60" height="14" rx="2" fill="url(#bookGrad)" stroke="#D7C29A" strokeOpacity="0.4" />
          <rect x="4" y="6" width="55" height="14" rx="2" fill="#08344E" stroke="#D7C29A" strokeOpacity="0.4" />
          <rect x="2" y="34" width="62" height="14" rx="2" fill="#0E4368" stroke="#D7C29A" strokeOpacity="0.4" />
          <line x1="4" y1="13" x2="59" y2="13" stroke="#D7C29A" strokeOpacity="0.5" strokeWidth="0.6" />
          <line x1="2" y1="41" x2="64" y2="41" stroke="#D7C29A" strokeOpacity="0.5" strokeWidth="0.6" />
        </g>
        {/* Libro al medio (de pie) */}
        <g transform="translate(120 -8)">
          <rect x="0" y="0" width="14" height="56" rx="1.5" fill="#0E4368" stroke="#D7C29A" strokeOpacity="0.5" />
          <rect x="14" y="0" width="3" height="56" fill="url(#goldGradA)" opacity="0.55" />
          <line x1="3" y1="10" x2="11" y2="10" stroke="#D7C29A" strokeOpacity="0.6" strokeWidth="0.6" />
          <line x1="3" y1="46" x2="11" y2="46" stroke="#D7C29A" strokeOpacity="0.6" strokeWidth="0.6" />
        </g>
        <g transform="translate(140 -4)">
          <rect x="0" y="0" width="14" height="52" rx="1.5" fill="#08344E" stroke="#D7C29A" strokeOpacity="0.5" />
          <rect x="14" y="0" width="3" height="52" fill="url(#goldGradA)" opacity="0.45" />
        </g>
        {/* Pila derecha */}
        <g transform="translate(190 4)">
          <rect x="0" y="20" width="70" height="14" rx="2" fill="url(#bookGrad)" stroke="#D7C29A" strokeOpacity="0.4" />
          <rect x="4" y="6" width="62" height="14" rx="2" fill="#08344E" stroke="#D7C29A" strokeOpacity="0.4" />
          <line x1="4" y1="13" x2="66" y2="13" stroke="#D7C29A" strokeOpacity="0.5" strokeWidth="0.6" />
        </g>
      </g>

      {/* Pequeñas estrellas */}
      <g fill="#D7C29A" opacity="0.7">
        <circle cx="50" cy="50" r="1.2" />
        <circle cx="350" cy="40" r="1.5" />
        <circle cx="370" cy="100" r="1" />
        <circle cx="30" cy="120" r="1" />
      </g>

      {/* Marco interno */}
      <rect
        x="12"
        y="12"
        width="376"
        height="476"
        rx="14"
        fill="none"
        stroke="#D7C29A"
        strokeOpacity="0.12"
      />
    </svg>
  );
}
