'use client'

import { usePathname } from 'next/navigation'
import { JSX } from 'react'

export default function Header(): JSX.Element {
  const pathname = usePathname() ?? ''

  return (
    <div className='sticky z-50 top-0 w-full lg:px-[20px] mx-auto '>
        <div className='w-full mx-auto bg-[#0A0A0A]'>
          <nav className="bg-[#0a0a0a] text-white flex justify-center items-center gap-[40px] py-[17px] h-[60px] ">
            <a
              href="/pt"
              className={`transition-all duration-200 ${
                pathname.startsWith('/pt')
                  ? 'font-bold text-white border-white'
                  : 'font-normal text-[#555555]'
              }`}
            >
              PT
            </a>
            <a
              href="/en"
              className={`transition-all duration-200 ${
                pathname.startsWith('/en')
                  ? 'font-bold text-white border-white'
                  : 'font-normal text-[#555555]'
              }`}
            >
              EN
            </a>
          </nav>
        </div>
    </div>
  )
}