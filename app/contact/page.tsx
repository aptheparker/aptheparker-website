import Header from '@/components/Header';

export default function Contact() {
  const contacts = [
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'aptheparker',
      link: 'https://linkedin.com/in/aptheparker',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: '👨‍💻',
      label: 'GitHub',
      value: 'aptheparker',
      link: 'https://github.com/aptheparker',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: '📷',
      label: 'Instagram',
      value: '@aptheparker',
      link: 'https://instagram.com/aptheparker',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'aptheparker@gmail.com',
      link: 'mailto:aptheparker@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300">
            Feel free to reach out through any of these platforms
          </p>
        </div>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}
                >
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-gray-300">{contact.value}</p>
                </div>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div
          className="mt-12 text-center animate-fadeIn"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-gray-300 text-lg">
              🚀 Open to collaboration and new opportunities!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
