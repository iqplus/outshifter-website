import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

const StyledBox = styled.div`

    .box-wrapper {
        padding: 15px;
        border-radius: 6px;
        margin-bottom: 2rem;
    
        @media only screen and (max-width: 1024px) {  
            margin-bottom: 1rem;
        }
    
        &:hover {
            transition: background 1s;
            background: #EEEEEE;
        }
    }

    .image-wrapper img {
        max-width: 100%;
        height: 150px;
        @media only screen and (max-width: 991px) {  
            height: 200px;
        }
    }

    img {
        margin-bottom: 1rem;
        box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
        border-radius: 6px;
    }

    .blog-category {
        color: #C0C0C0;
        margin-bottom: 10px;
        font-size: 0.7rem;
        font-weight: 500;
    }

    .blog-title {
        color: #4E4E4E;
        font-weight: bold!important;
        font-size: 1rem;
        text-align: left;
    }

`;  

class BlogBox extends React.Component {
    render() {
        return(
            <StyledBox>

                <div className="container mt-5 width-blog">
                    <div className="row">
                        <StaticQuery query={POSTS} render={data =>{
                            const posts = data.allContentfulBlogPost.edges;
                            const postsbydate = posts.sort( (a,b) => a.node.date - b.node.date );
                            return postsbydate.map((item) => {
                                return (
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="box-wrapper">
                                            <Link key={item.node.id} to={'/blog/' + item.node.slug}>
                                                <div>
                                                    <div>
                                                        <div className="image-wrapper text-center">
                                                            <img src={item.node.featuredImage.file.url} alt={item.node.title}/>
                                                        </div>
                                                        <p class="blog-category">{item.node.category}</p>
                                                        <h2 class="blog-title">{item.node.title}</h2>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            });
                        }} />
                    </div>
                </div>

            </StyledBox> 
        );
    }
}

export default BlogBox;


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
