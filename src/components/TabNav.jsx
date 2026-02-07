import React from 'react'

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            px-6 py-2 text-sm font-semibold transition-all rounded-full
            ${
              activeTab === tab
                ? 'text-black bg-[#FFC8DD]'
                : 'text-[#A1A1A1] bg-transparent hover:bg-[#FFF1A8]'
            }
          `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </>
  )
}
