import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }));

    const mouse = { x: width / 2, y: height / 2 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouse);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const opacity = (1 - dist / 130) * 0.25;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        // Mouse parallax attraction
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          p.vx += (mdx / mdist) * 0.005;
          p.vy += (mdy / mdist) * 0.005;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Friction
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, 0.6)`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated gradient blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 animate-float"
        style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 animate-float"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)', animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)', animationDelay: '4s' }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
}
