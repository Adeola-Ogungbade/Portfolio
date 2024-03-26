import React from 'react'

const Tab = ({
    label,
    onClick,
    isActive
}) => {
  return (
      <div
          onClick={onClick}
          className={`tab font-bold md:text-[18px] text-xs  rounded-xl border-2 hover:bg-[#FFC961] hover:border-[#FFC961] hover:text-white border-[#002B6A] md:py-3 py-3 px-4 md:px-10 ${isActive? 'bg-[#002B6A] text-white' : 'text-[#002B6A]'}`}
      >
      {label}
    </div>
  )
}

export default Tab
