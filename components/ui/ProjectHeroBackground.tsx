/* eslint-disable */
// @ts-nocheck
'use client';

import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef, useState } from 'react';

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uSpeed;
varying vec2 vUv;

// 2D Hash
vec2 hash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

// 2D Perlin Noise
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
        dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
        dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}

// Fractional Brownian Motion
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 4; ++i) {
    v += a * noise(p);
    p = rot * p * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 st = vUv;
  float aspect = uResolution.x / max(1.0, uResolution.y);
  st.x *= aspect;

  vec2 mouse = uMouse * vec2(aspect, 1.0);
  float dist = length(st - mouse);
  vec2 mouseForce = (st - mouse) * exp(-dist * 2.5) * 0.28;

  float t = uTime * uSpeed * 0.16;
  vec2 p = st * 1.5;

  // Domain warping for organic liquid motion
  vec2 q = vec2(
    fbm(p + vec2(t * 0.55, t * 0.38) + mouseForce),
    fbm(p + vec2(-t * 0.45, t * 0.62) - mouseForce)
  );

  vec2 r = vec2(
    fbm(p + 1.8 * q + vec2(1.7, 9.2) + 0.18 * t),
    fbm(p + 1.8 * q + vec2(8.3, 2.8) + 0.14 * t)
  );

  float f = fbm(p + 2.2 * r);

  // SELEMBAR Palette (Dominan Biru Tua, dengan Hijau Matcha dan Putih):
  // 1. Midnight Deep Navy: #0B192C (dasar biru sangat gelap)
  vec3 cNavyDeep = vec3(0.0431, 0.0980, 0.1725);
  // 2. Biru Tua Utama: #112544
  vec3 cNavyMain = vec3(0.0667, 0.1451, 0.2667);
  // 3. Biru Royal Mewah: #193B68
  vec3 cNavyLight = vec3(0.0980, 0.2314, 0.4078);
  // 4. Hijau Matcha: #789262
  vec3 cMatcha = vec3(0.4706, 0.5725, 0.3843);
  // 5. Hijau Matcha Lembut: #8CB475
  vec3 cMatchaBright = vec3(0.5490, 0.7059, 0.4588);
  // 6. Putih Bersih: #FFFFFF
  vec3 cWhite = vec3(0.98, 0.99, 1.0);

  // BASE: Dominan Biru Tua
  vec3 col = mix(cNavyDeep, cNavyMain, smoothstep(-0.6, 0.6, p.y + q.y * 0.4));

  // Gelombang Biru Royal yang mengalir
  float wRoyal = smoothstep(-0.25, 0.45, length(q));
  col = mix(col, cNavyLight, wRoyal * 0.65);

  // Aliran aurora Hijau Matcha yang menyala lembut di kedalaman biru
  float wMatcha = smoothstep(0.08, 0.62, f);
  vec3 matchaTone = mix(cMatcha, cMatchaBright, smoothstep(0.25, 0.65, r.y));
  col = mix(col, matchaTone, wMatcha * 0.52);

  // Riak berkilau Putih yang bersih
  float wWhite = smoothstep(0.35, 0.8, r.x);
  col = mix(col, cWhite, wWhite * 0.38);

  // Sheen interaktif saat kursor mouse bergerak
  float mouseGlow = exp(-dist * 2.8) * 0.35;
  col += mix(cMatchaBright, cWhite, 0.5) * mouseGlow;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function ProjectHeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: Renderer | null = null;
    let gl: WebGLRenderingContext | null = null;

    try {
      const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 1.2);
      renderer = new Renderer({
        alpha: true,
        antialias: false,
        dpr,
        powerPreference: 'high-performance',
      });
      gl = renderer.gl;
    } catch {
      return;
    }

    if (!gl) return;

    let program: Program;
    let animateId = 0;
    let isIntersecting = true;
    let isTabVisible = typeof document !== 'undefined' ? !document.hidden : true;

    const handleResize = () => {
      if (!container || !renderer || !gl) return;
      const w = container.offsetWidth || window.innerWidth;
      const h = container.offsetHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.2);
      renderer.dpr = dpr;
      renderer.setSize(w, h);
      if (program) {
        program.uniforms.uResolution.value[0] = gl.canvas.width;
        program.uniforms.uResolution.value[1] = gl.canvas.height;
      }
    };

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Float32Array([container.offsetWidth || 1200, container.offsetHeight || 800]) },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uSpeed: { value: 0.85 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    gl.canvas.style.position = 'absolute';
    gl.canvas.style.inset = '0';
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.display = 'block';

    container.appendChild(gl.canvas);
    setIsReady(true);

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, 1.0 - (e.clientY - rect.top) / rect.height));
      mousePos.current.tx = x;
      mousePos.current.ty = y;
    };

    container.addEventListener('pointermove', onPointerMove, { passive: true });

    const animate = (t: number) => {
      if (!isIntersecting || !isTabVisible) {
        animateId = 0;
        return;
      }

      animateId = requestAnimationFrame(animate);

      // Smooth mouse interpolation
      mousePos.current.x += (mousePos.current.tx - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.ty - mousePos.current.y) * 0.05;

      program.uniforms.uMouse.value[0] = mousePos.current.x;
      program.uniforms.uMouse.value[1] = mousePos.current.y;
      program.uniforms.uTime.value = t * 0.001;

      renderer?.render({ scene: mesh });
    };

    const checkShouldAnimate = () => {
      const should = isIntersecting && isTabVisible;
      if (should && !animateId) {
        animateId = requestAnimationFrame(animate);
      } else if (!should && animateId) {
        cancelAnimationFrame(animateId);
        animateId = 0;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        checkShouldAnimate();
      },
      { threshold: 0.02 }
    );
    observer.observe(container);

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden;
      checkShouldAnimate();
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    animateId = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', onPointerMove);
      if (gl?.canvas && container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl?.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0B192C] pointer-events-none">
      {/* Fallback Animated CSS Mesh Gradient (Dominan Biru Tua) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B192C] via-[#112544] to-[#162F56] opacity-95" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#789262]/25 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-[#193B68]/40 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#789262]/20 rounded-full blur-[80px]" />

      {/* WebGL Canvas Container */}
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-auto ${
          isReady ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle ambient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
