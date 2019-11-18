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
              const menuordenado = menu.sort( (a,b) => a.node.order - b.node.order );
              function menuyes(value) {return value.node.menu === true;};
              const menufiltrado = menuordenado.filter(menuyes);
              console.log(menufiltrado);
              return menufiltrado.map((item, index) => {
                return <Link key={item.node.slug} to={'/' + item.node.slug} className={'menu-' + index}><span className="menu-item">{item.node.slug.charAt(0).toUpperCase()+item.node.slug.slice(1)}</span></Link>
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
          order
          menu
        }
      }
    }
  }`