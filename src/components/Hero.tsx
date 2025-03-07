'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  const skills = [
    { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'Next.js', level: 85, color: 'from-gray-600 to-gray-800' },
    { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', level: 75, color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-blue-700' },
    { name: 'CI/CD', level: 80, color: 'from-green-400 to-emerald-600' },
  ];

  return (
    <section className="min-h-screen pt-20 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-sm -z-10" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Frontend Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              & DevOps Engineer
            </span>
          </h1>
          
          <p className="text-lg text-white/80">
            Especializado en crear experiencias web modernas y escalables. 
            Combino el diseño frontend con prácticas DevOps para entregar 
            soluciones robustas y eficientes.
          </p>

          {/* Skills Bars */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white/90">{skill.name}</span>
                  <span className="text-white/60">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Contactar
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              Ver Proyectos
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square relative">
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 -left-10 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-2xl backdrop-blur-md border border-white/20"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-1/4 -right-10 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl backdrop-blur-md border border-white/20"
            />
            
            {/* Code Editor Mock */}
            <div className="absolute inset-10 bg-black/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-white/5 rounded w-3/4" />
                <div className="h-4 bg-white/5 rounded w-1/2" />
                <div className="h-4 bg-emerald-400/20 rounded w-5/6" />
                <div className="h-4 bg-white/5 rounded w-2/3" />
                <div className="h-4 bg-cyan-400/20 rounded w-4/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
