// Modern official cover photo for all Mobiley user accounts
// Features high-tech aesthetics, futuristic gradients, glowing 3D smartphone outline,
// and the iconic "Mobiley" visual brand identity.

export const MOBILEY_COVER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 480" width="1200" height="480">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="35%" stop-color="#042f2e"/>
      <stop offset="70%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#021f18"/>
    </linearGradient>

    <!-- Glowing Accent Gradient -->
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="50%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#34d399"/>
    </linearGradient>

    <!-- Text Shimmer Gradient -->
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#f0fdf4"/>
      <stop offset="100%" stop-color="#a7f3d0"/>
    </linearGradient>

    <!-- Glassmorphic Card Gradient -->
    <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#10b981" stop-opacity="0.05"/>
    </linearGradient>

    <!-- Tech Grid Pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" stroke-width="0.75" stroke-opacity="0.15"/>
      <circle cx="40" cy="0" r="1.5" fill="#34d399" fill-opacity="0.3"/>
    </pattern>

    <!-- Glow Filter -->
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Base Canvas -->
  <rect width="1200" height="480" fill="url(#bgGrad)"/>

  <!-- Cybernetic Grid Overlay -->
  <rect width="1200" height="480" fill="url(#grid)"/>

  <!-- Ambient Light Orbs -->
  <circle cx="150" cy="120" r="220" fill="#10b981" fill-opacity="0.18" filter="url(#neonGlow)"/>
  <circle cx="1050" cy="380" r="260" fill="#06b6d4" fill-opacity="0.15" filter="url(#neonGlow)"/>
  <circle cx="600" cy="200" r="180" fill="#059669" fill-opacity="0.2" filter="url(#neonGlow)"/>

  <!-- Left Side: Tech Circuit Elements & Phone Silhouette -->
  <g transform="translate(60, 40)" opacity="0.9">
    <!-- Perspective Phone Frame -->
    <rect x="50" y="40" width="130" height="260" rx="28" fill="none" stroke="url(#glowGrad)" stroke-width="3" filter="url(#subtleGlow)"/>
    <!-- Phone Screen Inner Glow -->
    <rect x="58" y="52" width="114" height="236" rx="20" fill="url(#glassGrad)" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.25"/>
    <!-- Dynamic Island Pill -->
    <rect x="95" y="60" width="40" height="8" rx="4" fill="#000000" stroke="#10b981" stroke-width="0.8"/>
    <!-- Screen Wave Graphic -->
    <path d="M 68 180 Q 95 140 115 170 T 162 160" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 68 200 Q 95 160 115 190 T 162 180" fill="none" stroke="#06b6d4" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/>

    <!-- Signal & Star Nodes -->
    <circle cx="140" cy="90" r="3" fill="#34d399" filter="url(#subtleGlow)"/>
    <circle cx="80" cy="115" r="2" fill="#06b6d4"/>
    <circle cx="148" cy="230" r="2.5" fill="#10b981"/>

    <!-- Orbital rings around phone -->
    <ellipse cx="115" cy="170" rx="90" ry="150" fill="none" stroke="#10b981" stroke-width="1" stroke-dasharray="6 6" opacity="0.35" transform="rotate(-15 115 170)"/>
  </g>

  <!-- Center-Right: Iconic Wordmark "Mobiley" & Sudanese Marketplace Branding -->
  <g transform="translate(320, 110)">
    <!-- Tech Badge Top -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="280" height="32" rx="16" fill="#064e3b" fill-opacity="0.75" stroke="#10b981" stroke-width="1.2" filter="url(#subtleGlow)"/>
      <circle cx="18" cy="16" r="4" fill="#34d399"/>
      <text x="32" y="21" fill="#a7f3d0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">SUDAN OFFICIAL MARKETPLACE</text>
    </g>

    <!-- Main Wordmark: Mobiley -->
    <text x="0" y="130" fill="url(#textGrad)" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="94" font-weight="900" letter-spacing="2" filter="url(#subtleGlow)">
      Mobiley
    </text>

    <!-- Accent Underline with Neon Capsule -->
    <rect x="0" y="146" width="370" height="6" rx="3" fill="url(#glowGrad)" filter="url(#subtleGlow)"/>
    <circle cx="370" cy="149" r="6" fill="#34d399" filter="url(#neonGlow)"/>

    <!-- Arabic & English Slogans -->
    <text x="0" y="195" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Cairo', sans-serif" font-size="22" font-weight="700" letter-spacing="0.5">
      سوق الهواتف الذكية الأول في السودان
    </text>
    <text x="0" y="225" fill="#6ee7b7" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="500" letter-spacing="2" opacity="0.9">
      VERIFIED PHONES • INSTANT CHAT • SUDAN CITIES
    </text>
  </g>

  <!-- Right Side Decorative Tech Data Cluster -->
  <g transform="translate(940, 110)" opacity="0.85">
    <rect x="0" y="0" width="180" height="210" rx="20" fill="url(#glassGrad)" stroke="#10b981" stroke-width="1" stroke-opacity="0.35"/>
    <!-- Simulated Audio / Data Waves -->
    <g transform="translate(25, 35)">
      <line x1="0" y1="30" x2="0" y2="10" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
      <line x1="14" y1="35" x2="14" y2="5" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
      <line x1="28" y1="40" x2="28" y2="0" stroke="#06b6d4" stroke-width="3" stroke-linecap="round"/>
      <line x1="42" y1="32" x2="42" y2="8" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
      <line x1="56" y1="38" x2="56" y2="2" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
      <line x1="70" y1="28" x2="70" y2="12" stroke="#06b6d4" stroke-width="3" stroke-linecap="round"/>
      <line x1="84" y1="34" x2="84" y2="6" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
      <line x1="98" y1="30" x2="98" y2="10" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>
      <line x1="112" y1="36" x2="112" y2="4" stroke="#06b6d4" stroke-width="3" stroke-linecap="round"/>
      <line x1="126" y1="25" x2="126" y2="15" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>
    </g>
    <!-- Status Text -->
    <text x="25" y="125" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="700">100% SECURE</text>
    <text x="25" y="145" fill="#6ee7b7" font-family="sans-serif" font-size="11">LIVE CHAT &amp; OFFERS</text>
    <!-- Mini green dot -->
    <circle cx="150" cy="180" r="4" fill="#34d399" filter="url(#subtleGlow)"/>
    <text x="25" y="184" fill="#94a3b8" font-family="sans-serif" font-size="10">KHARTOUM • SUDAN</text>
  </g>

  <!-- Bottom Cyber Edge Light Line -->
  <line x1="0" y1="476" x2="1200" y2="476" stroke="url(#glowGrad)" stroke-width="3" opacity="0.7"/>
</svg>`;

// Standard RFC 2397 compliant Data URI using encodeURIComponent
export const MOBILEY_OFFICIAL_COVER = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(MOBILEY_COVER_SVG)}`;
