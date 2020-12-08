import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <h2>My name is T'Ana! I am in the United States Army!</h2>
    <p>Want to know more? <Link to="/contact">Click Here!</Link></p>
  </Layout>
)

export default IndexPage
