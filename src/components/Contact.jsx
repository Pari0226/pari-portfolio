export default function Contact() {
  const contactMethods = [
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/pari-singh-2b29aa255/',
      handle: 'linkedIn'
    },
    {
      platform: 'Gmail',
      icon: '✉️',
      url: 'mailto:singhpari94533@gmail.com',
      handle: 'singhpari94533@gmail.com'
    },
    {
      platform: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/Pari0226',
      handle: '@Pari0226'
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 text-2xl md:text-4xl">Contact</h1>
        <div className="w-16 h-1 bg-[#FFF1A8]"></div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-[#0A0A0A] rounded-3xl border border-[#1F1F1F] p-8">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Details</h2>
        <p className="text-[#A1A1A1] mb-8 text-lg">Feel free to reach out via any of the following platforms:</p>

        {/* Contact Methods List */}
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl border border-[#1F1F1F] bg-[#111111] hover:bg-[#1F1F1F] hover:border-[#FFC8DD] transition-all group min-w-0 overflow-hidden"
            >
              <div className="w-10 h-10 rounded-lg border border-[#FFC8DD] bg-[#0A0A0A] flex items-center justify-center text-xl group-hover:bg-[#FFC8DD] group-hover:text-black transition-colors">
                {method.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">{method.platform}</h3>
                <p className="text-[#A1A1A1] text-sm break-all">{method.handle}</p>
              </div>
              <svg className="w-5 h-5 text-[#FFC8DD] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Additional Message */}
      <div className="bg-[#0A0A0A] rounded-3xl border border-[#1F1F1F] p-8">
        <p className="text-[#A1A1A1] text-center">
          I'm always open to new opportunities and interesting projects.
        </p>
      </div>
    </div>
  )
}
