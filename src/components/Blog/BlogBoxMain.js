import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

const StyledBox = styled.div`

    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    transition: box-shadow 0.5s;
    border-radius: 6px;
    width: 100%;
    background: white;
    text-align: left;

    &:hover {
        transition: box-shadow 1s;
        box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 7px 14px 0 rgba(50,50,93,.1), 0 3px 6px 0 rgba(0,0,0,.07);
    }

    .image-wrapper img {
        max-width: 100%;
        height: auto;
    }

    img {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .blog-category {
        color: #C0C0C0;
        margin-bottom: 15px;
        font-weight: 500;
    }

    .blog-title {
        color: #4E4E4E;
        font-weight: bold;
        font-size: 1.4rem;
    }

    .blog-main-content-wrapper {
        padding: 40px 30px 50px 30px;
    }

`;  

class BlogBoxMain extends React.Component {
    render() {
        return(
            <StyledBox>

                <StaticQuery query={POSTS} render={data =>{
                    const post = data.allContentfulBlogPost.edges;
                    function mainpost(value) {return value.node.mainPost === true;};
                    const postmain = post.filter(mainpost);
                    return postmain.map((item) => {
                        return (
                            <Link to={'/blog/' + item.node.slug}>
                                <div className="image-wrapper">
                                    <img src={item.node.featuredImage.file.url} alt={item.node.title}/>
                                </div>
                                    <div className="blog-main-content-wrapper">
                                        <p class="blog-category">{item.node.category}</p>
                                        <span class="blog-title">{item.node.title}</span>
                                    </div>
                            </Link>
                        );
                    });
                }} />

            </StyledBox>
        );
    }
}

export default BlogBoxMain;


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