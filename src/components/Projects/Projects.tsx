import React from 'react';
import { Link } from 'react-router-dom';


import GravityLogo from '../../Media/GravityLogo.png'
import ReactJS from '../../Media/ReactJS.png'
import { PageGeneric } from '../PageGeneric/PageGeneric';

export class Projects extends PageGeneric{
  render(): React.ReactNode{ 
    return(
      <div className = "mx-8 h-128 grid auto-cols-max gap-1 grid-cols-3 md:grid-cols-4 bg-textOld">
        <ProjectNode title="Gravity" img = {GravityLogo} to='/Gravity'/>
        <ProjectNode title="Portfolio Site" img = {ReactJS}  to='/Portfolio'/>
      </div>
    )
  }
}

interface ProjectNodeProps{
  title: string;
  img?: string;
  to?: string;
}

export class ProjectNode extends React.Component<ProjectNodeProps>{
  render(): React.ReactNode {
    const {title, img, to } = this.props;

    const style = {
      backgroundImage: this.props.img ? `url(${this.props.img})` : undefined,
      opacity: this.props.img ? 1 : 0,
    };

    return(
      <>
        {to ? 
          <Link to = {to}>
            <div className="h-64 text-black bg-white rounded-xl transform transition-transform hover:scale-110 hover:z-10">
              { img ? <div className="w-full h-5/6 top-0 bg-cover bg-center" style={style}/> : null }
              <p className="text-center text-page"> {title} </p>
            </div>
          </Link>
        :
          <div className="h-64 text-black bg-white rounded-xl transform transition-transform hover:scale-110 hover:z-10">
            { img ? <div className="w-full h-5/6 top-0 bg-cover bg-center" style={style}/> : null }
            <p className="text-center text-page"> {title} </p>
          </div>
        }

      </>

      )
    }
}
