import { useState, useEffect } from 'react';
import './Loader.css';

const CODE_LINES = [
  { text: 'import React from ', str: '"react"', delay: 0 },
  { text: 'import { Portfolio } from ', str: '"./components"', delay: 120 },
  { text: 'import { useTheme } from ', str: '"./context/ThemeContext"', delay: 240 },
  { text: '', delay: 360 },
  { text: 'const App = () => {', delay: 440 },
  { text: '  const { name } = ', str: '"Prateek Kumar Srivastava"', delay: 560 },
  { text: '  return (', delay: 640 },
  { text: '    <Portfolio', delay: 720 },
  { text: '      dev={name}', delay: 800, highlight: true },
  { text: '      stack={["MERN", "Cloud", "DSA"]}', delay: 880, highlight: true },
  { text: '    />', delay: 960 },
  { text: '  )', delay: 1040 },
  { text: '}', delay: 1100 },
];

const STATUS_STEPS = [
  { msg: '✓ Dependencies installed', delay: 200 },
  { msg: '✓ Components compiled', delay: 600 },
  { msg: '✓ Assets optimized', delay: 1000 },
  { msg: '✓ Ready in 0.3s', delay: 1400, accent: true },
];

export default function Loader({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [visibleStatus, setVisibleStatus] = useState([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Show code lines
    CODE_LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(prev => [...prev, i]), line.delay + 200);
    });

    // Show status steps
    STATUS_STEPS.forEach((step, i) => {
      setTimeout(() => setVisibleStatus(prev => [...prev, i]), step.delay + 400);
    });

    // Progress bar
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 4 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 200);
        setTimeout(() => setHiding(true), 600);
        setTimeout(() => onComplete?.(), 1300);
      }
      setProgress(Math.min(p, 100));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader ${hiding ? 'loader--hiding' : ''}`}>
      <div className="loader__window">
        {/* Window chrome */}
        <div className="loader__titlebar">
          <div className="loader__dots">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <span className="loader__filename">App.jsx — portfolio</span>
          <span />
        </div>

        {/* Editor body */}
        <div className="loader__editor">
          <div className="loader__gutter">
            {CODE_LINES.map((_, i) => (
              <span key={i} className={`loader__lineno ${visibleLines.includes(i) ? 'visible' : ''}`}>
                {i + 1}
              </span>
            ))}
          </div>
          <div className="loader__code">
            {CODE_LINES.map((line, i) => (
              <div
                key={i}
                className={`loader__line ${visibleLines.includes(i) ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {line.text && (
                  <span className={line.highlight ? 'code-highlight' : 'code-default'}>
                    {line.text}
                  </span>
                )}
                {line.str && <span className="code-string">{line.str}</span>}
                {!line.text && !line.str && <span>&nbsp;</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal section */}
        <div className="loader__terminal">
          <div className="loader__term-header">
            <span className="term-icon">▶</span>
            <span>TERMINAL</span>
          </div>
          <div className="loader__term-body">
            <div className="term-prompt">
              <span className="term-path">~/portfolio</span>
              <span className="term-cmd"> $ npm run dev</span>
            </div>
            <div className="term-status-list">
              {STATUS_STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`term-status ${visibleStatus.includes(i) ? 'visible' : ''} ${step.accent ? 'accent' : ''}`}
                >
                  {step.msg}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="loader__footer">
          <div className="loader__progress-track">
            <div
              className={`loader__progress-fill ${done ? 'done' : ''}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loader__progress-info">
            <span className="loader__label">
              {done ? 'Build successful' : 'Building...'}
            </span>
            <span className="loader__pct">{Math.floor(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
