'use client';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const skills = [
    { name: 'React', level: 80, color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', level: 70, color: 'from-purple-600 to-purple-900' },
    { name: 'Docker', level: 50, color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', level: 45, color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', level: 65, color: 'from-blue-500 to-blue-700' },
    { name: 'CI/CD', level: 40, color: 'from-green-400 to-emerald-600' },
  ];

  const experiences = [
    {
      title: 'Frontend Development',
      description: 'Especializado en crear interfaces modernas y responsivas utilizando las últimas tecnologías web.',
      icon: '💻'
    },
    {
      title: 'DevOps Engineering',
      description: 'Implementación de pipelines CI/CD y gestión de infraestructura en la nube.',
      icon: '🚀'
    },
    {
      title: 'Cloud Architecture',
      description: 'Diseño de arquitecturas escalables y resilientes en AWS.',
      icon: '☁️'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Desarrollador Web Frontend con experiencia en HTML, CSS, JavaScript y frameworks como React, Angular, Bootstrap y Materialize. Conocimientos en C#, Java y Python. 
            Actualmente, en transición al mundo DevOps, con manejo de VPS, despliegues en Next.js y Django (usando Poetry), además de herramientas como Jenkins y AWS. Enfoque en el desarrollo de soluciones escalables, optimizadas y alineadas con los requerimientos del cliente.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
              <p className="text-white/70">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white/90">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Code Editor Mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-emerald-400">const developer = {`{`}</div>
                <div className="pl-4">
                  <span className="text-purple-400">name</span>: 
                  <span className="text-yellow-300">&quot;TulDev&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">skills</span>: [
                  <span className="text-yellow-300">&quot;Frontend&quot;</span>, 
                  <span className="text-yellow-300">&quot;DevOps&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">passion</span>: 
                  <span className="text-yellow-300">&quot;Creating amazing web experiences&quot;</span>
                </div>
                <div>{`}`};</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/0 pointer-events-none" />
    </section>
  );
};

export default AboutMe;
