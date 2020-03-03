import React from "react"
import {useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import Helmet from "react-helmet"


import Button from '../components/Buttons/Button'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

import Header from "../components/header"
import Footer from "../components/footer"


const BlogPostStyled = styled.div`

  padding-top: 50px;
  margin-bottom: 150px;
 
  .width-blog {
    max-width: 800px;
    margin: 0 auto;
  }

  .image-wrapper img {
    max-width: 100%;
    height: auto;
  }

  img {
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    border-radius: 6px;
  }

  .blog-post-title {
    //hay otros estilos en pages.scss
    color: #4E4E4E;
    margin-top: 3rem;
  }

  .blog-post-date-author {
    color: #C0C0C0;
    a {
      color: #C0C0C0;
    }
  }

  p {
    font-size: 1rem;
    margin-top: 2rem;
  }

  .outshifter-blog-box {
    box-shadow: 0 0 0 1px rgba(50,50,93,.05), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1px 0 rgba(0,0,0,.07);
    padding: 35px;
    border-radius: 6px;
    h2 {
      font-size: 1.5rem;
      color: #4E4E4E;
    }
    p {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      color: #676767;
      font-size: 0.8rem;
    }
    button {
      padding-top: 15px;
      padding-bottom: 15px;
      font-size: 0.8rem;
    }
  }
`;

const BlogPost = ({ data }) => {

  const info = data.contentfulBlogPost;

  useEffect(() => {
    document.querySelector('#canvas1').style.visibility = "hidden"
    document.querySelector('#canvas2').style.visibility = "hidden"
  });

  return (
<>
<SEO title={info.title}
description={info.seoDescription}
imageProp={info.featuredImage.file.url}
urlMeta={'https://outshifter.com/blog/'+info.slug+'/'}
type="article"
/>
    <BlogPostStyled>

      <div className="container">
        <div className="row width-blog">
          <div className="col">
            <div className="image-wrapper text-center">
              <img src={info.featuredImage.file.url} alt={info.title} />
            </div>
            <h1 className="blog-post-title">{info.title}</h1>
            <div className="blog-post-date-author">
              <span>{info.date}</span>  By  <a href={info.author.linkedIn}><span>{info.author.name}</span></a>
            </div>
            <div>
              {documentToReactComponents(info.content.json)}
            </div>

          </div>
        </div>                        
      </div>

      <div className="container mt-5">
        <div className="row width-blog">
          <div className="col">

            <div className="outshifter-blog-box text-center">
              <h2>The Sales Network</h2>
              <p>Connect your sales community and grow exponentially</p>
              <a href="https://app.outshifter.com/">
                <Button>Start outshifting for free</Button>
              </a>
            </div>

          </div>
        </div>                        
      </div>

    </BlogPostStyled>
</>
  );
};

export default BlogPost;


export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      author {
        name
        linkedIn
      }
      category
      title
      date
      slug
      seoDescription
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
`;
