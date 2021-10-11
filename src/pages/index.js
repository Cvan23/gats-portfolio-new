import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">About Me</h2>
                <hr className="divider light my-4"/>
                <p className="text-white-75 mb-4">Hello and welcome to my portfolio page!</p>
                <p className="text-white-75 mb-4">I am a full-stack developer who loves coding, cats and coffee. I love building and creating new projects, and am committed to learning new technologies and improving my skills.</p>
                <p className="text-white-75 mb-4">I’m currently seeking a front-end or full-stack web development opportunity, and am also available for freelance projects. I am experienced with HTML, CSS, Javascript, React & React Native, NodeJS, Express, MongoDB and Bootstrap. I also have familiarity with various middle-wares, NPM, GIT, CLI and other development tools.</p>
                <p className="text-white-75 mb-4">I am currently residing in Spokane, WA with my wife and our cat <i class="fas fa-cat ml-1"></i>. I am open to local or remote work, as well as opportunities in Portland, OR * Denver, Co and Salt Lake City, UT.</p>
                <a className="btn btn-light js-scroll-trigger" href="#services"
                   onClick={Scroller.handleAnchorScroll}>Skills</a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Languages, Frameworks and Dev Tools</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-js-square text-primary mb-4"></i>
                  <p className="text-muted mb-0">HTML5</p>
                  <p className="text-muted mb-0">CSS3</p>
                  <p className="text-muted mb-0">Javascript</p>
                  <p className="text-muted mb-0">Bootstrap</p>
                  <p className="text-muted mb-0">Netlify</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-react text-primary mb-4"></i>
                  <p className="text-muted mb-0">React JS</p>
                  <p className="text-muted mb-0">React Native</p>
                  <p className="text-muted mb-0">Expo</p>
                  <p className="text-muted mb-0">Android Studio</p>
                  <p className="text-muted mb-0">Redux</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-npm text-primary mb-4"></i>
                  <p className="text-muted mb-0">NPM</p>
                  <p className="text-muted mb-0">GIT</p>
                  <p className="text-muted mb-0">Webpack</p>
                  <p className="text-muted mb-0">Gatsby JS</p>
                  <p className="text-muted mb-0">Dato CMS</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fab fa-4x fa-node text-primary mb-4"></i>
                  <p className="text-muted mb-0">Node JS</p>
                  <p className="text-muted mb-0">Express</p>
                  <p className="text-muted mb-0">Mongo DB</p>
                  <p className="text-muted mb-0">Graph QL</p>
                  <p className="text-muted mb-0">Heroku</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                  <a href="https://mighty-sierra-51681.herokuapp.com/" target="-blank">
                    <h5 className="mt-2">Shopping List App v-1.0<i class="fas fa-file-code ml-2"></i></h5>
                  </a>
                <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg" onClick={this.handlePortfolioClick.bind(this, 0)}>
                  <Img fluid={this.props.data.images.edges[0].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-name">
                      A project I built and deployed using Mongo DB, Express, React JS and Node JS
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                  <a href="https://you-eye.netlify.app/" target="-blank">
                  <h5 className="mt-2">UI/UX Showcase Project<i class="fas fa-file-code ml-2"></i></h5>
                  </a>
                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg" onClick={this.handlePortfolioClick.bind(this, 1)}>
                  <Img fluid={this.props.data.images.edges[1].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-name">
                      A project I built showcasing various UI/UX components, using Gatsby JS, SCSS and React-Bootstap. 
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                  <a href="https://www.myfavorite-letter.com/" target="-blank">
                  <h5 className="mt-2">Promotional Website<i class="fas fa-file-code ml-2"></i></h5>
                  </a>
                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg" onClick={this.handlePortfolioClick.bind(this, 2)}>
                  <Img fluid={this.props.data.images.edges[2].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-name">
                      A simple promotional website I built and deployed for a client.
                      I used Gatsby JS with GraphQl to optimize and display the images.
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                  <a href="https://octacat.netlify.app/" target="-blank">
                  <h5 className="mt-2">Github Finder<i class="fas fa-file-code ml-2"></i></h5>
                  </a>
                <a className="portfolio-box" href="images/portfolio/fullsize/4.jpg" onClick={this.handlePortfolioClick.bind(this, 3)}>
                  <Img fluid={this.props.data.images.edges[3].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-name">
                      Github Finder app using React JS w/ the Context API and React Hooks.
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                  <a href="https://polar-shore-13026.herokuapp.com/register" target="-blank">
                  <h5 className="mt-2">Contact Keeper App v-1.0<i class="fas fa-file-code ml-2"></i></h5>
                  </a>
                <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg" onClick={this.handlePortfolioClick.bind(this, 4)}>
                  <Img fluid={this.props.data.images.edges[4].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption">
                    <div className="project-name">
                      A Contact Keeper app I built and deployed using the MERN stack with React Hooks and Context API. It has full CRUD capability and authentication. 
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                  <a href="https://github.com/Cvan23/weather-api-app" target="-blank">
                  <h5 className="mt-2">Weather API App<i class="fas fa-file-code ml-2"></i></h5>
                  </a>
                <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg" onClick={this.handlePortfolioClick.bind(this, 5)}>
                  <Img fluid={this.props.data.images.edges[5].node.childImageSharp.fluid}/>
                  <div className="portfolio-box-caption p-3">
                    <div className="project-name">
                      A weather app using OpenWeather API, Javascript and Bootstrap Swatch
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white" id="resume">
          <div className="container text-center">
            <h2 className="mb-4">Resume</h2>
            <a className="btn btn-light" href="https://drive.google.com/file/d/1g7a4oMiP1ZgvcSJuCaIlo7Fa8V36nfqu/view?usp=sharing" target="-blank">Click to view or download resume</a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Connect on Linkedin or send an email and I will get back to you as soon as possible!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <a class="btn btn-social-icon btn-google" href="https://www.linkedin.com/in/chris-van-huffel-34330266/" target="-blank"><i class="fab fa-linkedin-in fa-3x text-muted"></i></a>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block text-muted" href="mailto:cvanhuffel@outlook.com">cvanhuffel@outlook.com</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
