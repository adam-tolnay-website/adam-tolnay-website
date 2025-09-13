import React from 'react'
import Image from 'next/image'

const Degrees = () => {
  return (
    <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative w-[200px] h-[100px] mx-auto md:mx-0">
                <Image
                    src="/images/Harvard.png"
                    alt="Degrees"
                    fill
                    className="object-contain rounded-lg"
                />
            </div>
            <div className="relative w-[200px] h-[100px] mx-auto md:mx-0">
                <Image
                    src="/images/LSE.png"
                    alt="Degrees"
                    fill
                    className="object-contain rounded-lg"
                />
            </div>
            <div className="relative w-[200px] h-[100px] mx-auto md:mx-0">
                <Image
                    src="/images/Stanford.png"
                    alt="Degrees"
                    fill
                    className="object-contain rounded-lg"
                />
            </div>
    </div>
  )
}

export default Degrees