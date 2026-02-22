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

  const tabs = ['about', 'projects', 'experience', 'education', 'contact']

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex items-center justify-center p-4 md:p-6 md:py-12 bg-[#FFC8DD]">
      {/* Centered Dashboard Card */}
      <div className="w-full max-w-6xl bg-[#111111] rounded-[60px] border border-[#1F1F1F] shadow-2xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Left Column - Sidebar Card */}
          <div className="w-full md:w-[280px] flex-shrink-0 mb-4 md:mb-0">
            <div className="bg-[#111111] rounded-5xl border border-[#1F1F1F] p-4">
              <Sidebar />
            </div>
          </div>

          {/* Right Column - Content Area */}
          <div className="flex-1">
            {/* Tab Navigation - Pill Style */}
            <div className="mb-6">
              <div className="bg-[#111111] rounded-full p-1 inline-flex border border-[#1F1F1F] overflow-x-auto flex-nowrap">
                <TabNav 
                  tabs={tabs} 
                  activeTab={activeTab} 
                  onTabChange={setActiveTab}
                />
              </div>
            </div>
            {/* Content Card */}
            <div className="bg-[#111111] rounded-3xl border border-[#1F1F1F] p-4 md:p-8">
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
