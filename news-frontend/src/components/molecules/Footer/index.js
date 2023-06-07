import React from 'react';
import './footer.scss';

const Icon = ({img}) => {
  return(
    <div className='icon-wrapper'>
      <img className='icon-medsos' src={img} alt="icon"/>
    </div>
  )
}

const Footer = () => {
  return(
      <div>
        <div className='copyright'>
          <p>Copyright</p>
        </div>
      </div>
  )
}

export default Footer;
