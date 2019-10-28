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
            <StyledAccordeon >

                <div className="row no-gutters button-dropdown">
                    <div className="col-12 col-sm-12 col-md">
                        <ButtonDropdown buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>Revenue <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>
                        Search for and request access to an unlimited amount of proﬁles by a diverse 
                        range of Merchants. Source the products you are passionate about instantly, 
                        without being restricted to one brand, contract or timeframe.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md">
                        <ButtonDropdown buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>Revenue <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox className="mobil" buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md">
                        <ButtonDropdown buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>Revenue <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>
                        Search for and request access to an unlimited amount of proﬁles by a diverse 
                        range of Merchants. Source the products you are passionate about instantly, 
                        without being restricted to one brand, contract or timeframe.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md">  
                        <ButtonDropdown buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>Revenue <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox className="mobil" buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </AccordeonBox></div>                
                </div>

                <div className="row row-box">
                    <div className="col-12 col-sm-12 col-md">
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>
                            Search for and request access to an unlimited amount of proﬁles by a diverse 
                            range of Merchants. Source the products you are passionate about instantly, 
                            without being restricted to one brand, contract or timeframe.
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>
                            Search for and request access to an unlimited amount of proﬁles by a diverse 
                            range of Merchants. Source the products you are passionate about instantly, 
                            without being restricted to one brand, contract or timeframe.
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </AccordeonBox></div>
                    </div>
                </div>

            </StyledAccordeon>
        );
    }
}

export default Accordeon;