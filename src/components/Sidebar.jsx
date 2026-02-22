import React from 'react'

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 w-full md:w-[280px] items-center md:items-start">
      {/* Profile Image Card */}
      <div className="bg-[#1F1F1F] rounded-2xl border border-[#1F1F1F] overflow-hidden aspect-[3/4] flex items-center justify-center w-full">
        <img 
          src="/profile.jpg" 
          alt="Pari" 
          className="w-32 h-32 md:w-full md:h-full object-cover mx-auto"
        />
      </div>

      {/* Name Block */}
      <div className="text-center md:text-left w-full">
        <h2 className="text-xl md:text-xl font-bold text-white mb-0.5">Pari Singh</h2>
        <p className="text-xs text-[#A1A1A1] mb-2">B.Tech – Computer Science & Engineering</p>
      </div>

      {/* Education Badges */}
      <div className="flex flex-col gap-2 text-sm w-full">
        <div className="text-[#A1A1A1] leading-tight">
          <p className="font-semibold text-white text-xs">Amity University Gwalior</p>
          <p className="text-xs text-[#A1A1A1]">Final Year • CGPA: 8.78</p>
        </div>
      </div>

      {/* Social Icons & CV Button Row */}
      <div className="flex items-center gap-2 pt-2 w-full">
        <a href="https://github.com/Pari0226" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded border border-[#1F1F1F] bg-transparent hover:bg-[#1F1F1F] transition-colors flex items-center justify-center flex-shrink-0" title="GitHub">
          <svg className="w-4 h-4 text-[#A1A1A1] hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/pari-singh-2b29aa255/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded border border-[#1F1F1F] bg-transparent hover:bg-[#1F1F1F] transition-colors flex items-center justify-center flex-shrink-0" title="LinkedIn">
          <svg className="w-4 h-4 text-[#A1A1A1] hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.733 0-9.642h3.554v1.364c.429-.647 1.175-1.570 2.860-1.570 2.089 0 3.653 1.362 3.653 4.292v5.556zM5.337 9.433c-1.144 0-1.915-.755-1.915-1.699 0-.943.77-1.699 1.915-1.699 1.144 0 1.915.756 1.915 1.699 0 .944-.771 1.699-1.915 1.699zm1.616 11.019H3.721V9.81h3.232v10.642zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
          </svg>
        </a>
        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto py-2 px-3 rounded-lg bg-[#FFC8DD] text-black text-xs font-semibold hover:bg-opacity-90 transition-all text-center">
          View CV
        </a>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1F1F1F] my-1"></div>

      {/* Email Block */}
      <div className="flex items-start gap-2">
        <div className="w-5 h-5 text-[#FFC8DD] mt-0.5 flex-shrink-0 text-lg">✉️</div>
        <div>
          <p className="text-xs font-semibold text-[#A1A1A1] uppercase tracking-wide">Email</p>
          <p className="text-xs text-white truncate">singhpari94533@gmail.com</p>
        </div>
      </div>

      {/* Phone Block */}
      <div className="flex items-start gap-2">
        <div className="w-5 h-5 text-[#FFC8DD] mt-0.5 flex-shrink-0 text-lg">📱</div>
        <div>
          <p className="text-xs font-semibold text-[#A1A1A1] uppercase tracking-wide">Phone</p>
          <p className="text-xs text-white">+91-6388198752</p>
        </div>
      </div>

      {/* Location Block */}
      <div className="flex items-start gap-2">
        <div className="w-5 h-5 text-[#FFC8DD] mt-0.5 flex-shrink-0 text-lg">📍</div>
        <div>
          <p className="text-xs font-semibold text-[#A1A1A1] uppercase tracking-wide">Location</p>
          <p className="text-xs text-white">Varanasi, Uttar Pradesh</p>
        </div>
      </div>
    </div>
  )
}
