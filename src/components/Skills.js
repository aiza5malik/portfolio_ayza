import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { FaHtml5, FaCss3, FaBootstrap, FaDatabase, FaFigma, FaLaravel, FaPhp } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMysql, SiJquery } from "react-icons/si";
import { } from "react-icons/bs";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <p> I've great command in Front-end and Back-end development as well as designing.<br></br>I have a background of English so practically i'm a great content writer aside from a coder, so best of both worlds.</p>


              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                <div className="item">
                  <span className="react_icons"> <FaPhp /> </span>
                  <h4>Php</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <FaLaravel /> </span>
                  <h4>Laravel</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <DiJavascript /> </span>
                  <h4>JavaScript</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <SiJquery /> </span>
                  <h4>jQuery</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <FaFigma /> </span>
                  <h4>Figma</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <SiMysql /> </span>
                  <h4>MySql</h4>
                </div>
                
                <div className="item">
                  <span className="react_icons"> <FaBootstrap /> </span>
                  <h4>Bootstrap</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <FaDatabase /> </span>
                  <h4>Sql Server</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <FaCss3 /> </span>
                  <h4>Css3</h4>
                </div>
                <div className="item">
                  <span className="react_icons"> <FaHtml5 /> </span>
                  <h4>Html5</h4>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
