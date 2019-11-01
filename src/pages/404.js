import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"
import Button from '../components/Button/Button'

import Lottie from 'lottie-react-web'
import Animation1 from '../animations/animation1.json'
import Animation1Phone from '../images/Animation-1-Phone.png'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    {/* Banner */}
    <div className={'masthead'}>   
      <div className={'container ' + 'h-100 '}>
        <div className="row h-100 align-items-center main-banner no-gutters">
          <div className="col-md-12 col-lg-5">
            <h1>Sorry,<br/>Page not found</h1>
            <p>The page you’re looking for can’t be found.</p>
            <Link to={'/'}><Button>Go to Home Page</Button></Link>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="wrapper-animation-1">
              <div className="animation-background"><img src={Animation1Phone}></img></div>
              <div className="class-animation"><Lottie options={{animationData: Animation1}}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
