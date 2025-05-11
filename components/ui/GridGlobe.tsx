'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const World = dynamic(() => import('./Globe').then(m => m.World), {
  ssr: false
})

export function GlobeDemo() {
  const [isMobile, setIsMobile] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // Garante que estamos no client
    setHasMounted(true)

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (!hasMounted) return null // Evita renderização antes do client

  const globeConfig = {
    pointSize: 4,
    globeColor: '#062056',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5
  }

  const sampleArcs = [
    {
      order: 1, // ← ADICIONADO
      startLat: 0,
      startLng: 0,
      endLat: 10,
      endLng: 10,
      arcAlt: 0.1,
      color: '#06b6d4'
    }
  ]
    

  return (
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full ">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden px-4 h-96">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          {!isMobile && <World data={sampleArcs} globeConfig={globeConfig} />}
        </div>
      </div>
    </div>
  )
}
