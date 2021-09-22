import React from "react";
import Postgres from "../../src/img/postgres.png"
import Express from "../../src/img/express.png"
import Redux from "../../src/img/redux.png"
import react from "../../src/img/react.png"
import Node from "../../src/img/node.png"
import './about.css'

function About() {
  return (
    <div className = "background">
    <div className="all">
      <h1>About this website:</h1>
      <h4>
      This website is part of my individual Henry project.
      Bring data from the following {" "} <a href="https://spoonacular.com/food-api/docs" target="_blank">API. </a> 
        PostgreSQL was used for the database. Express and Node for the back-end and React/Redux
      for the fort-end. The styles were made with css
      </h4>
      <div className="pern">
        <a href="https://www.postgresql.org/" target="_blank">
          <img src={Postgres} alt="img1" width="80" height="50" className="pernIcon"/>
        </a>
        <a href="https://expressjs.com/" target="_blank">
        <img src={Express} alt="img2" width="80" height="50" className="pernIcon"/>
        </a>
        <a href="https://redux.js.org/" target="_blank">
        <img src={Redux} alt="img3" width="80" height="50" className="pernIcon"/>
        </a>
        <a href="https://reactjs.org/" target="_blank">
        <img src={react} alt="img4" width="80" height="50" className="pernIcon"/>
        </a>
        <a href="https://nodejs.org/" target="_blank">
          <img src={Node} alt="img5" width="80" height="50" className="pernIcon" />
        </a>
      </div>
    </div>
    </div>
  );
}

export default About;
