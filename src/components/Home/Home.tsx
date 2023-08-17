import { PageGeneric } from "../PageGeneric/PageGeneric"

export class Home extends PageGeneric{
  render() {
    return(
      <div>
        <h1 className = "px-10 pb-1 text-3xl md:text-5xl">
          Jacob Harmon 
        </h1>
        <h2 className = "px-10 text-base"> Full-stack Software Engineer, Data Analyst </h2>
        <div className="h-12 md:0"/>
        <div className = "transform md:translate-y-1/2 mx-8">
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
