import React from 'react';
import { ICFacebook, LogoImportir } from '../../../assets';
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
        <div className='footer'>
          <div>
            <img className='logo' src={LogoImportir} alt="Logo-Importir"/>
          </div>
          <div className='sosial-wrapper'>
            <Icon img={ICFacebook}/>
          </div>
        </div>
        <div className='copyright'>
          <p>Copyright</p>
        </div>
      </div>
  )
}

export default Footer;
