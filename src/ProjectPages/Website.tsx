import React from 'react';

import { ProjectTechnologies } from '../components/ProjectPage/ProjectTechnologies';
import { PageGeneric } from '../components/PageGeneric/PageGeneric';

export class PortfolioProject extends PageGeneric {
  render() {
    return(
        <div className='px-8'>
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
