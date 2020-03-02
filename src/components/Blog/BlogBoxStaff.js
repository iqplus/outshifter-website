import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

const StyledBox = styled.div`

    li {
        padding: 10px 15px;
        border-radius: 6px;
        &:hover {
            transition: background 1s;
            background: #EEEEEE;
        }
    }

    .image-wrapper img {
        max-width: 100%;
        height: auto;
    }

    img {
        margin-bottom: 1rem;
        box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
        border-radius: 6px;
        height: 100px!important;
    }

    .blog-category {
        color: #C0C0C0;
        margin-bottom: 2rem;
        font-weight: 500;
    }

    .blog-title {
        color: #4E4E4E;
        font-weight: bold;
        font-size: 0.8rem;
        line-height: 1.2;
        margin-bottom: 0px;
    }
`;  

class BlogBoxStaff extends React.Component {
    render() {
        return(
            <StyledBox>

                <StaticQuery query={POSTS} render={data =>{
                    const post = data.allContentfulBlogPost.edges;
                    function staffpost(value) {return value.node.staffPick === true;};
                    const poststaff = post.filter(staffpost);
                    return poststaff.map((item) => {
                        return (
                            <li>
                                <Link to={'/blog/' + item.node.slug}>
                                    <div>
                                        <div className="image-wrapper">
                                            <img src={item.node.featuredImage.file.url} alt={item.node.title}/>
                                        </div>
                                        <p class="blog-title">{item.node.title}</p>
                                    </div>
                                </Link>
                            </li>
                        );
                    });
                }} />

            </StyledBox>
        );
    }
}

export default BlogBoxStaff;


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

