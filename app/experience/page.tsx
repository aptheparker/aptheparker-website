import Header from '@/components/Header';

export default function Experience() {
  return (
    <div className="min-h-screen pt-20">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fadeIn">
          Experience
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 animate-fadeIn">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl">
                💼
              </div>
              <h2 className="text-2xl font-bold text-white">Work</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-purple-400 pl-4">
                <h3 className="text-lg font-semibold text-purple-400">
                  SmartDoctor
                </h3>
                <p className="text-gray-300">Backend Developer</p>
                <p className="text-sm text-gray-400">2023.09 ~ 2025.10</p>
              </div>
              <div className="border-l-2 border-purple-400/50 pl-4">
                <h3 className="text-lg font-semibold text-purple-400/80">
                  Goorm Supporters
                </h3>
                <p className="text-gray-300">Member</p>
                <p className="text-sm text-gray-400">2022.08 ~ 2022.12</p>
              </div>
            </div>
          </div>

          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 animate-fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl">
                👥
              </div>
              <h2 className="text-2xl font-bold text-white">Clubs</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-blue-400 pl-4">
                <h3 className="text-lg font-semibold text-blue-400">
                  SKKRYPTO: Blockchain Academy
                </h3>
                <p className="text-gray-300">Leader</p>
                <p className="text-sm text-gray-400">2022.09 ~ 2023.07</p>
              </div>
              <div className="border-l-2 border-blue-400/70 pl-4">
                <h3 className="text-lg font-semibold text-blue-400/90">
                  CoMit: Programming Club
                </h3>
                <p className="text-gray-300">Leader</p>
                <p className="text-sm text-gray-400">2022.05 ~ 2023.08</p>
              </div>
              <div className="border-l-2 border-blue-400/50 pl-4">
                <h3 className="text-lg font-semibold text-blue-400/80">
                  SME: Industrial Engineering Student Union
                </h3>
                <p className="text-gray-300">Member</p>
                <p className="text-sm text-gray-400">2021.09 ~ 2022.06</p>
              </div>
            </div>
          </div>

          <div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-2xl">
                🏆
              </div>
              <h2 className="text-2xl font-bold text-white">Awards</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-pink-400 pl-4">
                <h3 className="text-lg font-semibold text-pink-400">KAMP</h3>
                <p className="text-gray-300">AI Manufacturing Data Analysis</p>
                <p className="text-sm text-gray-400">2022.10 ~ 2022.12</p>
              </div>
              <div className="border-l-2 border-pink-400/70 pl-4">
                <h3 className="text-lg font-semibold text-pink-400/90">MEC</h3>
                <p className="text-gray-300">
                  Columbia Business School - Finalist
                </p>
                <p className="text-sm text-gray-400">2020.02 ~ 2020.03</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
