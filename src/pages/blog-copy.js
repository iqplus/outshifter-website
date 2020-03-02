import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import BlogBox from '../components/Blog/BlogBox'
import BlogBoxMain from '../components/Blog/BlogBoxMain'
import BlogBoxStaff from '../components/Blog/BlogBoxStaff'

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
        @media only screen and (max-width: 991px) {  
            margin-top: 3rem;
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
                        <StaticQuery query={POSTS} render={data =>{
                            const post = data.allContentfulBlogPost.edges;
                            function mainpost(value) {return value.node.mainPost === true;};
                            const postmain = post.filter(mainpost);
                            return postmain.map((item) => {
                                return (
                                    <Link to={'/blog/' + item.node.slug}>
                                        <BlogBoxMain BlogItem={item.node}/>
                                    </Link>
                                );
                            });
                        }} />
                    </div>
                    <div className="col-lg-3 staff-display">
                        <p className="blog-span-staff">STAFF PICKS</p>
                        <ul>
                            <StaticQuery query={POSTS} render={data =>{
                                const post = data.allContentfulBlogPost.edges;
                                function staffpost(value) {return value.node.staffPick === true;};
                                const poststaff = post.filter(staffpost);
                                return poststaff.map((item) => {
                                    return (
                                        <li>
                                            <Link to={'/blog/' + item.node.slug}>
                                                <BlogBoxStaff BlogItem={item.node}/>
                                            </Link>
                                        </li>
                                    );
                                });
                            }} />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mt-5 width-blog">
                <div className="row">
                    <StaticQuery query={POSTS} render={data =>{
                        const posts = data.allContentfulBlogPost.edges;
                        const postsbydate = posts.sort( (a,b) => a.node.date - b.node.date );
                        return postsbydate.map((item) => {
                            return (
                                <div className="col-sm-6 col-lg-4">
                                    <Link key={item.node.id} to={'/blog/' + item.node.slug}>
                                        <BlogBox key={item.node.id} BlogItem={item.node}/>
                                    </Link>
                                </div>
                            );
                        });
                    }} />
                </div>
            </div>

            <div className="container mt-5 width-blog staff-mobile-display">
                <div className="row">
                    <div className="col">
                        <p className="blog-span-staff">STAFF PICKS</p>
                    </div>
                </div>
                <div className="row">
                    <StaticQuery query={POSTS} render={data =>{
                        const post = data.allContentfulBlogPost.edges;
                        function staffpost(value) {return value.node.staffPick === true;};
                        const poststaff = post.filter(staffpost);
                        return poststaff.map((item) => {
                            return (
                                <div className="col-sm-6 col-lg-4">
                                    <Link to={'/blog/' + item.node.slug}>
                                        <BlogBox BlogItem={item.node}/>
                                    </Link>
                                </div>
                            );
                        });
                    }} />
                </div>
            </div>

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