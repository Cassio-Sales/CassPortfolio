'use client'
import React from 'react'
import { CanvasRevealEffect } from '@/components/ui/CanvasRevealEffect'
import { TypewriterEffect } from './Typewriter'

const Approach = () => {
  return (
    <section className="w-full py-20">
      <div className="py-20" id="">
        <TypewriterEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words={[
            { text: 'My' },
            { text: 'Approach', className: 'purple' }
          ]}
        />
      </div>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning & Strategy"
          //icon={<AceternityIcon order="Phase 1" />}
          description="In collaboration with our UX/UI designer Nathaly, we define the application's goals, target users, and overall user experience. I then organize the project structure and prepare the development environment for a clean and scalable workflow."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          title="Development & Progress Update"
          //icon={<AceternityIcon order="Phase 2" />}
          description="I translate the design into responsive interfaces, build reusable components, and integrate APIs or external data as needed, ensuring consistency with the design vision. I also implement state management and routing to create a seamless user experience. Regular progress updates are provided to ensure alignment with the project goals."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249]
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Testing and Deployment"
          //icon={<AceternityIcon order="Phase 3" />}
          description="The application is tested across different devices and browsers to ensure functionality and performance. Once approved, it is deployed to a production environment using a hosting platform such as Vercel."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

const Card = ({
  title,
  //icon,
  children,
  description
}: {
  title: string
  //icon: React.ReactNode
  children?: React.ReactNode
  description: string
}) => {
  return (
    <div className="border border-black/[0.2] flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div className="h-full w-full absolute inset-0">{children}</div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-4">{}</div>
        <h2 className="text-white mt-4 font-bold text-3xl">{title}</h2>
        <p className="text-white mt-4 text-sm">{description}</p>
      </div>
    </div>
  )
}

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
          {order}
        </span>
      </button>
    </div>
  )
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

export default Approach
