import React from 'react'

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <>
      <div className="w-full max-w-full px-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              inline-block px-4 py-2 text-sm font-semibold transition-all rounded-full whitespace-nowrap mr-2
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
      </div>
    </>
  )
}
