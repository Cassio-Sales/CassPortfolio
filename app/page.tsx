//import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
//import RecentProjects from "@/components/RecentProjects";
import Approach from "@/components/ui/Approach";
import Clients from "@/components/ui/Clients";
import Experience from "@/components/ui/Experience";

import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import { navItems } from "@/data";

import dynamic from 'next/dynamic'

const RecentProjects = dynamic(() => import('../components/RecentProjects'), {
  ssr: false
})

const Grid = dynamic(() => import('../components/Grid'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={ navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer/>
      </div>
    </main>
  )
}
