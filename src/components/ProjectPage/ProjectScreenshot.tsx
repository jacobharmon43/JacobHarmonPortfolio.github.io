import React from 'react';

interface ProjectScreenshotProps {
    src: string;
    alt: string;
}

export class ProjectScreenshot extends React.Component<ProjectScreenshotProps> {
    render() {
        return(
            <div className='flex justify-center items-center rounded-lg bg-backgroundDimmed'>
                <img src={this.props.src} alt={this.props.alt} className='py-2 px-2'></img>
            </div>
        )
    }
};
