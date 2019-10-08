import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div><p>home ddd</p></div>
  </Layout>
)

export default IndexPage
