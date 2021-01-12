import React from 'react'
import SectionHeading from '../components/SectionHeading'
import SkillSection from '../components/SkillSection'
import browserIcon from '../images/iconfinder_browser_2955254.svg'
import serverIcon from '../images/iconfinder_machines_2955248.svg'

const About = () => {
  return (
    <div
      id='skills'
      className='bg-indigo-900 text-white py-16 relative'
      style={{
        clipPath: 'polygon(0 10vh, 100% 0%, 100% calc(100% - 10vh), 0% 100%)',
        paddingBottom: '10vh',
      }}
    >

      <div className='container max-w-screen-lg mx-auto px-5 pb-5'>
        <SectionHeading>Full Stack Solutions</SectionHeading>
        <div className='leading-relaxed'>
          <p className='mb-5'>
            When you bring your business online, It helps to have a smart and innovative partner at your side. I work collaboratively with my clients to make the products that they want, and I feel a sense of shared pride when I deliver on my promises. I value each and every one of my clients, and I provide them with the honesty, integrity, and respect that they deserve.
          </p>
          <p className='mb-20'>
            Far from cookie cutter designs, my websites feature complex animations, custom database functionality, and online payments - but websites are just part of what I do. Custom email templates? I can do that. Maybe you want to send your clients an SMS message to remind them of that upcoming event they signed up for? I can do that too.
          </p>
        </div>

        {/* skill cards */}
        <div className='grid gap-8 sm:grid-cols-2 max-w-screen-md mx-auto'>
          {/* TODO: Query these skills, rather than edit them here */}
          <SkillSection
            title='Front End'
            skills={['React | Gatsby', 'Tailwind CSS | Formik', 'Sass | GreenSock']}
            image={browserIcon}
          />
          <SkillSection
            title='Back End'
            skills={['Django | REST | VPS', 'Ubuntu | uWSGI | NGINX', 'AWS | Stripe']}
            image={serverIcon}
          />
        </div>
      </div>

    </div>
  )
}

export default About