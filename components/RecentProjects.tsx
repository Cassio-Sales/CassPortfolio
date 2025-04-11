import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { TypewriterEffect } from './ui/Typewriter'

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <TypewriterEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words={[
          { text: 'My' },
          { text: 'recent' },
          { text: 'projects', className: 'text-purple-500' }
        ]}
      />

      {/* GAP ZERADO NO MOBILE, NORMAL NO DESKTOP */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-0 gap-y-6 sm:gap-x-24 sm:gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[50vh] sm:h-[41rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              {/* sm:relative RESTAURADO para o desktop */}
              <div className="relative sm:relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-auto">
                {/* Imagem de fundo */}
                <div className="absolute inset-0 w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] z-0">
                  <img
                    src="/bg.png"
                    alt="bg-img"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Imagem principal */}
                <img
                  src={img}
                  alt={title}
                  className="w-full h-auto sm:h-full relative sm:absolute object-contain sm:object-cover sm:object-center sm:inset-0 z-10"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-4">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
