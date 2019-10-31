import React from 'react';
import { StyledMenuMobil } from './MenuMobil.styled';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Burger from '../Burger/Burger';
import LogoMobilWhite from '../../images/logo-mobil_white.png';
import LogoTextWhite from '../../images/outshifter-logo-text_white.png';

class MenuMobil extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  targetElement = null;
  showTargetElement = () => {
    // ... some logic to show target element

    // 3. Disable body scroll
    disableBodyScroll(this.targetElement);
  };

  hideTargetElement = () => {

    enableBodyScroll(this.targetElement);
  }

  toggleMenu() {
console.log('soy bton');
    console.log('sss')

  }
  render() {

    if (this.props.open){
      disableBodyScroll(this.targetElement);
    }else{
      enableBodyScroll(this.targetElement);

    }


    

    console.log(this.props)
    return (
      
      <StyledMenuMobil open={this.props.open}  >
        <div className="logo-wrapper">
          <Link to={'/'}><img className="mobil logo-mobil" src={LogoMobilWhite} /> </Link>
          <Link to={'/'} className={'logo-line'}><img className="mobil logo-text" src={LogoTextWhite} /> </Link>
        </div>
        <Burger 
        open={this.props.open} 
        onClick={this.props.onClick}
        position={'absolute'}
        top={'20px'}
        right={'20px'}
        />

      <div className="menu-mobil">
            
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