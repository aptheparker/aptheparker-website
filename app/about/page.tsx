import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn">
          About Me
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 animate-fadeIn">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl">
                👨‍💻
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">Profile</h2>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-purple-400 font-semibold">Name:</span>{' '}
                  Park Jihwan
                </p>
                <p>
                  <span className="text-purple-400 font-semibold">Gender:</span>{' '}
                  Male
                </p>
                <p>
                  <span className="text-purple-400 font-semibold">Birth:</span>{' '}
                  2001.11.19
                </p>
                <p>
                  <span className="text-purple-400 font-semibold">
                    Location:
                  </span>{' '}
                  Seoul, South Korea
                </p>
                <p>
                  <span className="text-purple-400 font-semibold">
                    Nationality:
                  </span>{' '}
                  Korean
                </p>
              </div>
            </div>
          </div>

          <div
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-6xl">
                🎓
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
              <div className="space-y-4 text-left text-gray-300">
                <div>
                  <p className="font-semibold text-blue-400">High School</p>
                  <p className="text-sm ml-4">SHSID (Shanghai, China)</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-400">University</p>
                  <p className="text-sm ml-4">SKKU (Suwon, Korea)</p>
                  <p className="text-xs ml-4 text-gray-400">
                    • 1st Major: Industrial Engineering
                  </p>
                  <p className="text-xs ml-4 text-gray-400">
                    • 2nd Major: Computer Science
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-6xl">
                🌐
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">Languages</h2>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Korean</span>
                  <span className="text-pink-400">●●●●●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>English</span>
                  <span className="text-pink-400">●●●●●</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Chinese</span>
                  <span className="text-pink-400">●●●●●</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
