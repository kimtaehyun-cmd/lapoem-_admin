import React from 'react';
import { useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <div className="breadcrumbs_m">
      <nav className="breadcrumbs">
        <span>Home</span>
        {paths.map((path, index) => (
          <span key={index}> / {path}</span>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
