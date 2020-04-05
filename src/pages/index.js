import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/section'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to <br /> design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2/"> Watch The Video </Link>

        <div className="Logos">
          <img src={require('../Images/logo-sketch.png')} width="50" />
          <img src={require('../Images/logo-figma.png')} width="50" />
          <img src={require('../Images/logo-react.png')} width="50" />
          <img src={require('../Images/logo-swift.png')} width="50" />
        </div>

        {/* The code below was pasted from the Adobe XD Design tool. */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="170"
          viewBox="0 0 100% 170"
        >
            <path
            id="Path_6"
            data-name="Path 6"
            transform="translate(-1990 -348.571)"
            fill="#fff"
          > */}
        {/* <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="M1990,480.938h43.572V348.571h228.571V480.938h265.714V348.571h251.428V480.938h274.286V348.571h242.857V480.938H3575V348.571h240V480.938h91.429v37.634H1990Z;
          
              M1990,218.571h357.857V80H2595V218.571h284.286V80h242.857V218.571h294.286V80h234.286V218.571h260V250H1990Z;
          
              M1990,767.36h127.857V630h271.428V767.36h298.571V630H2945V767.36h267.143V630h278.572V767.36h251.429V630h165.714V800H1990Z;
              
              M1990,480.938h43.572V348.571h228.571V480.938h265.714V348.571h251.428V480.938h274.286V348.571h242.857V480.938H3575V348.571h240V480.938h91.429v37.634H1990Z
              "
            />
           </path>
        </svg> */}
      </div>
    </div>

    <div className="Cards">
      <h2>11 courses, more coming...</h2>
      <div className="CardGroup">
        <Card
          title="Latade Projects"
          text="3 Sections"
          image={require('../Images/wallpaper.jpg')}
        />
        <Card
          title="Designer System"
          text="10 Sections"
          image={require('../Images/wallpaper2.jpg')}
        />
        <Card
          title="Sound Designers"
          text="5 Sections"
          image={require('../Images/wallpaper3.jpg')}
        />
        <Card
          title="React for Designers"
          text="12 Sections"
          image={require('../Images/wallpaper4.jpg')}
        />
      </div>
    </div>

    <Section
      image={require('../Images/wallpaper2.jpg')}
      logo={require('../Images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site site online."
    />
  </div>
)

export default IndexPage
