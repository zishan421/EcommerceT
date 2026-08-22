import React from 'react'

const CountDown = ({Days,Hours,Minutes,Seconds, compact = false}) => {
    return (
    <>
        <div className={`flex items-center ${compact ? 'gap-2 md:gap-9.5' : 'gap-9.5'}`}>
        <div>
                        <h3 className='text-[9px] font-medium md:text-xs'>Days</h3>
                        <h2 className='text-xl font-bold md:text-3xl'>{Days}</h2>
        </div>
        <div>
                        <h3 className='text-[9px] font-medium md:text-xs'>Hours</h3>
                        <h2 className='text-xl font-bold md:text-3xl'>{Hours}</h2>
        </div>
        <div>
                        <h3 className='text-[9px] font-medium md:text-xs'>Minutes</h3>
                        <h2 className='text-xl font-bold md:text-3xl'>{Minutes}</h2>
        </div>
        <div>
                        <h3 className='text-[9px] font-medium md:text-xs'>Seconds</h3>
                        <h2 className='text-xl font-bold md:text-3xl'>{Seconds}</h2>
        </div>
    </div>
    </>
  )
}

export default CountDown