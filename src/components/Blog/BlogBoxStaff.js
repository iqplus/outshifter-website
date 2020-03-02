import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`

    padding: 15px;
    border-radius: 6px;

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
                <div>
                    <div className="image-wrapper">
                        <img src={this.props.BlogItem.featuredImage.file.url} alt={this.props.BlogItem.title}/>
                    </div>
                    <p class="blog-title">{this.props.BlogItem.title}</p>
                </div>
            </StyledBox>
            
        );
    }
}

export default BlogBoxStaff;