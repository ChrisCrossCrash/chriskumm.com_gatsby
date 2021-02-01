import React from 'react'

interface Props {
  title: string
  skills: string[]
  image: string
}

const SkillSection: React.FC<Props> = ({title, skills, image}) => (
  <div
    style={{backgroundColor: '#00000044'}}
    className='flex flex-col items-center glass'
  >
    <img
      src={image}
      alt={title}
      className='w-1/2 mt-3 mb-5'
      width='184px'
      height='184px'
    />
    <h1 className='uppercase text-2xl tracking-widest mb-3'>{title}</h1>
    <div className='flex flex-col items-center mb-7 leading-relaxed'>
      {skills.map(item => (
        <div className='uppercase' key={item}>{item}</div>
      ))}
    </div>
  </div>
)

export default SkillSection