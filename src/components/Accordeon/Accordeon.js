import React from 'react';

import { StyledAccordeon } from './Accordeon.styled';

import { FaAngleRight } from 'react-icons/fa';
import ButtonDropdown from '../ButtonDropdown/ButtonDropdown'
import AccordeonBox from '../AccordeonBox/AccordeonBox'


class Accordeon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            button1Clicked: true,
            button2Clicked: false,
            button3Clicked: false,
            button4Clicked: false
        };
        this.toggleButton1 = this.toggleButton1.bind(this);
        this.toggleButton2 = this.toggleButton2.bind(this);
        this.toggleButton3 = this.toggleButton3.bind(this);
        this.toggleButton4 = this.toggleButton4.bind(this);
    }
    toggleButton1() {
        this.setState({
            button1Clicked: !this.state.button1Clicked,
            button2Clicked: false,
            button3Clicked: false,
            button4Clicked: false
        });
    }
    toggleButton2() {
        this.setState({
            button2Clicked: !this.state.button2Clicked,
            button1Clicked: false,
            button3Clicked: false,
            button4Clicked: false
        });
    }
    toggleButton3() {
        this.setState({
            button3Clicked: !this.state.button3Clicked,
            button1Clicked: false,
            button2Clicked: false,
            button4Clicked: false
        });
    }
    toggleButton4() {
        this.setState({
            button4Clicked: !this.state.button4Clicked,
            button1Clicked: false,
            button2Clicked: false,
            button3Clicked: false
        });
    }

    render() {
        return(
            <StyledAccordeon>

                <div className="row no-gutters button-dropdown">
                    <div className="col-12 col-sm-12 col-md text-left">
                        <ButtonDropdown buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>Brand Access <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>
                        Search for and request access to an unlimited amount of profiles by a diverse range of Merchants.
                        Source the products you are passionate about instantly, without being restricted to one brand, contract or
                        timeframe.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md text-center">
                        <ButtonDropdown buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>Revenue      <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>
                        Earn Direct Sales commissions while doing what you love, without compromising your image and integrity.
                        With integrated payment processing and automated order fulfilment our infrastructure enables independent
                        monetisation management.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md text-right">
                        <ButtonDropdown buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>Cross-channel <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox className="mobil" buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>
                        Outshifter is the ultimate tool for seamless cross-channel publishing, ensuring products are just clicks away from
                        being listed on your favourite platforms and social media sites.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md text-right">  
                        <ButtonDropdown buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>Insights <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox className="mobil" buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>
                        Get real-time statistics on your performance, sales and total revenue growth.
                        Become empowered by comparative insights on segments, trends, channels and products, tailored to maximise
                        your impact.
                    </AccordeonBox></div>                
                </div>

                <div className="row row-box">
                    <div className="col-12 col-sm-12 col-md">
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>
                            Search for and request access to an unlimited amount of profiles by a diverse range of Merchants.
                            Source the products you are passionate about instantly, without being restricted to one brand, contract or
                            timeframe.
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>
                            Outshifter is the ultimate tool for seamless cross-channel publishing, ensuring products are just clicks away from
                            being listed on your favourite platforms and social media sites.
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>
                            Earn Direct Sales commissions while doing what you love, without compromising your image and integrity.
                            With integrated payment processing and automated order fulfilment our infrastructure enables independent
                            monetisation management.
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>
                            Get real-time statistics on your performance, sales and total revenue growth.
                            Become empowered by comparative insights on segments, trends, channels and products, tailored to maximise
                            your impact.
                        </AccordeonBox></div>
                    </div>
                </div>

            </StyledAccordeon>
        );
    }
}

export default Accordeon;