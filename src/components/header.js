import { Link } from 'gatsby'
import React from 'react'

function toggleMenu(e) {
  const menu = document.querySelector('.smud-nav__container');
  const hamburger = document.querySelector('.smud-hamburger');
  menu.classList.toggle('smud-nav__container--visible');
  hamburger.classList.toggle('smud-hamburger--expanded');
}

const Header = () => (
  <header className="smud-nav">
    <span className="smud-menu-toggle">
			<button className="smud-hamburger" href="#" onClick={toggleMenu}>
				<span className="smud-hamburger__bar"></span>
			</button>
		</span>

    <nav className="smud-nav__container">
      <ul className="smud-nav__list">
        <li className="smud-nav__item">
          <Link to="#page-1" className="smud-nav__link" onClick={toggleMenu}>
            [smu:d]
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-2" className="smud-nav__link" onClick={toggleMenu}>
            Historier
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-3" className="smud-nav__link" onClick={toggleMenu}>
            Velkommen
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-4" className="smud-nav__link" onClick={toggleMenu}>
            Produkter som kundene elsker
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-5" className="smud-nav__link" onClick={toggleMenu}>
            Høypresterende team
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-6" className="smud-nav__link" onClick={toggleMenu}>
            Elskverdige eksempler
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-7" className="smud-nav__link" onClick={toggleMenu}>
            Tilbakemelding
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
