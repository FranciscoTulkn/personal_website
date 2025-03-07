'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico construida con Next.js y AWS. Implementación completa de CI/CD y arquitectura serverless.',
      tags: ['Next.js', 'AWS', 'TypeScript', 'Tailwind'],
      image: '/projects/ecommerce.jpg',
      link: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para análisis de datos en tiempo real. Integración con múltiples fuentes de datos y visualizaciones personalizadas.',
      tags: ['React', 'D3.js', 'Node.js', 'Docker'],
      image: '/projects/dashboard.jpg',
      link: '#'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Infraestructura cloud automatizada con Terraform y Kubernetes. Monitoreo completo y alta disponibilidad.',
      tags: ['Terraform', 'K8s', 'AWS', 'DevOps'],
      image: '/projects/cloud.jpg',
      link: '#'
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
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-colors"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-emerald-400/0 rounded-2xl group-hover:border-emerald-400/50 transition-colors pointer-events-none" />
            </motion.a>
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
