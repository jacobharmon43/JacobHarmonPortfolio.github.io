import React  from 'react';
import { NavBarLink } from './NavBarLink';

interface NavigationProps{
  className: string;
  PageOn: number;
}

interface NavigationState{
  pageName: string;
}

export class Navigation extends React.Component<NavigationProps, NavigationState>{
  constructor(props: NavigationProps){
    super(props);
    this.state = {pageName: ''};
  }

  componentDidMount(){
    this.setState({pageName: "Project View"});
  }

  render() {
    return (
      <div className = {this.props.className}>
        <div className = "flex flex-row justify-evenly content-start items-center h-full bg-backgroundDimmed">
          <NavBarLink to = "/" label = "Home" active = {this.props.PageOn === 0}/>
          <NavBarLink to = "/Projects" label = "Projects" active={this.props.PageOn === 1}/>
          <NavBarLink to = "/Resume" label = "Resume" active={this.props.PageOn === 2}/>
          {this.props.PageOn === 3 ? <NavBarLink to = {'/' + this.state.pageName} label = {this.state.pageName} active={this.props.PageOn === 3}/> : null}
        </div>
      </div>
    )
  };
};

