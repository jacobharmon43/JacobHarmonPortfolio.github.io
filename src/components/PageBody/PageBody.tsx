import React, { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from '../Home/Home';
import {Navigation} from '../Navbar/Navigation'
import { Projects } from '../Projects/Projects';
import { Resume } from '../Resume/Resume';
import { useLocation } from 'react-router-dom';
import { BodyBackground } from '../BodyBackground/BodyBackground';
import { GravityProject } from '../../ProjectPages/Gravity';
import { PortfolioProject } from '../../ProjectPages/Website';


interface PageBodyProps {}

const PageBody: FC<PageBodyProps> = () => (
  <div className="absolute bg-background w-screen min-h-screen overflow-y-scroll overflow-x-hidden -z-50">
      <BodyBackground/>
      <Navigation className="h-16" PageOn={PageNum()}/>
      <div className="h-8"/>
      <Routes>
        <Route path = "/" element={ <Home></Home> }/>
        <Route path = "/Projects" element={ <Projects></Projects> }/>
        <Route path = "/Resume" element={ <Resume></Resume> }/>
        <Route path = "/Gravity" element={<GravityProject></GravityProject>}/>
        <Route path = "/Portfolio" element={<PortfolioProject></PortfolioProject>}/>
      </Routes>
  </div>
);

const PageNum = (): number => {
  switch(useLocation().pathname){
    case "/":
      return 0;
    case "/Projects":
      return 1;
    case "/Resume":
      return 2;
    default:
      return 3;
  }
}

export default PageBody;
