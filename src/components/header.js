import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>Welcome!</a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["about", "services", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#about" onClick={Scroller.handleAnchorScroll}>About</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#services" onClick={Scroller.handleAnchorScroll}>Skills</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Portfolio</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#resume" onClick={Scroller.handleAnchorScroll}>Resume</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Contact</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">Chris Van Huffel</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <h1 className="text-uppercase text-white font-weight-bold">Full Stack Web Developer</h1>
                <div class="col mt-5 mb-5">
                  <a class="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCXtUD96KKI0BzKveCgGS2_w?view_as=subscriber" target="-blank"><i class="fab  fa-youtube fa-3x"></i></a>
                  <a class="btn btn-social-icon btn-google" href="https://github.com/Cvan23" target="-blank"><i class="fab fa-github fa-3x"></i></a>
                  <a class="btn btn-social-icon btn-google" href="https://www.linkedin.com/in/chris-van-huffel-34330266/" target="-blank"><i class="fab fa-linkedin-in fa-3x"></i></a>
                  <a class="btn btn-social-icon btn-google" href="https://codepen.io/cvancat" target="-blank"><i class="fab fa-codepen fa-3x"></i></a>
                </div>
                <a className="btn btn-primary js-scroll-trigger" href="#about" onClick={Scroller.handleAnchorScroll}>About Me</a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
