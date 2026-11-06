"use client";

import { useEffect, useRef } from "react";

export default function FestiveCelebration() {
  const canvasRef = useRef(null);
  const lanternLayerRef = useRef(null);

  useEffect(() => {
    // Check user accessibility preference
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    /* ==========================================================================
       1. FIREWORKS SIMULATION (Canvas)
       ========================================================================== */
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const MAX_ROCKETS = 2;
    const COLORS = [
      "#f2c46d", // Golden amber
      "#ff6b8a", // Vivid festive pink / crimson
      "#7fd1ff", // Vibrant celestial cyan
      "#ffffff", // Brilliant spark white
      "#b98cff", // Royal violet
      "#ff9e42", // Warm saffron orange
      "#4ade80", // Emerald festive green
    ];

    const GRAVITY = 0.058;
    const rockets = [];
    const particles = [];
    let w = 0;
    let h = 0;
    let nextLaunch = 0;
    let running = true;
    let animId = null;

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function pick(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function launch() {
      const targetY = h * (0.12 + Math.random() * 0.32);
      rockets.push({
        x: w * (0.12 + Math.random() * 0.76),
        y: h,
        vx: (Math.random() - 0.5) * 0.85,
        vy: -Math.sqrt(2 * GRAVITY * (h - targetY)), // Apex reaches targetY
        color: pick(COLORS),
        trail: [],
      });
    }

    function explode(r) {
      const count = 75 + Math.floor(Math.random() * 40);
      const secondColor = pick(COLORS);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.2 + Math.random() * 4.2;
        particles.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: Math.random() < 0.7 ? r.color : secondColor,
          life: 1,
          decay: 0.009 + Math.random() * 0.012,
        });
      }
    }

    function frame(t) {
      if (!running) return;

      // Soft fading trail while keeping canvas transparent
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      if (rockets.length < MAX_ROCKETS && t > nextLaunch) {
        launch();
        nextLaunch = t + 400 + Math.random() * 1400;
      }

      // Update & render rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 10) r.trail.shift();
        r.x += r.vx;
        r.y += r.vy;
        r.vy += GRAVITY;

        ctx.strokeStyle = r.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        if (r.trail.length > 0) {
          ctx.moveTo(r.trail[0].x, r.trail[0].y);
          ctx.lineTo(r.x, r.y);
          ctx.stroke();
        }

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.2, 0, Math.PI * 2);
        ctx.fill();

        if (r.vy >= 0) {
          explode(r);
          rockets.splice(i, 1);
        }
      }

      // Update & render particles
      for (let j = particles.length - 1; j >= 0; j--) {
        const p = particles[j];
        p.vx *= 0.97;
        p.vy = p.vy * 0.97 + 0.04;
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(j, 1);
          continue;
        }

        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(frame);

    /* ==========================================================================
       2. SKY LANTERNS (Floating Lamps)
       ========================================================================== */
    const layer = lanternLayerRef.current;
    const MAX_LANTERNS = 3;
    const MIN_GAP_SEC = 3.2;
    const MAX_GAP_SEC = 6.0;
    let lanternTimer = null;

    function rand(a, b) {
      return a + Math.random() * (b - a);
    }

    const lanternSvgMarkup = `
      <svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-[0_0_12px_rgba(255,170,60,0.85)]">
        <defs>
          <radialGradient id="slHalo" cx="50%" cy="60%" r="50%">
            <stop offset="0" stop-color="#ffc861" stop-opacity=".8"/>
            <stop offset=".5" stop-color="#ff9a2e" stop-opacity=".3"/>
            <stop offset="1" stop-color="#ff7a00" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="slBody" cx="50%" cy="82%" r="80%">
            <stop offset="0" stop-color="#fff7d6"/>
            <stop offset=".3" stop-color="#ffd27a"/>
            <stop offset=".62" stop-color="#ff9a3c"/>
            <stop offset="1" stop-color="#c2450f"/>
          </radialGradient>
          <linearGradient id="slEdge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#7a2004" stop-opacity=".55"/>
            <stop offset=".28" stop-color="#7a2004" stop-opacity="0"/>
            <stop offset=".72" stop-color="#7a2004" stop-opacity="0"/>
            <stop offset="1" stop-color="#7a2004" stop-opacity=".55"/>
          </linearGradient>
          <radialGradient id="slFlame">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset=".35" stop-color="#fff2a0"/>
            <stop offset="1" stop-color="#ff8a00" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <!-- Outer glow around the lantern -->
        <circle cx="50" cy="78" r="50" fill="url(#slHalo)">
          <animate attributeName="opacity" values=".7;1;.8;.95;.7" dur="2.2s" repeatCount="indefinite"/>
        </circle>

        <!-- Paper body, illuminated from flame below -->
        <path d="M20 14 C30 6 70 6 80 14 L72 108 C62 113 38 113 28 108 Z" fill="url(#slBody)"/>
        <path d="M20 14 C30 6 70 6 80 14 L72 108 C62 113 38 113 28 108 Z" fill="url(#slEdge)"/>

        <!-- Folded paper top rim -->
        <path d="M20 14 C30 6 70 6 80 14 C70 19 30 19 20 14 Z" fill="#9c3a10" opacity=".55"/>

        <!-- Faint paper ribs & seams -->
        <g stroke="#9c3a10" stroke-opacity=".2" stroke-width="1" fill="none">
          <path d="M35 10 L39 110"/>
          <path d="M50 8 L50 112"/>
          <path d="M65 10 L61 110"/>
        </g>

        <!-- Inner light pulse -->
        <ellipse cx="50" cy="90" rx="17" ry="20" fill="#fff8dc">
          <animate attributeName="opacity" values=".35;.65;.4;.58;.35" dur="1.3s" repeatCount="indefinite"/>
        </ellipse>

        <!-- Bamboo ring & wires holding fuel cell -->
        <ellipse cx="50" cy="108" rx="22" ry="3" fill="none" stroke="#3a1606" stroke-width="1.6"/>
        <path d="M28 108 L46 117 M72 108 L54 117" stroke="#3a1606" stroke-width=".8"/>

        <!-- Dancing Flame -->
        <circle cx="50" cy="117" r="10" fill="url(#slFlame)">
          <animate attributeName="r" values="9;12;8.5;11;9" dur=".9s" repeatCount="indefinite"/>
        </circle>
        <ellipse cx="50" cy="117" rx="2.6" ry="4.5" fill="#fffbe6">
          <animate attributeName="ry" values="4;5.5;3.6;5;4" dur=".6s" repeatCount="indefinite"/>
        </ellipse>
      </svg>
    `;

    function spawnLantern() {
      if (!layer || document.hidden || layer.children.length >= MAX_LANTERNS) {
        return;
      }

      const depth = rand(0.45, 1.0);
      const isMobile = window.innerWidth < 768;
      const baseWidth = isMobile ? 54 : 80;

      const lantern = document.createElement("div");
      lantern.className = "sl-item";
      lantern.style.width = `${baseWidth * depth}px`;
      lantern.style.left = `${rand(5, 88)}vw`;
      lantern.style.animationDuration = `${(rand(20, 28) / (0.55 + 0.45 * depth)).toFixed(1)}s`;
      lantern.style.setProperty("--sl-opacity", (0.55 + 0.45 * depth).toFixed(2));
      lantern.style.setProperty("--sl-drift", `${rand(-80, 80).toFixed(0)}px`);

      if (depth < 0.6) {
        lantern.style.filter = "blur(0.5px)";
      }

      lantern.innerHTML = `
        <div class="sl-sway" style="animation-delay: -${rand(0, 4).toFixed(2)}s">
          ${lanternSvgMarkup}
        </div>
      `;

      lantern.addEventListener("animationend", (e) => {
        if (e.target === lantern) {
          lantern.remove();
        }
      });

      layer.appendChild(lantern);
    }

    function lanternLoop() {
      spawnLantern();
      lanternTimer = setTimeout(
        lanternLoop,
        rand(MIN_GAP_SEC, MAX_GAP_SEC) * 1000
      );
    }

    // Start lanterns shortly after mount
    lanternTimer = setTimeout(lanternLoop, 800);

    /* ==========================================================================
       3. VISIBILITY CHANGE HANDLING (Battery & CPU saver)
       ========================================================================== */
    function handleVisibility() {
      if (document.hidden) {
        running = false;
        if (animId) cancelAnimationFrame(animId);
      } else {
        if (!running) {
          running = true;
          animId = requestAnimationFrame(frame);
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);

    // Cleanup on unmount
    return () => {
      running = false;
      if (animId) cancelAnimationFrame(animId);
      if (lanternTimer) clearTimeout(lanternTimer);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (layer) {
        layer.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      {/* Floating Sky Lanterns Layer */}
      <div
        ref={lanternLayerRef}
        id="sl-layer"
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      />

      {/* Fireworks Canvas Overlay */}
      <canvas
        ref={canvasRef}
        id="rf-overlay"
        aria-hidden="true"
        className="fixed inset-0 w-screen h-screen pointer-events-none z-30 block"
      />

      {/* Scoped CSS Animations for Lanterns */}
      <style jsx global>{`
        .sl-item {
          position: absolute;
          bottom: -220px;
          opacity: 0;
          will-change: transform, opacity;
          animation-name: sl-rise;
          animation-timing-function: cubic-bezier(0.35, 0.1, 0.6, 1);
          animation-fill-mode: forwards;
          pointer-events: none;
        }

        .sl-sway {
          transform-origin: 50% 20%;
          animation: sl-sway 4.5s ease-in-out infinite alternate;
        }

        .sl-item svg {
          display: block;
          width: 100%;
          height: auto;
          animation: sl-flicker 2.4s ease-in-out infinite alternate;
        }

        @keyframes sl-rise {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(1);
          }
          8% {
            opacity: var(--sl-opacity, 1);
          }
          80% {
            opacity: var(--sl-opacity, 1);
          }
          100% {
            opacity: 0;
            transform: translate3d(var(--sl-drift, 0px), calc(-100vh - 180px), 0) scale(0.5);
          }
        }

        @keyframes sl-sway {
          from {
            transform: rotate(-3.5deg);
          }
          to {
            transform: rotate(3.5deg);
          }
        }

        @keyframes sl-flicker {
          0% {
            filter: drop-shadow(0 0 8px rgba(255, 170, 60, 0.75)) brightness(1);
          }
          40% {
            filter: drop-shadow(0 0 15px rgba(255, 160, 40, 0.95)) brightness(1.08);
          }
          70% {
            filter: drop-shadow(0 0 10px rgba(255, 180, 70, 0.8)) brightness(0.97);
          }
          100% {
            filter: drop-shadow(0 0 18px rgba(255, 150, 30, 1)) brightness(1.1);
          }
        }
      `}</style>
    </>
  );
}

