import Header from '@/components/Header';

export default function Dev() {
  const skills = [
    {
      category: 'Frontend',
      icon: '🎨',
      items: ['Next.js', 'React.js', 'Tailwind CSS'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Backend',
      icon: '⚙️',
      items: ['Nest.js', 'Node.js', 'Flask'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Database',
      icon: '🗄️',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'ORM',
      icon: '🔗',
      items: ['Sequelize', 'Prisma', 'TypeORM', 'Mongoose'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      category: 'Cloud',
      icon: '☁️',
      items: ['AWS', 'Cloudtype', 'Vercel'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-fadeIn">
          Tech Stack
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center text-2xl`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
