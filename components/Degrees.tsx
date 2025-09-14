import React from 'react'
import Image from 'next/image'

const Degrees = () => {
  return (
    <div className="mx-auto max-w-3xl grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-24 items-center justify-items-center px-4">
      <div className="relative w-20 h-12 sm:w-28 sm:h-16 md:w-40 md:h-20 lg:w-60 lg:h-20">
        <Image
          src="/images/Harvard.png"
          alt="Harvard"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-20 h-12 sm:w-28 sm:h-16 md:w-40 md:h-20 lg:w-60 lg:h-20">
        <Image
          src="/images/LSE.png"
          alt="LSE"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-20 h-12 sm:w-28 sm:h-16 md:w-40 md:h-20 lg:w-60 lg:h-20">
        <Image
          src="/images/Stanford.png"
          alt="Stanford"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Degrees