import Typewriter from '@/components/Typewriter'
import Image from 'next/image'

export default function Home() {
  return (
    <div
    className='   content-center   items-center justify-center grid     place-items-center '>
        <h1 className='text-xl md:text-5xl '>
        HELLO,&nbsp;
        <Typewriter textclass='text-[#1b96f3]' cursorclass='bg-[#1b96f3]'
                    text="WORLD!,GOOD DAY"
                    writeDelay={120} readDelay={1000} eraseDelay={70}/>
        </h1>
    </div>
  )
}
