import React from 'react';

import { StyledAccordeon } from './Accordeon2.styled';

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
                        <ButtonDropdown buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>Segmentation <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>
                        Give or decline Mediators access to your listings, based on their segment, following,
                        market penetration, sales statistics, content and channel utilisation. Outshifter`s inherent
                        DS commission model ensures definite ROI.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md">
                        <ButtonDropdown buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>Cross-channel <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>
                        Increase your agility to new markets and grow rapidly through independent scaling
                        enablement. Trace and administer your comprehensive e-distribution collectively
                        through one cross-channel enablement board.
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md">
                        <ButtonDropdown buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>Management <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox className="mobil" buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>
                        Effortlessly manage each aspect of your e-Commerce with real-time synchronisation,
                        automated payment processing and integrated shipping solutions. Empowering you to
                        prosess all orders in one place. 
                    </AccordeonBox></div>
                    <div className="col-12 col-sm-12 col-md">  
                        <ButtonDropdown buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>Statistics <FaAngleRight /></ButtonDropdown>
                    </div>
                    <div className="accordeon-mobil mobil"><AccordeonBox className="mobil" buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>
                        Measure, adjust and cultivate your market strategy and target niches more efficiently
                        with instant data analysis and comparative performance insights, determining each
                        channels, mediators and segments unique sales impact. 
                    </AccordeonBox></div>                
                </div>

                <div className="row row-box">
                    <div className="col-12 col-sm-12 col-md">
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button1Clicked} onClick={this.toggleButton1}>
                            Give or decline Mediators access to your listings, based on their segment, following,
                            market penetration, sales statistics, content and channel utilisation. Outshifter`s inherent
                            DS commission model ensures definite ROI.
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button2Clicked} onClick={this.toggleButton2}>
                            Increase your agility to new markets and grow rapidly through independent scaling
                            enablement. Trace and administer your comprehensive e-distribution collectively
                            through one cross-channel enablement board. 
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button3Clicked} onClick={this.toggleButton3}>
                            Effortlessly manage each aspect of your e-Commerce with real-time synchronisation,
                            automated payment processing and integrated shipping solutions. Empowering you to
                            prosess all orders in one place. 
                        </AccordeonBox></div>
                        <div className="desktop"><AccordeonBox buttonClicked={this.state.button4Clicked} onClick={this.toggleButton4}>
                            Measure, adjust and cultivate your market strategy and target niches more efficiently
                            with instant data analysis and comparative performance insights, determining each
                            channels, mediators and segments unique sales impact. 
                        </AccordeonBox></div>
                    </div>
                </div>

            </StyledAccordeon>
        );
    }
}

export default Accordeon;