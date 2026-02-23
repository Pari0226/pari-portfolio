import React, { useState } from 'react'
import Sidebar from './Sidebar'
import TabNav from './TabNav'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

export default function Layout() {
  const [activeTab, setActiveTab] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  const tabs = ['about', 'projects', 'experience', 'education', 'contact']

  return (
    <div className="min-h-screen flex items-center justify-center p-6 py-12 bg-[#FFC8DD] sm:overflow-x-hidden">
      {/* Centered Dashboard Card */}
      <div className="w-full max-w-6xl bg-[#111111] rounded-[60px] border border-[#1F1F1F] shadow-2xl p-8">
        <div className="flex sm:flex-col md:flex-row gap-8">
          {/* Left Column - Sidebar Card */}
          <div className="w-[30%] flex-shrink-0 sm:w-full md:w-[280px]">
            <div className="bg-[#111111] rounded-5xl border border-[#1F1F1F] p-4">
              <Sidebar />
            </div>
          </div>

          {/* Right Column - Content Area */}
          <div className="w-[70%]">
            {/* Tab Navigation - Pill Style */}
            <div className="mb-6">
              <div className="sm:flex items-center justify-between">
                <div className="sm:flex items-center">
                  <button
                    className="sm:flex md:hidden text-white text-2xl p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                  >
                    {menuOpen ? '✕' : '☰'}
                  </button>
                </div>

                <div className="bg-[#111111] rounded-full p-1 inline-flex border border-[#1F1F1F] sm:hidden md:inline-flex">
                  <TabNav 
                    tabs={tabs} 
                    activeTab={activeTab} 
                    onTabChange={setActiveTab}
                  />
                </div>
              </div>

              {menuOpen && (
                <div className="md:hidden mt-3 bg-[#111111] rounded-lg overflow-hidden">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => { setActiveTab(tab); setMenuOpen(false); }}
                      className={`w-full text-sm font-semibold py-3 px-6 text-left transition-all ${activeTab === tab ? 'text-black bg-[#FFC8DD]' : 'text-[#A1A1A1] bg-transparent hover:bg-[#FFF1A8]'}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Content Card */}
            <div className="bg-[#111111] rounded-3xl border border-[#1F1F1F] p-8">
              {activeTab === 'about' && <About />}
              {activeTab === 'experience' && <Experience />}
              {activeTab === 'education' && <Education />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'contact' && <Contact />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
