export default function Projects() {
  const projects = [
    {
      title: 'SafeWay',
      description: 'Women Safety Route Recommendation System',
      icon: '🛡️',
      bullets: [
        'Built real-time safety-focused navigation app with JWT authentication and email/password signup',
        'Implemented multi-factor safety scoring algorithm combining crime statistics, women safety indices, area type detection, time-of-day multipliers, and population density heuristics',
        'Integrated OpenStreetMap Nominatim API for real-time location autocomplete with debounced suggestions and fallback query strategies',
        'Fetched multiple routes using OpenRoute Service API and ranked them by computed safety scores',
        'Built interactive map visualization using React Leaflet with color-coded polylines (green/yellow/red), custom markers, auto-fitted bounds, and pin-drop feature',
        'Developed emergency contact CRUD system with SOS alerts triggered via Twilio SMS integration for real-time notifications',
        'Engineered token-based auth with auto-logout on 401 errors, persistent user sessions, and localStorage token management'
      ],
      tech: 'React, Leaflet, Node.js, PostgreSQL, OpenStreetMap, OpenRoute Service, Twilio',
      liveLink: 'https://safe-way.vercel.app/login',
      githubLink: 'https://github.com/Pari0226/SafeWay',
      videoLink: 'https://drive.google.com/file/d/1Xuf6poTiHZzewLBzmrv5kQBKenHkme__/view'
    },
    {
      title: 'MindSpace',
      description: 'AI-Powered Mood Tracking & 7-Day Mood Predictor',
      icon: '🧠',
      bullets: [
        'Developed full-stack Flask application with multi-modal emotion detection (facial CNN, text NLP, voice sentiment analysis)',
        'Real-time facial emotion detection using Keras CNN recognizing 7 emotion classes (Angry, Disgust, Fear, Happy, Neutral, Sad, Surprise)',
        'Implemented text emotion analysis using TF-IDF vectorization + scikit-learn Linear Regression classifier on journal entries',
        'Created 7-day mood prediction engine with baseline calculation from last 7 entries, weekday pattern clustering, polynomial trend detection, and context-aware trigger weighting',
        'Built confidence scoring system [0.3-0.95 range] based on data volume, weekday patterns, and historical entry consistency',
        'Developed trigger detection system with 11 weighted emotional triggers (exercise, stress, social, etc.) with ±0.4 score adjustments',
        'Engineered personalized insights generation showing best/worst days, trigger patterns, consistency bonuses, and AI-generated recommendations',
        'Created responsive analytics dashboard with calendar visualization, pie charts for emotion distribution, mood streaks, and real-time journal processing'
      ],
      tech: 'Flask, SQLAlchemy, Keras, OpenCV, scikit-learn, TextBlob, Tailwind CSS',
      liveLink: 'https://github.com/Pari0226/MindSpace',
      githubLink: 'https://github.com/Pari0226/MindSpace',
      videoLink: 'https://drive.google.com/file/d/12DqdVPHE6poTWr1ui2zGg7H_MiFS_F8t/view'
    },
    {
      title: 'PhishNet',
      description: 'Real-Time Phishing URL Detection System',
      icon: '🎣',
      bullets: [
        'Developed full-stack ML web application that analyzes URLs in real-time by extracting 30 advanced lexical, domain, and content-based features',
        'Integrated BeautifulSoup HTML parsing, regex-based pattern matching, WHOIS domain lookups, Google search index verification, and Alexa traffic ranking analysis',
        'Trained GradientBoostingClassifier from scikit-learn on 11,054 labeled URLs with 30 features per sample, achieving instant binary classification (phishing vs. legitimate)',
        'Built responsive Tailwind CSS frontend with gradient animations, real-time form validation, and conditional results display (green = safe, red = phishing warning)',
        'Engineered adaptive model loading system that auto-detects file paths across development, local, and production environments (Render.com deployment)',
        'Created automated model retraining pipeline using joblib serialization for quick model updates; supports both pre-extracted features and raw URL datasets'
      ],
      tech: 'Flask, scikit-learn, GradientBoosting, BeautifulSoup, WHOIS, Tailwind CSS, Gunicorn, SQLite, joblib',
      liveLink: 'https://phishnet-app.onrender.com/',
      githubLink: 'https://github.com/Pari0226/PhishNet',
      videoLink: 'https://drive.google.com/file/d/1OGcGCgF_rrAO3moFFJwew9nF8hGP4WC5/view'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <div className="w-16 h-1 bg-[#FFF1A8]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#0A0A0A] rounded-3xl border border-[#1F1F1F] p-4 md:p-6">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg border border-[#FFC8DD] bg-[#111111] flex items-center justify-center text-2xl flex-shrink-0">
                {project.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
                <p className="text-[#A1A1A1] text-sm mb-4">{project.description}</p>
                
                {/* Bullet Points */}
                <ul className="space-y-2 mb-4">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#A1A1A1] text-sm flex gap-3">
                      <span className="text-[#FFC8DD] flex-shrink-0">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mb-4 pb-4 border-b border-[#1F1F1F]">
                  <p className="text-xs text-[#A1A1A1] mb-2">
                    <span className="font-semibold text-white">Tech Stack:</span> {project.tech}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 items-center">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#FFF1A8] text-black rounded-full font-semibold text-sm hover:bg-[#FFC8DD] transition-colors">
                    View Project
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#1F1F1F] bg-[#111111] hover:bg-[#1F1F1F] transition-colors flex items-center justify-center" title="GitHub Repository">
                    <svg className="w-5 h-5 text-[#A1A1A1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#1F1F1F] bg-[#111111] hover:bg-[#1F1F1F] transition-colors flex items-center justify-center" title="Video Demo">
                    <svg className="w-5 h-5 text-[#A1A1A1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
