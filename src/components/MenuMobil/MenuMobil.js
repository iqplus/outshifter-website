import React from 'react';
import { StyledMenuMobil } from './MenuMobil.styled';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

class MenuMobil extends React.Component {

  render() {
    return (
        <StyledMenuMobil open={this.props.open}>
          <div className="menu-mobil">
            <span className="menu-word">Menu</span>
            <ul>
                <StaticQuery query={MENU} render={data =>{
                    const menu = data.allContentfulPage.edges;
                    return menu.map((item, index) => {
                        return <li><Link key={item.node.slug} to={'/' + item.node.slug} className={'menu-' + index}><span className="menu-item">{item.node.slug}</span></Link></li>
                });
                
                }} />
            </ul>
          </div>
        </StyledMenuMobil>
    );
  }
}

export default MenuMobil;

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