import React from 'react';
import logoRecord from './LogoIndex';


interface ProjectTechnologiesProps {
    technologyList: string[];
}

interface ProjectTechnologiesState {
    logos: Map<string, string>;
}

export class ProjectTechnologies extends React.Component<ProjectTechnologiesProps, ProjectTechnologiesState> {
    constructor(props: ProjectTechnologiesProps){
        super(props);
        this.state = {
            logos: new Map<string,string>([])
        };
    }

    componentDidMount(): void {
        this.setState({
            logos: logoRecord
        });
    }

    generateLogos(){
        const { technologyList } = this.props;

        const technologyLogos = technologyList.map((technology: string, index: number) => {
            const logoFile = this.state.logos.get(technology);
            if(logoFile){
                return (
                    <div className = 'flex items-center justify-center flex-shrink m-1'>
                        <img key={index} src = {logoFile} alt = {technology} className='h-full w-full'/>
                    </div>    
                )
            } else {
                return(
                    <div className = 'flex items-center justify-center m-1'>
                        <p key = {index}> {technology} </p>
                    </div>
                )
            }
        })
        return technologyLogos;
    }

    render() {
        return(
            <div className='flex flex-row justify-center rounded-lg bg-backgroundLightened h-16'>
                {this.generateLogos()}
            </div>
        )
    }
};
