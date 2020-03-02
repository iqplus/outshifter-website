import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`

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

`;  

class BlogBox extends React.Component {
    render() {
        return(

            <StyledBox>
                <div>
                    <div className="image-wrapper">
                        <img src={this.props.BlogItem.featuredImage.file.url} alt={this.props.BlogItem.title}/>
                    </div>
                    <p class="blog-category">{this.props.BlogItem.category}</p>
                    <h2 class="blog-title">{this.props.BlogItem.title}</h2>
                </div>
            </StyledBox>
            
        );
    }
}

export default BlogBox;