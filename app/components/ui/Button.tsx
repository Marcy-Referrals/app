
'use client'
import {useState, useEffect, useRef} from 'react'

function Button({ text }: { text: string }) {
    const [hovered, setHovered] = useState<boolean>(false)
    const bgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
       hovered?  bgRef.current!.style.transform = 'translateX(0%)' : bgRef.current!.style.transform = 'translateX(-100%)'
    }, [hovered])
  return (
    <div className='w-[10rem] m-auto' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
  <div className="m-auto overflow-hidden relative border-[0.2rem] z-[1000] hover:text-white duration-300 backdrop-blur w-[12rem] border-[#261f1d] py-2 font-bold text-center">
    <span className="relative z-[10]">{text}</span>  {/* Higher z-index for the text */}
    <div ref={bgRef} className='absolute translate-x-[-100%] z-[2] duration-300 inset-0 bg-[#261f1d] w-full h-full'></div>
  </div>
</div>
  );
}

export default Button;
