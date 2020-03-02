import React from 'react';
import styled from 'styled-components';


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
        margin-bottom: 5px;
        font-weight: 500;
    }

    .blog-title {
        color: #4E4E4E;
        font-weight: bold;
        font-size: 1.4rem;
    }

    .blog-main-content-wrapper {
        padding: 60px 30px;
    }

`;  

class BlogBoxMain extends React.Component {
    render() {
        return(

            <StyledBox>
                <div>
                    <div className="image-wrapper">
                        <img src={this.props.BlogItem.featuredImage.file.url} alt={this.props.BlogItem.title}/>
                    </div>
                    <div className="blog-main-content-wrapper">
                        <p class="blog-category">{this.props.BlogItem.category}</p>
                        <br />
                        <span class="blog-title">{this.props.BlogItem.title}</span>
                    </div>
                </div>
            </StyledBox>
            
        );
    }
}

export default BlogBoxMain;