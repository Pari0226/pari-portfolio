export default function Experience() {
  const experiences = [
    {
      company: 'Quecksilber Technologies Private Limited',
      title: 'Developer Intern',
      type: '💼',
      duration: 'Feb 2026 - Present',
      location: 'Remote',
      bullets: [
        'Developing web applications and contributing to product features as part of the development team',
        'Working on full-stack development tasks and collaborating with cross-functional teams',
        'Gaining hands-on experience with modern web technologies and development practices',
        'Learning industry best practices and improving technical skill set through real-world projects'
      ]
    },
    {
      company: 'QRowd x Studio',
      title: 'Web Developer Intern',
      type: '🌐',
      duration: 'Jan 2026 - Present',
      location: 'Remote',
      bullets: [
        'Building responsive web applications using React and modern JavaScript frameworks',
        'Implementing frontend features and improving user interface/user experience design',
        'Collaborating with backend team to integrate APIs and ensure seamless data flow',
        'Participating in code reviews and learning best practices in web development'
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 text-2xl md:text-4xl">Experience</h1>
        <div className="w-16 h-1 bg-[#FFF1A8]"></div>
      </div>

      <div className="space-y-0 relative">
        {/* Central vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFC8DD] via-[#FFC8DD] to-[#1F1F1F]"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pt-4 pb-6">
            {/* Experience Card */}
            <div className="flex gap-6">
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full border-2 border-[#FFC8DD] bg-[#111111] flex items-center justify-center text-xl flex-shrink-0 relative z-10">
                {exp.type}
              </div>

              {/* Experience Details */}
              <div className="flex-1 bg-[#0A0A0A] rounded-2xl border border-[#1F1F1F] p-6">
                <div className="mb-2">
                  <h2 className="text-2xl font-bold text-white">{exp.company}</h2>
                  <p className="text-[#FFC8DD] font-semibold text-sm">{exp.title}</p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm">
                  <span className="text-[#FFF1A8]">{exp.duration}</span>
                  <span className="hidden sm:inline text-[#1F1F1F]">•</span>
                  <span className="text-[#A1A1A1]">{exp.location}</span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#A1A1A1] text-sm flex gap-3">
                      <span className="text-[#FFC8DD] flex-shrink-0">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
