'use client'
import React from 'react'
// import LearnMoreGotoIcon from '@/assets/icons/LearnMoreGoto.svg'
import LearnMoreGotoIcon from '../icons/LearnMoreGotoIcon'
const BtnLearnMore = () => {
  return (
    <button className='flex gap-4 items-center max-lg:text-sm max-lg:gap-3 max-md:gap-2'>
        <div>
            Learn More
        </div>
        <div>
            <LearnMoreGotoIcon className={'w-9 max-lg:w-7 max-md:w-5'}/>
        </div>
    </button>
  )
}

export default BtnLearnMore
