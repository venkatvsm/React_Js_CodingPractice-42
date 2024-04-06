// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const darkTheme = isDarkTheme ? 'Darktheme' : null
      return (
        <div className={`homeContainer ${darkTheme}`}>
          <Navbar />
          <div className="homeContainer_cardContainer">
            <img src={imageUrl} className="home_Iamge" alt="home" />
            <h1 className="home_heading">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
