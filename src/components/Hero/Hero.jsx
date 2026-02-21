import { useEffect, useRef, useState } from "react";
import { personal } from "../../data/portfolioData";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import "./Hero.css";

const TYPED_ROLES = [
  "Software Engineer",
  "MERN Stack Developer",
  "Full-Stack Builder",
  "Cloud Enthusiast",
];

function useTyped(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTyped(TYPED_ROLES);
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  // Animated canvas particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let animId;

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const color = isDark ? "130, 140, 255" : "37, 99, 235";

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();

        // Connections
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${color}, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Animated gradient blobs */}
      <div className="hero__blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div
        className={`hero__content section-container ${mounted ? "mounted" : ""}`}
      >
        <div className="hero__top">
          <div className="available-badge">
            <span className="dot" />
            Open to opportunities
          </div>
        </div>

        <div className="hero__name-wrap">
          <div className="hero__greeting">Hello, I'm</div>
          <h1 className="hero__name">
            <span className="hero__name-first">Prateek</span>
            <span className="hero__name-last">
              Kumar
              <br />
              Srivastava
            </span>
          </h1>
        </div>

        <div className="hero__role">
          <span className="hero__role-text">{typed}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className="hero__tagline">{personal.tagline}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            See my work
            <ArrowDown size={15} />
          </a>
          <a href={`mailto:${personal.email}`} className="btn btn-outline">
            Get in touch
          </a>
        </div>

        <div className="hero__social">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
          >
            <Github size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
          >
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${personal.email}`} className="hero__social-link">
            <Mail size={18} />
          </a>
          <div className="hero__social-line" />
        </div>

        {/* Floating stats */}
        <div className="hero__floating-stats">
          <div className="hero__stat-card">
            <span className="stat-num">
              250<sup>+</sup>
            </span>
            <span className="stat-label">DSA Problems</span>
          </div>
          <div className="hero__stat-card">
            <span className="stat-num">
              Top 1<sup>%</sup>
            </span>
            <span className="stat-label">NPTEL Java</span>
          </div>
          <div className="hero__stat-card">
            <span className="stat-num">2</span>
            <span className="stat-label">Cloud Certs</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        className="hero__scroll"
        onClick={scrollDown}
        aria-label="Scroll down"
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </button>
    </section>
  );
}
