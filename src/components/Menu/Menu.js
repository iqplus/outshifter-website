import React from 'react';
import { StyledMenu } from './Menu.styled';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

class Menu extends React.Component {

  render() {
    return (
        <StyledMenu open={this.props.open}>
          <div className="menu-desktop">
            <StaticQuery query={MENU} render={data =>{
            const menu = data.allContentfulPage.edges;
            return menu.map((item, index) => {
              return <Link key={item.node.slug} to={'/' + item.node.slug} className={'menu-' + index}>{item.node.slug}</Link>
            });
              
            }} />
          </div>
        </StyledMenu>
    );
  }
}

export default Menu;

const MENU = graphql `
   {
    allContentfulPage {
      edges {
        node {
          id
          slug
        }
      }
    }
  }`