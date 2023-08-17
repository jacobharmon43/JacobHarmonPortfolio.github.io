import React from 'react';

import Grav1 from '../Media/Grav1.png'
import Grav2 from '../Media/Grav2.png'
import Grav3 from '../Media/Grav3.png'
import { ProjectTechnologies } from '../components/ProjectPage/ProjectTechnologies';
import { CarouselJH } from '../components/ProjectPage/CarouselJH';
import { PageGeneric } from '../components/PageGeneric/PageGeneric';

export class GravityProject extends PageGeneric {
  render() {
    return(
        <div className='px-8'>
            <CarouselJH images={[Grav1,Grav2,Grav3]}></CarouselJH>
            <div className='h-12'/>
            <iframe title="Gravity Itch Link" src="https://itch.io/embed/1311935" className='w-full bg-white'>
                <a href="https://dangerlinguine.itch.io/gravity">Gravity by Jacob Harmon, Emmett Mitchell, and others</a>
            </iframe>
            <div className='h-12'/>
            <p className='w-full text-center text-lg'> 
                Inspired by the GMOD blue gravity gun, gravity is an action adventure puzzle solving game. Created over the course of 2-3 months.
                For a longer description and to check the game out, view the link above!
            </p>
            <div className='h-12'/>
            <p className='w-full text-center text-3xl'>
                Technologies Utilized:
            </p>
            <ProjectTechnologies technologyList={['CSharp', 'Unity', 'Blender', 'PlasticSCM']}/>
            <div className='h-12'/>
        </div>
    )
  }
};
