'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MainHero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge de Disponibilidad */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Disponible para trabajar
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Frontend Developer</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                & DevOps Engineer
              </span>
            </h1>

            <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-2xl">
              Desarrollador apasionado por crear experiencias web excepcionales y optimizar procesos de desarrollo. 
              Especializado en React, TypeScript y arquitecturas cloud modernas.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-white/70 border border-white/10 backdrop-blur-sm">
                <span className="mr-2">📍</span>
                Bogotá, Colombia
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-white/70 border border-white/10 backdrop-blur-sm">
                <span className="mr-2">💻</span>
                Frontend
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-white/70 border border-white/10 backdrop-blur-sm">
                <span className="mr-2">🚀</span>
                DevOps
              </span>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 text-white font-medium shadow-lg shadow-emerald-400/20 hover:shadow-xl hover:shadow-emerald-400/30 transition-shadow"
              >
                Contáctame
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors"
              >
                LinkedIn
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Círculos decorativos animados */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 -z-10 blur-2xl"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-cyan-400/20 -z-10 blur-2xl"
              />

              {/* Contenedor de la imagen */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-full overflow-hidden aspect-square border-4 border-white/10 shadow-2xl shadow-emerald-400/10"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-cyan-400/20 to-transparent -z-10"></div>
                <Image
                  src="/profile1.png"
                  alt="Profile photo"
                  width={500}
                  height={500}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
                {/* Efecto de brillo */}
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    backgroundPosition: ["200% 50%", "-100% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  style={{ backgroundSize: "200% 100%" }}
                />
              </motion.div>

              {/* Elementos decorativos flotantes */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl"
              >
                💻
              </motion.div>
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center text-2xl"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.1),transparent_50%)] pointer-events-none"></div>
    </section>
  );
};

export default MainHero;
