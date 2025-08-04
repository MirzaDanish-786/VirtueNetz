import React from 'react'
// import GotoIcon from '@/assets/icons/Goto.svg'
import GotoIcon from '../icons/GotoIcon';
interface Props {

    label: string;
    is_bg_color: boolean;
}
const GotoButton = ({label, is_bg_color}: Props) => {
  return (
   <button className={`${is_bg_color ? 'bg-[#E84D00]' : 'bg-transparent'} rounded-[30px] text-white font-ibmplexmono text-base font-medium cursor-pointer px-5 py-3 flex gap-[10px] items-center max-xl:px-3 max-xl:py-1.5 max-xl:text-sm `} >
    <div>
        {label}
    </div>
    <div>
        <GotoIcon className={`${!is_bg_color && 'stroke-[#F37021]'} w-[15px] max-xl:w-2.5`}/>
    </div>
   </button>
  )
}

export default GotoButton
