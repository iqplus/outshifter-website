import React from 'react';
import styled from 'styled-components'
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'gatsby'

const AccordionStyle = styled.div`
.content {
  margin:  45px auto;
}
.feature-title {
  padding-bottom: 15px;
}
.tabs-header button {
  width: 100%;
  cursor: pointer;
  border-radius: 30px;
  border: 1.5px solid #D8D7D7;
  color: #6E6C6E;
  margin-bottom: 10px;
  font-size: 14px;
  padding-bottom: 1px;
  padding: 10px 20px;
  svg {
    float: right;
    font-size: 22px;
    position: relative;
    bottom: 1px;
    color: #D8D8D8;
    transition: color 0.6s ease-in-out, transform 0.6s ease-in-out;
  }
  &:focus {
    outline: none;
  }
}
.button-text {
  float: left;
}
.tabs-header button.active {
  border: 1.5px solid #4A90E2;
  box-shadow: 0px 0 5px 0 #E1E8EC;
  color: #4A4A4A;
  svg {
    color: #4A90E2;
    transform: rotate(90deg);
  }
}
hr {
  background: linear-gradient(to right, #829DDD, #85E9F7);
  height: 3px;
  width: 15%;
  border-radius: 10px;
  margin-top: 0.5rem;
}
.tabs-textItem {
  display: none;
  margin-top: 5px;
  margin-bottom: 15px;
  position: relative;
  padding: 50px;
  border-radius: 7px;
  box-shadow: 1px 1px 5px 2px #E2E2E2;
  overflow: hidden;
}
.tabs-textItem.show {
  display: block;
}
h3 {
  text-align: left;
  margin-top: 15px;
}
.tabs-textItem {
  a {
    color: #4A4A4A;
    font-weight: 500;
  }
  p {
    color: #4A4A4A;
    font-size: 1rem;
  }
}
.tabs-textItem svg {
  color: #4A90E2;
  position: relative;
  bottom: 1px;
}
@keyframes change {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@media only screen and (max-width: 1300px) and (min-width: 992px) {
  svg {font-size:14px;}
  font-size: 10px;
}
`;

const data = [
  {
    category: 'Management',
    name: 'Dashboard',
    text: "Manage all aspects of your e-commerce from a single dashboard. \n\nOutshifter offers complete control over all channels, orders, pricing, inventory, outsourcing relations and more. Updated and synchronized in real-time."
  },
  {
    category: 'Products',
    name: 'Listings',
    text: 'Create universal listings for physical and digital products. \n\nListings on Outshifter are compatible and synchronized across all connected channels. Manage inventory, pricing, and orders from one centralized point.'
  },
  {
    category: 'Products',
    name: 'Outsourcing',
    text: 'Exponentionaly scale your e-commerce distrebution through network effects. \n\nAdminister which third-parties can source your original products, set fixed sales commissions and track their impact across all your chosen channels.'
  },
  {
    category: 'Products',
    name: 'Sourcing',
    text: 'Source products to sell on your selected channels.\n\nBoost your sales and monetize on your online impact. Outshifter automates and synchronizes the sales process across all channels. Everything from inventory to fulfillment and payment processing.'
  },
  {
    category: 'Channels',
    name: 'Extentions',
    text: 'Customize your own integrations.\n\nOutshifter supports flexible architecture that allows integration with any other third-party API. Connect your backend system directly to Outshifter or create a plug-in for your favorite channel.'
  },
  {
    category: 'Channels',
    name: 'Storefront',
    text: 'Seamlessly connect and synchronize your existing storefronts to Outshifter.\n\nOutshifter gives you your own storefront from day one featuring responsive design adapting to any device, desktop, tablet or mobile phone.'
  },
  {
    category: 'Channels',
    name: 'Websites',
    text: 'Make your products available on any website.\n\nAdd a shopping cart to your website enabling direct purchasing with an integrated payment gateway.'
  },
  {
    category: 'Channels',
    name: 'Social media',
    text: 'Sell directly on social media platforms. \n\nImpact consumers on the 1st stage of the e-commerce journey. Make your product available for purchase where customers already spend their time online.'
  },
  {
    category: 'Channels',
    name: 'Marketplaces',
    text: 'Grow your distribution network by listing products on multiple marketplaces.'
  },
  {
    category: 'Resources',
    name: 'Data',
    text: 'Become empowerd with cross-platform analytics. \n\nTrack total sales, revenue and distribution impact through your entire e-commerce network. This enables you to adjust and specifically target the most profitable online avenues.'
  },
  {
    category: 'Resources',
    name: 'Checkout',
    text: 'Integrated, fast and secure checkout solutions for any channel.\n\nOutshifter makes sure customers are having a trustworthy and quick checkout prosess no matter where, when and through whom they are purchasing.'
  },
  {
    category: 'Resources',
    name: 'Payments',
    text: 'Don´t worry about payment compliance and integrations. \n\nAllow customers to choose from multiple payment options. Outshifter supports all major credit and debit cards in addition to localized currency and payment solutions.'
  },
  {
    category: 'Resources',
    name: 'Orders',
    text: 'Easily fulfill, track and edit all orders. \n\nOrdes are instantly available on your Outshifter dashboard and updates are mirrored across all channels.'
  },
  {
    category: 'Resources',
    name: 'Shipping',
    text: 'Use your own shipping courier account and rates or use Outshifter´s special rates with selected couriers. Print shipping labels and track returns seamlessly.'
  },
  {
    category: 'Resources',
    name: 'Support',
    text: 'We are there to help you succeed every step of the way. \n\nDon´t hesitate to contact our support center and we will be happy to assist you.'
  },
  {
    category: 'Resources',
    name: 'Developers',
    text: 'Join our developer community.\n\nLearn about Outshifter extentions and how to develop your own.'
  },

];

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Outsourcing',
      data: data
    }
    this.changeTabOnClick = this.changeTabOnClick.bind(this);
  }

  changeTabOnClick(index) {
    this.setState({
        activeTab: index
    });
  }

  render() {

    return (

      <AccordionStyle>

        <div className="tabs-body">
          <TabHeader  
            data={this.state.data}
            click={this.changeTabOnClick}
            activeId={this.state.activeTab}
          />
        </div>

      </AccordionStyle>

    );
  }
}

export default Accordion;

class TabHeader extends React.Component {
  doClick(index, event) {
    this.props.click(index);
  }

  render() {
    let activeClass = this.props.activeId;

    function filtermanagement(value) {return value.category === "Management";};
    function filterproducts(value) {return value.category === "Products";};
    function filterchannels(value) {return value.category === "Channels";};
    function filterresources(value) {return value.category === "Resources";};
    
    const dataManagement = this.props.data.filter(filtermanagement);
    const dataProducts = this.props.data.filter(filterproducts);
    const dataChannels = this.props.data.filter(filterchannels);
    const dataResources = this.props.data.filter(filterresources);

    let management = dataManagement.map((item) => {
      let feature = item.name;
      return (
        <div>
          <button onClick={this.doClick.bind(this, feature)} className={(activeClass === feature ? 'active' : '')}>
            <span className="button-text">{item.name}</span><FaAngleRight />
          </button>
          <div className={'tabs-textItem ' + (activeClass === feature ? 'show' : '')} >
            <h4>{item.name}</h4>
            <hr />
            <br />
            <p>{item.text}</p>
            <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
          </div>
        </div>
      );
    });

    let products = dataProducts.map((item) => {
      let feature = item.name;
      return (
        <div>
          <button onClick={this.doClick.bind(this, feature)} className={(activeClass === feature ? 'active' : '')}>
            <span className="button-text">{item.name}</span><FaAngleRight />
          </button>
          <div className={'tabs-textItem ' + (activeClass === feature ? 'show' : '')} >
            <h4>{item.name}</h4>
            <hr/>
            <br/>
            <p>{item.text}</p>
            <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
          </div>
        </div>
      );
    });
    
    let channels = dataChannels.map((item) => {
      let feature = item.name;
      return (
        <div>
          <button onClick={this.doClick.bind(this, feature)} className={(activeClass === feature ? 'active' : '')}>
            <span className="button-text">{item.name}</span><FaAngleRight />
          </button>
          <div className={'tabs-textItem ' + (activeClass === feature ? 'show' : '')} >
            <h4>{item.name}</h4>
            <hr/>
            <br/>
            <p>{item.text}</p>
            <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
          </div>
        </div>
      );
    });
    
    let resources = dataResources.map((item) => {
      let feature = item.name;
      return (
        <div>
          <button onClick={this.doClick.bind(this, feature)} className={(activeClass === feature ? 'active' : '')}>
            <span className="button-text">{item.name}</span><FaAngleRight />
          </button>
          <div className={'tabs-textItem ' + (activeClass === feature ? 'show' : '')} >
            <h4>{item.name}</h4>
            <hr/>
            <br/>
            <p>{item.text}</p>
            <Link to={'/solution'}>Learn more <FaAngleRight /></Link>
          </div>
        </div>
      );
    });

    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h3>Management</h3>
            <div className="tabs-header">
              {management}
            </div>
            <h3>Products</h3>
              <div className="tabs-header">
                {products}
              </div>
            <h3>Channels</h3>
              <div className="tabs-header">
                {channels}
              </div>
            <h3>Resources</h3>
            <div className="tabs-header">
              {resources}
            </div>
          </div>
        </div>
      </div>
    )
  }
}