'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const skills = [
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
  { name: 'React', level: 80, color: 'from-cyan-400 to-blue-500' },
  { name: 'Angular', level: 65, color: 'from-red-500 to-rose-700' },
  { name: 'Tailwind CSS', level: 80, color: 'from-teal-400 to-cyan-600' },
  { name: 'Docker', level: 55, color: 'from-blue-400 to-blue-600' },
  { name: 'AWS', level: 50, color: 'from-yellow-500 to-orange-500' },
  { name: 'Jenkins', level: 45, color: 'from-red-400 to-red-600' },
  { name: 'Git & GitHub', level: 75, color: 'from-orange-400 to-orange-600' },
];

const AboutMe = () => {
  const { t } = useLanguage();
  const experiences = t.about.experiences;

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
            {t.about.title}
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            {t.about.bio}
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
            <h3 className="text-2xl font-bold text-white mb-6">{t.about.skillsTitle}</h3>
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
                  <span className="text-yellow-300">&quot;Francisco Tulcán&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">skills</span>: [
                  <span className="text-yellow-300">&quot;Frontend&quot;</span>, 
                  <span className="text-yellow-300">&quot;DevOps&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">passion</span>:
                  <span className="text-yellow-300">&quot;{t.about.codeMock.passionValue}&quot;</span>
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
