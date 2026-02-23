import React from 'react'

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <>
      <div className="flex flex-nowrap overflow-x-auto scrollbar-hide w-full max-w-full gap-2 px-2" style={{ WebkitOverflowScrolling: 'touch' }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 py-2 text-sm font-semibold transition-all rounded-full whitespace-nowrap flex-shrink-0 ${
              activeTab === tab
                ? 'text-black bg-[#FFC8DD]'
                : 'text-[#A1A1A1] bg-transparent hover:bg-[#FFF1A8]'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </>
  )
}
