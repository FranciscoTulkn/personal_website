'use client';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const CONTACT_EMAIL = 'tufran13@gmail.com';
// FormSubmit: servicio gratuito, envía el formulario al correo sin abrir el cliente de correo.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const REDIRECT_DELAY_MS = 4000;

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const field = (n: string) =>
      (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement).value;
    const name = field('name');

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email: field('email'),
          message: field('message'),
          _subject: field('subject') || `${t.contact.subjectPrefix} ${name}`,
          _replyto: field('email'),
          _template: 'table',
          _captcha: 'false',
          _honey: field('_honey'),
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error();

      form.reset();
      setStatus('success');
      timerRef.current = setTimeout(() => {
        setStatus('idle');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, REDIRECT_DELAY_MS);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 relative overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-medium mb-4 block">{t.contact.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-emerald-400 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 mt-4 text-sm sm:text-base break-all text-white/80 hover:text-emerald-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <form
            className="space-y-6 backdrop-blur-xl bg-white/5 p-5 sm:p-8 rounded-2xl border border-white/10 shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30"
                  placeholder={t.contact.form.namePlaceholder}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="relative group">
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30"
                  placeholder={t.contact.form.emailPlaceholder}
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
            <div className="relative group">
              <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                {t.contact.form.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30"
                placeholder={t.contact.form.subjectPlaceholder}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="relative group">
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30 resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
            {status === 'success' && (
              <p role="status" className="text-emerald-400 text-center bg-emerald-400/10 border border-emerald-400/30 rounded-xl px-4 py-3">
                {t.contact.form.success}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-red-400 text-center bg-red-400/10 border border-red-400/30 rounded-xl px-4 py-3">
                {t.contact.form.error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="relative w-full group overflow-hidden transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-60 disabled:pointer-events-none"
            >
              <div className="relative px-8 py-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 rounded-xl shadow-lg group-hover:shadow-emerald-400/20 transition-all duration-300">
                <span className="relative z-10 text-white font-medium text-lg">
                  {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300 -z-10"></div>
            </button>
          </form>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-emerald-900/5 to-black/0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none" />
    </section>
  );
};

export default Contact;
