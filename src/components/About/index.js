// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutDarkTheme = isDarkTheme ? 'about_Darktheme' : null

      return (
        <div className={`aboutContainer ${aboutDarkTheme}`}>
          <Navbar />
          <div className="aboutContainer_cardContainer">
            <img src={imageUrl} className="about_Iamge" alt="about" />
            <h1 className="about_heading">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
