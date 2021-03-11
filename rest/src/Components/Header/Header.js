import React from 'react';
import withAuth from "../../hoc/withAuth";
import './Header.css';

const Header = ({isAuth}) => {
  
  return (
    <div className="header">
      <h1>Header</h1>
      {isAuth ? <p>Logout</p> : <p>SignIn</p>}
    </div>
  );
};

export default withAuth(Header);