import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className='Footer'>
			{ props.footerText }
		</div>
  )
}

export default Footer;
