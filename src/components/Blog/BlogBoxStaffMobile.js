import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

const StyledBox = styled.div`

    .staff-mobile {
        padding: 15px;
        border-radius: 6px;
        margin-bottom: 3rem;
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
        height: auto;
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

    .blog-span-staff {
        font-size: 1.2rem!important;
    }

`;  

class BlogBoxStaffMobile extends React.Component {
    render() {
        return(
            <StyledBox>

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
                                    <div className="col-sm-6">
                                        <div className="staff-mobile">
                                            <Link to={'/blog/' + item.node.slug}>
                                                <div>
                                                    <div className="image-wrapper">
                                                        <img src={item.node.featuredImage.file.url} alt={item.node.title}/>
                                                    </div>
                                                    <p class="blog-title">{item.node.title}</p>
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

export default BlogBoxStaffMobile;


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

