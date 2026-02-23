import React, { useState, useRef, useEffect } from 'react'

export default function TabNav({ tabs, activeTab, onTabChange }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  return (
    <>
      {/* Desktop / larger screens: keep original layout */}
      <div className="hidden md:flex flex-nowrap gap-2 px-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-6 py-2 text-sm font-semibold transition-all rounded-full whitespace-nowrap ${
              activeTab === tab
                ? 'text-black bg-[#FFC8DD]'
                : 'text-[#A1A1A1] bg-transparent hover:bg-[#FFF1A8]'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Mobile: show hamburger which toggles a stacked dropdown */}
      <div className="flex md:hidden items-center px-2" ref={menuRef} style={{ WebkitOverflowScrolling: 'touch' }}>
        <button
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-white bg-transparent px-3 py-2 rounded-md"
          title="Menu"
        >
          ☰
        </button>

        {open && (
          <div className="absolute left-2 right-2 mt-14 bg-[#111111] border border-[#1F1F1F] rounded-lg p-2 z-50">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  onTabChange(tab)
                  setOpen(false)
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                  activeTab === tab
                    ? 'text-black bg-[#FFC8DD]'
                    : 'text-[#A1A1A1] bg-transparent hover:bg-[#FFF1A8]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
