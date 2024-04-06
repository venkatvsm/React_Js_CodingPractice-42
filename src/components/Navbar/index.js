// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const imageUrl1 = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navDarktheme = isDarkTheme ? 'Nav_Darktheme' : null
      const imageUrl2 = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const oncliskButton = () => {
        toggleTheme()
      }

      return (
        <div className={`nav_container ${navDarktheme}`}>
          <img src={imageUrl1} className="image1" alt="website logo" />
          <ul className="nav_linkContainer">
            <Link to="/" className={`link  ${navDarktheme}`}>
              <li className="nav_heading">Home</li>
            </Link>
            <Link to="/about" className={`link ${navDarktheme}`}>
              <li className="nav_heading">About</li>
            </Link>
          </ul>
          <button
            className="btnEl"
            type="button"
            onClick={oncliskButton}
            data-testid="theme"
          >
            <img src={imageUrl2} className="image1" alt="theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
