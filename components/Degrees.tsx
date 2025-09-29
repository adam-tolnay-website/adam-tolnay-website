import React from 'react'
import Image from 'next/image'

const Degrees = () => {
  return (
    <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-items-center px-4">
      <div className="relative w-32 h-20 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28">
        <Image
          src="/images/Harvard.png"
          alt="Harvard"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-32 h-20 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28">
        <Image
          src="/images/LSE.png"
          alt="LSE"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-32 h-20 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28">
        <Image
          src="/images/georgetown.png"
          alt="Georgetown"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-32 h-20 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28">
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