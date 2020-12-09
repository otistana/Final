import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Contact = () => {
    return(
        <Layout>
            <SEO title="Contact"/>
            <form class="row">
                <input type="text" placeholder="Name" Name="name"></input>
                <br/>
                <input type="text" Placeholder="Age" Name="Age"></input>
                <br/>
                <input type="text" Placeholder="Why do you want to join?" Name="Why"></input>
                <br/>
                <button>Submit</button>
            </form>
            <Link to="/">Back Home</Link>
        </Layout>
    )
}

export default Contact 