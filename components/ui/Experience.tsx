import { workExperience } from '@/data'
import React from 'react'
import { Button } from './MovingBorders'

if (typeof window !== 'undefined') {
  require('typeface-inter')
}

const Experience = () => {
  return (
    <div className="py-20" id="tetimonials">
      <h1 className="heading">
        
        <span className="text-purple"> Certificates</span>
      </h1>
      <div className="w-full mt-12 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(card => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius="2rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="relative w-full pb-[60%]">
              {' '}
              {/* Diminuindo mais pela metade */}
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="absolute inset-0 w-full h-full object-cover rounded-lg "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h1 className="text-sm font-bold text-white text-center">
                  {' '}
                  {/* Fonte mantida */}
                  {card.title}
                </h1>
                <p className="mt-2 text-white text-xs font-semibold text-center">
                  {' '}
                  {/* Texto mantido */}
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience
