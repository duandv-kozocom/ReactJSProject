import React from 'react'

export default function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="text-h1 pb-[9px] mt-10 mb-5 border-b border-[#eee]">{children}</h1>
}
