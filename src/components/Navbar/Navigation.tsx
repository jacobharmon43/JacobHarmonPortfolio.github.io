import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { NavBarLink } from './NavBarLink';

interface NavigationProps{
  className: string;
  PageOn: number;
}

export class Navigation extends React.Component<NavigationProps>{
  
  switchState(num: number): void{
    this.setState({PageOn: num});
  }

  render() {
    return (
      <div className = {this.props.className}>
        <div className = "flex flex-row justify-evenly content-start items-center h-full bg-backgroundDimmed">
          <NavBarLink to = "/" label = "Home" active = {this.props.PageOn === 0} callBack = {()=>this.switchState(0)}/>
          <NavBarLink to = "/Projects" label = "Projects" active={this.props.PageOn === 1} callBack = {()=>this.switchState(1)}/>
          <NavBarLink to = "/Resume" label = "Resume" active={this.props.PageOn === 2} callBack = {()=>this.switchState(2)}/>
          {this.props.PageOn === 3 ? <NavBarLink to = {window.location.pathname} label = {window.location.pathname.slice(1)} active={this.props.PageOn === 3} callBack = {() => this.switchState(3)}/> : null}
        </div>
      </div>
    )
  };
};

