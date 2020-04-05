import React from 'react'
import Link from 'gatsby-link'
import './header.css'

// This is a stateful component
class Header extends React.Component {
  constructor(props) {
    super(props)

    // This is boolen that asks if the user has scrolled or not
    this.state = {
      hasScrolled: false,
    }
  }

  //Ask windows tab to listen to the event and then change the Scroll function.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  //This indicates if windows tab was scrolled, set a new state/
  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={
          this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'
        } /*Replace Header classname with scroll function*/
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img
              src={require('../Images/logo-designcode.svg')}
              width="30"
            ></img>
          </Link>
          <Link to="/courses"> Courses </Link>
          <Link to="/downloads"> Downloads </Link>
          <Link to="/workshops"> Workshops </Link>
          <Link to="/buy">
            <button> Buy </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Header

// This is a stateless component, it doesn't listen to other events happening inside the page
// const Header = ({ siteTitle }) => (
//   <div className="Header">
//     <div className="HeaderGroup">
//       <Link to="/">
//         <img src={require('../Images/logo-designcode.svg')} width="30"></img>
//       </Link>
//       <Link to="/courses"> Courses </Link>
//       <Link to="/downloads"> Downloads </Link>
//       <Link to="/workshops"> Workshops </Link>
//       <Link to="/buy">
//         <button> Buy </button>
//       </Link>
//     </div>
//   </div>
// )
