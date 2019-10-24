import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"


export default class Animation2 extends React.Component {

    render() {
        return(
            <StaticQuery query={ANIMATION} render={data => {
                return <Img
                            fixed={data.file.childImageSharp.fixed}
                        />;
            }}/>
        );
    }

}

const ANIMATION = graphql`{

    file(relativePath: { eq: "banner-iphone-mockup-3.png" }) {
        childImageSharp {
            fixed(width: 700, height: 500) {
            ...GatsbyImageSharpFixed
            }
        }
    }
}`