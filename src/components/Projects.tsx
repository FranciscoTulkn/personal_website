'use client';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Particles Landing Page',
      description: 'Landing page interactiva con animaciones de partículas y transiciones fluidas, construida con Next.js, Tailwind CSS y Framer Motion.',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      icon: '✨',
      link: 'https://github.com/FranciscoTulkn/particles-landingpage-next-tailwind-framer-motion'
    },
    {
      title: 'Dashboard Proyect',
      description: 'Panel de control interactivo para visualización y gestión de datos, desarrollado en TypeScript con foco en usabilidad.',
      tags: ['TypeScript', 'Dashboard'],
      icon: '📊',
      link: 'https://github.com/FranciscoTulkn/dashboard-proyect'
    },
    {
      title: 'TeslaShop Ecommerce',
      description: 'E-commerce construido con Next.js, Tailwind CSS y Zustand para el manejo de estado, con enfoque en rendimiento y UX.',
      tags: ['Next.js', 'Tailwind', 'Zustand', 'TypeScript'],
      icon: '🛒',
      link: 'https://github.com/FranciscoTulkn/Ecommers-TeslaShop'
    },
    {
      title: 'Pokedex React',
      description: 'Pokedex interactiva construida en React, consumiendo la PokeAPI en tiempo real con búsqueda y detalle por Pokémon.',
      tags: ['React', 'API REST'],
      icon: '🎮',
      link: 'https://github.com/FranciscoTulkn/pokedex-react',
      demo: 'https://pokedex-react-weld.vercel.app'
    },
    {
      title: 'Portal Job',
      description: 'Portal de búsqueda y publicación de empleos, con listados dinámicos e interfaz responsiva en JavaScript.',
      tags: ['JavaScript', 'UI/UX'],
      icon: '💼',
      link: 'https://github.com/FranciscoTulkn/portal-job'
    },
    {
      title: 'Backend Libros API',
      description: 'API REST en TypeScript para la gestión de una biblioteca: catálogo de libros, préstamos y usuarios.',
      tags: ['TypeScript', 'API REST', 'Node.js'],
      icon: '📚',
      link: 'https://github.com/FranciscoTulkn/Backend-Libros-API'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Una selección de mis proyectos más relevantes que demuestran mis habilidades
            en desarrollo frontend y DevOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
            >
              {/* Project Visual */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-video relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-black/40"
              >
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_60%)]" />
              </a>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/80 hover:text-emerald-400 transition-colors"
                  >
                    Código →
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Ver demo →
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-emerald-400/0 rounded-2xl group-hover:border-emerald-400/50 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/FranciscoTulkn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
          >
            Ver más proyectos
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/0 pointer-events-none" />
    </section>
  );
};

export default Projects;
