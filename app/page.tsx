export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div
          className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 text-center space-y-4 md:space-y-8">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient mb-2 md:mb-4">
            aptheparker
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-8">
            Full Stack Developer & Blockchain Enthusiast
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 md:gap-6 animate-fadeIn"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="/about"
            className="group relative px-4 py-2 md:px-8 md:py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="text-white text-sm md:text-lg font-semibold">About Me</span>
          </a>
          <a
            href="/experience"
            className="group relative px-4 py-2 md:px-8 md:py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <span className="text-white text-sm md:text-lg font-semibold">Experience</span>
          </a>
          <a
            href="/dev"
            className="group relative px-4 py-2 md:px-8 md:py-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
          >
            <span className="text-white text-sm md:text-lg font-semibold">Dev Skills</span>
          </a>
          <a
            href="/contact"
            className="group relative px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="text-white text-sm md:text-lg font-semibold">Contact</span>
          </a>
        </div>

        <div
          className="mt-6 md:mt-12 animate-fadeIn"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex justify-center gap-4 md:gap-6">
            <a
              href="https://linkedin.com/in/aptheparker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5c0-1.191-.809-2-2-2s-2 .809-2 2v5h-3v-10h3v1.354c.831-.966 2.019-1.354 3-.354s1.969 2 .969 3z" />
              </svg>
            </a>
            <a
              href="https://github.com/aptheparker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/aptheparker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.243 1.31 3.608.058 1.266.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.243 1.248-3.608 1.31-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.243-1.31-3.608C2.175 15.747 2.163 15.368 2.163 12s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.31-3.608C0 .334-.273 0 .702 0c1 .001 2 .001 4 .001zm0-2C8 .001 7 .001 5 .002c-2 .001-3 .001-4 .002C0 .003-.667-.002-.667-.002S0 .001 5 .001s5-.002 5-.002S12 .001 7 .002c-2 .001-3 .001-4 .002zM12 5a7 7 0 100 14A7 7 0 0012 5zm0-2a9 9 0 110 18A9 9 0 0112 3zm6 .75a1.5 1.5 0 11-3 .001A1.5 1.5 0 0118 .75z" />
              </svg>
            </a>
            <a
              href="mailto:aptheparker@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
