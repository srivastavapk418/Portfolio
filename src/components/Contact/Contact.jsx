import { useState } from 'react';
import { personal } from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Mail, Github, Linkedin, Phone, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent'

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(null);
        alert('Something went wrong. Please email me directly.');
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
      setStatus(null);
    }
  };

  return (
    <section className="contact" id="contact">
      {/* Background decoration */}
      <div className="contact__bg-text">Contact</div>

      <div className="section-container">
        <div className="contact__grid" ref={ref}>
          {/* Left: info */}
          <div className={`contact__info ${isVisible ? 'visible' : ''}`}>
            <div className="section-tag">Contact</div>
            <h2 className="section-title">
              Let's build<br />
              <em>something great.</em>
            </h2>
            <p className="contact__desc">
              I'm actively looking for full-time Software Engineer roles. Whether it's a new project, a job opportunity, or just a conversation about tech — my inbox is open.
            </p>

            <div className="contact__links">
              <a href={`mailto:${personal.email}`} className="contact__link">
                <div className="contact__link-icon"><Mail size={17} /></div>
                <div>
                  <div className="contact__link-label">Email</div>
                  <div className="contact__link-value">{personal.email}</div>
                </div>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact__link">
                <div className="contact__link-icon"><Linkedin size={17} /></div>
                <div>
                  <div className="contact__link-label">LinkedIn</div>
                  <div className="contact__link-value">linkedin.com/in/pks2002</div>
                </div>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="contact__link">
                <div className="contact__link-icon"><Github size={17} /></div>
                <div>
                  <div className="contact__link-label">GitHub</div>
                  <div className="contact__link-value">github.com/srivastavapk418</div>
                </div>
              </a>
              <a href={`tel:${personal.phone}`} className="contact__link">
                <div className="contact__link-icon"><Phone size={17} /></div>
                <div>
                  <div className="contact__link-label">Phone</div>
                  <div className="contact__link-value">{personal.phone}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className={`contact__form-wrap ${isVisible ? 'visible' : ''}`}>
            {status === 'sent' ? (
              <div className="contact__success">
                <CheckCircle size={40} className="success-icon" />
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setStatus(null)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__header">
                  <span className="form__dot" />
                  <span className="form__dot" />
                  <span className="form__dot" />
                  <span className="form__title">New message</span>
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form__input"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Prateek Kumar"
                    required
                  />
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="email">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form__input"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    required
                  />
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form__input form__textarea"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>Sending... <div className="btn-spinner" /></>
                  ) : (
                    <>Send message <Send size={15} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
