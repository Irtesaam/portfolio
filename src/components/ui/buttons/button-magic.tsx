import React from 'react'

export default function ButtonMagic({
    title, icon, position, otherClasses }: {
        title: string,
        icon: React.ReactNode,
        position: string,
        handleClick?: () => void,
        otherClasses?: string
    }) {
    return (
        <div className='flex items-center justify-center w-[9.5rem] sm:w-fit'>
        <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:w-full">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-gray-200 px-7 text-sm font-medium dark:text-white text-black-500 backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
        </div>
    )
}
