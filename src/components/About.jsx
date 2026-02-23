import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      {/* Main Content Area */}
      <div>
        {/* Title Area */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-3">About Me</h1>
          <div className="w-12 h-1 bg-[#FFF1A8] rounded"></div>
        </div>

        {/* Description Paragraphs */}
        <div className="space-y-4 text-[#A1A1A1] leading-relaxed mb-8 text-sm">
          <p>
            I'm a final-year Computer Science student who enjoys building technology that feels human, not mechanical. I started with web development out of curiosity, but stayed because I loved the idea of turning blank screens into something useful and real. Over time, my interest grew toward <span className="text-white">AI and Generative AI</span> — understanding not just how to use models, but how they think, break, and improve.
          </p>
          <p>
            I work mostly with <span className="text-white">JavaScript, React, Python</span>, and AI-driven applications, focusing on projects that solve everyday problems rather than textbook demos. My <span className="text-white">Mood Tracker</span> project, for example, blends machine learning with mental health support — because I believe tech should care about people, not just performance.
          </p>
          <p>
            I'm not the "I know everything" developer. I'm the "I'll figure it out" one — the kind who reads docs at 2 AM, breaks code 20 times, and still comes back excited to fix it. Right now, I'm preparing for roles where I can grow in <span className="text-white">AI, software engineering, and product-driven development</span>.
          </p>
          <p>
            Beyond code, I value discipline, creativity, and honest effort. I want to build systems that are intelligent, accessible, and actually meaningful to users.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">What Am I Skilled At?</h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Skill Card 1 */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-6">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg border-2 border-[#FFC8DD] flex items-center justify-center text-2xl flex-shrink-0 bg-[#0A0A0A]">
                ⚛️
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Web Development</h3>
              </div>
            </div>
            <p className="text-[#A1A1A1] text-sm leading-relaxed">
              Building responsive, user-friendly interfaces with <span className="text-white font-semibold">JavaScript, React, HTML, CSS</span>. I focus on creating web experiences that are intuitive and meaningful to users.
            </p>
          </div>

          {/* Skill Card 2 */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-6">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg border-2 border-[#FFC8DD] flex items-center justify-center text-2xl flex-shrink-0 bg-[#0A0A0A]">
                🤖
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI & ML Development</h3>
              </div>
            </div>
            <p className="text-[#A1A1A1] text-sm leading-relaxed">
              Passionate about <span className="text-white font-semibold">AI and Generative AI</span>. Skilled in <span className="text-white font-semibold">Python</span> for building AI-driven applications that solve real-world problems, including mental health support systems.
            </p>
          </div>

          {/* Skill Card 3 */}
          <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-6">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg border-2 border-[#FFC8DD] flex items-center justify-center text-2xl flex-shrink-0 bg-[#0A0A0A]">
                📊
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Data Structures & Algorithms</h3>
              </div>
            </div>
            <p className="text-[#A1A1A1] text-sm leading-relaxed">
              Strong foundation in <span className="text-white font-semibold">DSA fundamentals</span> with expertise in designing efficient algorithms and optimizing solutions. <span className="text-white font-semibold">200+ LeetCode problems solved</span> and actively solving new challenges with <span className="text-white font-semibold">C++</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
