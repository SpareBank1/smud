import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header className="smud-nav">
    <nav>
      <ul className="smud-nav__list">
        <li className="smud-nav__item">
          <Link to="#page-1" className="">
            [smu:d]
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-2" className="">
            Side 2
          </Link>
        </li>
        <li className="smud-nav__item">
          <Link to="#page-3" className="">
            Side 3
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
