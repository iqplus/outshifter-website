import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import BlogBox from '../components/Blog/BlogBox'
import BlogBoxMain from '../components/Blog/BlogBoxMain'
import BlogBoxStaff from '../components/Blog/BlogBoxStaff'
import BlogBoxStaffMobile from '../components/Blog/BlogBoxStaffMobile'


const BlogStyled = styled.div`

    padding-top: 50px;
    margin-bottom: 100px;

    .width-blog {
        max-width: 991px!important;
        margin: 0 auto;
    }

    a {
        &:hover {
            text-decoration: none;
        }
    }

    .blog-span-staff {
        padding-left: 15px;
        color: #C0C0C0;
        font-size: 0.8rem;
        margin-bottom: 0px;
        @media only screen and (max-width: 991px) {  
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }

    .staff-display  {
        @media only screen and (max-width: 991px) {  
            display: none;
        }
        ul {
            padding-left: 0px;
            list-style: none;
        }
    }

    .staff-mobile-display {
        @media only screen and (min-width: 992px) {  
            display: none;
        }
        @media only screen and (max-width: 575px) {  
            margin-top: 0px!important;
        }
    }

`;

class BlogPage extends Component {

  componentDidMount(){
    document.querySelector('#canvas1').style.visibility = "hidden"
    document.querySelector('#canvas2').style.visibility = "hidden"
  }

  render(){

    return(

        <Layout headerType="blog">
        <SEO title="Blog" />
        <BlogStyled>

            <div className="container width-blog">
                <div className="row">
                    <div className="col-lg-9">
                        <BlogBoxMain />
                    </div>
                    <div className="col-lg-3 staff-display">
                        <p className="blog-span-staff">STAFF PICKS</p>
                        <ul>
                            <BlogBoxStaff />
                        </ul>
                    </div>
                </div>
            </div>

            <BlogBox />

            <BlogBoxStaffMobile />

        </BlogStyled>
        </Layout>

    );
  }
}

export default BlogPage;

const POSTS = graphql `{
    allContentfulBlogPost {
        edges {
            node {
                id
                author {
                    name
                    linkedIn
                }
                category
                title
                date
                mainPost
                staffPick
                slug
                featuredImage {
                  file {
                    url
                  }
                }
                content {
                    json
                    content
                }
            }
        }
    }
}`