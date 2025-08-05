import React from 'react'
import Image from 'next/image';

interface Props {
    techLogoSrc: string;
    techName: string;
}

const TechCard = ({techLogoSrc, techName}: Props) => {
  return (
    <div className='bg-[#F7F7F7] border flex items-center justify-between border-[#DEE9EE] p-[30px] rounded-[15px]'>
      <div className='relative w-[50px] h-[50px]'>
        <Image
        src={techLogoSrc}
        fill
        alt='tect_logo'
        />
      </div>
      <div className='font-ibmplexmono text-sm font-medium uppercase text-[#989CAA]'>
        {`[${techName}]`}
      </div>
    </div>
  )
}

export default TechCard
