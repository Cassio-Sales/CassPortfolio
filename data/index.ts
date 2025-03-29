export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' }
]

export const gridItems = [
  {
    id: 1,
    title: ' Delivering solutions with a side of creativity',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: ''
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-3',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: ''
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-3',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: ''
  },
  {
    id: 4,
    title: 'Software engineer with a passion for development.',
    description: '',
    className: 'lg:col-span-3 md:col-span-4 md:row-span-2 h-auto',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b5.svg'
  },

  {
    id: 5,
    title: 'I am currently looking for a position as a Front-End developer',
    description: '',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 sm:hidden md:block md:w-96 w-60 ',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/grid.svg',
    spareImg: '/grid.svg'
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: ''
  }
]

export const projects = [
  {
    id: 1,
    title: '3D Portfolio',
    des: 'This project gave me experience working with 3D modules using React, Three.js, and EmailJS.',
    img: '/p1.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg'],
    link: 'https://3-d-porfolio-lac.vercel.app/'
  },
  {
    id: 2,
    title: 'Beauty Salon',
    des: 'Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.',
    img: '/p2.png',
    iconLists: ['/js.svg', 'html.svg', 'css.svg'],
    link: 'https://cassio-sales.github.io/BeautySaloon/'
  },
  {
    id: 3,
    title: 'Cass Timer',
    des: 'A simple pomodoro timer to help you stay focused and productive.',
    img: '/p3.png',
    iconLists: ['/re.svg', 'css.svg', '/ts.svg'],
    link: 'https://cass-timer.vercel.app/'
  },
  {
    id: 4,
    title: 'Portfolio landing page',
    des: 'A simple portfolio landing page to showcase my work and skills.',
    img: '/p4.png',
    iconLists: ['/html.svg', '/css.svg', 'js.svg'],
    link: 'https://cassio-sales.github.io/PortfolioJS/'
  }
]

export const testimonials = [
  {
    quote:
      "Collaborating with Cassio was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
    name: 'Nathaly ',
    title: 'Director at Naths Design'
  },
  {
    quote:
      "Collaborating with Cassio was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cassio's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cassio is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  },
  {
    quote:
      "Collaborating with Cassio was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Cassio's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Cassio is the ideal partner.",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies'
  },
  
]

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg'
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg'
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg'
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg'
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg'
  }
]

export const workExperience = [
  {
    id: 1,
    //title: 'Frontend Engineer Intern',
    //desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: 'hooks.png'
  },
  {
    id: 2,
    //title: 'Mobile App Dev - JSM Tech',
    //desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: 'react-fundamentals.png'
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/javascript.png'
  },
  {
    id: 4,
    //title: 'Lead Frontend Developer',
    //desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/responsive.png'
  }
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg'
  },
  
  {
    id: 3,
    img: '/link.svg'
  }
]
