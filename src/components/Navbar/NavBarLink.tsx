import React from 'react';
import { Link } from 'react-router-dom';

interface NavBarLinkProps{
    to: string,
    label: string,
    active: boolean,
    callBack: ()=>void
};
  
export class NavBarLink extends React.Component<NavBarLinkProps>{
    render() {
        const style = {
            opacity: this.props.active ? 1 : 0.25
        };

        return(
        <div className = "block flex-grow h-full w-full">
            <Link className = "text-monokaiOrange" to = {this.props.to}>
            <button 
                onClick={this.props.callBack}
                className = 'hover:bg-dark1 w-full h-full'
            > {this.props.label} 
            </button>
            <div className = 'h-1/6 w-full bg-monokaiOrange bottom-0' style={style}></div>
            </Link>
        </div>
        )
    }
};