import React from 'react';
import cliffBanner from '../assets/cliff-banner.png';
import mountainBanner from '../assets/mountain-banner.png';
import '../styles/Banner.css';

function Banner({ version }) {
  const imageUrl = version === 'cliff' 
    ? cliffBanner 
    : mountainBanner;

  const showText = version === 'cliff';

  return (
    <div className='banner'>
      <img src={imageUrl} alt='Banner' className='banner__image' />
      <div className='banner__overlay'></div>
      {showText && <h1 className='banner__text'>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;
