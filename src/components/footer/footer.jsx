import React, { Component } from 'react';
import './footer.css';
// import logoSvg from './elementsPage/icons/footer/Vectorlogowhite.svg';
// import facebookIcon from './elementsPage/icons/footer/facebook.svg';
// import instaIcon from './elementsPage/icons/footer/instagram.svg';
// import pinterestIcon from './elementsPage/icons/footer/pinterest.svg';
// import seloEBit from './elementsPage/icons/footer/selo-ebit.svg'
// import vtexIcon from './elementsPage/icons/footer/vtex-pci-200.svg'

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="info-content">
          <div className="icon-content">
            {/* <img src={ facebookIcon } />
            <img src={ instaIcon } />
            <img src={ pinterestIcon } />
            <img src={ vtexIcon } />
            <img src={ seloEBit } /> */}
          </div>
        </div>
        <div className="footer-page">
          <p className="text-footer">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ex, quidem unde dolorem aut voluptatum sequi ad eveniet omnis exercitationem ipsum nulla odio molestias. Laudantium ipsam animi laboriosam neque repudiandae.
          </p>
          {/* <img className="logo-footer" src={ logoSvg } alt="logo-original" /> */ }
        </div >
      </>
    )
  }
}
