import React from 'react'
import './Header.css'
import headerVideo from '../../assets/header.mp4'

const Header = () => {
  return (
    <div className='header'>
      <video autoPlay loop muted className="header-video">
        <source src={headerVideo} type="video/mp4" />
        Votre navigateur ne prend pas en charge les vidéos.
      </video>
      <div className="header-contents">
        <h1>Découvrez nos spécialités marocaines</h1>
        <p>Chez Taginify, nous vous proposons une expérience culinaire authentique et savoureuse.</p>
        <button>Voir le menu</button>
      </div>
    </div>
  )
}

export default Header