'use client';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-medium mb-4 block">¿Tienes un proyecto en mente?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-emerald-400 bg-clip-text text-transparent">
            Hablemos de tu proyecto
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Estoy disponible para colaborar y crear soluciones web innovadoras. 
            Cuéntame sobre tu idea y hagámosla realidad.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <form
            className="space-y-6 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30"
                  placeholder="¿Cómo te llamas?"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="relative group">
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30"
                  placeholder="ejemplo@correo.com"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
            <div className="relative group">
              <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30"
                placeholder="¿Cuál es el motivo de tu mensaje?"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="relative group">
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 ml-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent text-white backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/30 resize-none"
                placeholder="Cuéntame sobre tu proyecto o idea..."
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <button
              type="submit"
              className="relative w-full group overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative px-8 py-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 rounded-xl shadow-lg group-hover:shadow-emerald-400/20 transition-all duration-300">
                <span className="relative z-10 text-white font-medium text-lg">
                  Enviar Mensaje
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
