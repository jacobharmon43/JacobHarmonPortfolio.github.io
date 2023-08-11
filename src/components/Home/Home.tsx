import React from 'react';

export class Home extends React.Component{
  render() {
    return(
      <div className = "text-monokaiYellow font-page">
        <h1 className = "px-10 pb-1 font-page text-3xl md:text-5xl">
          Jacob Harmon 
        </h1>
        <h2 className = "px-10 font-page text-base"> Full-stack Software Engineer, Data Analyst </h2>
        <div className="h-12 md:0"/>
        <div className = "md:absolute md:top-1/2 md:pb-10 mx-24">
          <p className = "text-center text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="h-12 md:0"/>
      </div>
    )
  }
};
