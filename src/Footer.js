import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className='Footer'>
      <p>{ props.footerText }</p>
    </div>
  )
};

export default Footer;