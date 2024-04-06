// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundDarkTheme = isDarkTheme ? 'notFoundDarkTheme' : null

      return (
        <div className="notFound_container">
          <Navbar />
          <div className={`notFound_cardcontainer ${notFoundDarkTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notFound_image"
            />
            <h1 className="notFound_heading">Lost Your Way?</h1>
            <p className="notFound_para">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
