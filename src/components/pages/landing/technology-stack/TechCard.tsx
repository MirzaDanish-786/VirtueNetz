import React from 'react'
import Image from 'next/image';

interface Props {
    techLogoSrc: string;
    techName: string;
}

const TechCard = ({techLogoSrc, techName}: Props) => {
  return (
    <div className='bg-[#F7F7F7] border flex items-center justify-between border-[#DEE9EE] p-[30px] rounded-[15px] max-2xl:pt-6 max-xl:p-4 max-md:px-3'>
      <div className='relative w-[50px] h-[50px] max-lg:w-10 max-lg:h-10 max-md:w-7 max-md:h-7'>
        <Image
        src={techLogoSrc}
        fill
        alt='tect_logo'
        />
      </div>
      <div className='font-ibmplexmono text-nowrap text-sm font-medium uppercase text-[#989CAA] max-md:text-[10px]'>
        {`[${techName}]`}
      </div>
    </div>
  )
}

export default TechCard
