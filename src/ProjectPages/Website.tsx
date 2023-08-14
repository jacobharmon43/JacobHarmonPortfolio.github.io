import React from 'react';

import { ProjectTechnologies } from '../components/ProjectPage/ProjectTechnologies';

export class PortfolioProject extends React.Component {
  render() {
    return(
        <div className='px-8 text-monokaiYellow'>
            <div className='h-12'/>
            <p className='w-full text-center text-lg'> 
                You're already on the website, click around! It was all handmade, so ignore the engineer look. I don't have a UX team.
            </p>
            <div className='h-12'/>
            <p className='w-full text-center text-3xl'>
                Technologies Utilized:
            </p>
            <ProjectTechnologies technologyList={['ReactJS', 'Tailwindcss', 'HTML', 'Typescript']}/>
            <div className='h-12'/>
        </div>
    )
  }
};
