import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedinLinks = () => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Sign Out</NavLink>
        </li>
        <li>
          <NavLink className="btn btn-floating pink lighten-1" to="/">
            NN
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedinLinks;
