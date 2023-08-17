import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from '../Home/Home';
import {Navigation} from '../Navbar/Navigation'
import { Projects } from '../Projects/Projects';
import { Resume } from '../Resume/Resume';
import { BodyBackground } from '../BodyBackground/BodyBackground';
import { GravityProject } from '../../ProjectPages/Gravity';
import { PortfolioProject } from '../../ProjectPages/Website';

interface PageBodyState {
  pageOn: string,
}

export class PageBody extends React.Component<{}, PageBodyState>{

  constructor(props: {}){
    super(props);
    this.state =  {pageOn: ''};
  }

  setPageOn(pageOn: string): void{
    this.setState({pageOn: pageOn});
  }

  render(){
    return(
      <div className="absolute bg-background w-screen min-h-screen overflow-y-scroll overflow-x-hidden -z-50">
          <BodyBackground/>
          <Navigation className="h-16" PageOn={PageNum(this.state.pageOn)} PageName={this.state.pageOn}/>
          <div className="h-8"/>
          <Routes>
            <Route path = "/" element={ <Home renderCallback={() => this.setPageOn("Home")}/> }/>
            <Route path = "/Projects" element={ <Projects renderCallback={() => this.setPageOn("Projects")}/> }/>
            <Route path = "/Resume" element={ <Resume renderCallback={() => this.setPageOn("Resume")}/> }/>
            <Route path = "/Gravity" element={<GravityProject renderCallback={() => this.setPageOn("Gravity")}/>}/>
            <Route path = "/Portfolio" element={<PortfolioProject renderCallback={() => this.setPageOn("This Website")}/>}/>
          </Routes>
      </div>
    )
  }
}

const PageNum = (name: string): number => {
  switch(name){
    case "Home":
      return 0;
    case "Projects":
      return 1;
    case "Resume":
      return 2;
    default:
      return 3;
  }
}

export default PageBody;
