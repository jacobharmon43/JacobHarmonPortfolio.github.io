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
                    <img key={index} src = {logoFile} alt = {technology} className = 'h-full shrink px-1 py-1'/>
                )
            } else {
                return(
                    <div className = 'flex h-full items-center justify-center px-1 py-1'>
                        <p key = {index}> {technology} </p>
                    </div>
                )
            }
        })
        return technologyLogos;
    }

    render() {
        return(
            <div className='flex flex-row justify-center rounded-lg gap-2 h-16 bg-backgroundLightened'>
                {this.generateLogos()}
            </div>
        )
    }
};
