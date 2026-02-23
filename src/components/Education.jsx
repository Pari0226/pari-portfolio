export default function Education() {
  const education = [
    {
      institution: 'Amity University Gwalior',
      profile: 'Profile',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      duration: 'Final Year • CGPA: 8.78',
      coursework: 'Relevant Coursework- Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, Machine Learning Fundamentals.',
      icon: '🎓'    },
    {
      institution: 'Sunbeam English School Bhagwanpur',
      profile: 'Class XII',
      degree: 'Senior Secondary Certificate (SSC)',
      field: 'Science Stream',
      duration: 'Percentage: 86.8%',
      coursework: 'Relevant Subjects- Physics, Chemistry, Mathematics, Computer Science, English.',
      icon: '📚'
    },
    {
      institution: 'Sant Atulanand Convent School',
      profile: 'Class X',
      degree: 'Secondary School Certificate',
      field: 'Science Stream',
      duration: 'Percentage: 90.8%',
      coursework: 'Relevant Subjects- Sciences, Social Studies, Mathematics, English, Hindi.',
      icon: '📖'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 text-2xl md:text-4xl">Education</h1>
        <div className="w-16 h-1 bg-[#FFF1A8]"></div>
      </div>

      <div className="space-y-0 relative">
        {/* Central vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFC8DD] via-[#FFC8DD] to-[#1F1F1F]"></div>

        {education.map((edu, index) => (
          <div key={index} className="relative pt-4 pb-6">
            {/* Education Card */}
            <div className="flex gap-6 overflow-hidden w-full">
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full border-2 border-[#FFC8DD] bg-[#111111] flex items-center justify-center text-xl flex-shrink-0 relative z-10">
                {edu.icon}
              </div>

              {/* Education Details */}
              <div className="flex-1 bg-[#0A0A0A] rounded-2xl border border-[#1F1F1F] p-6 min-w-0 overflow-hidden w-full">
                <div className="mb-3">
                  <h2 className="text-2xl font-bold text-white">{edu.institution}</h2>
                  <p className="text-[#FFC8DD] font-semibold text-sm">{edu.profile}</p>
                </div>

                <div className="space-y-1 mb-4">
                  <p className="text-[#FFF1A8] font-semibold">{edu.degree}</p>
                  <p className="text-[#FFF1A8]">{edu.field}</p>
                  <p className="text-[#FFF1A8] text-sm">{edu.duration}</p>
                </div>

                {/* Coursework */}
                <p className="text-[#A1A1A1] text-sm">
                  {edu.coursework}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
