import React from 'react'

import { StyledTermsData } from './TermsData.styled'

class TermsData extends React.Component {

    render() {
        return(

        <StyledTermsData
            info1={this.props.info1}
            info2={this.props.info2}
        >

            {/* General Terms */}

            <div id="general-terms" className="container">
                <div className="terms-titel">
                    <h3>About Outshifting</h3>
                    <p>Last updated: 23.10.2019</p>
                </div>
                <div id="general-terms-1" className="terms-description">
                    <p>
                    Outshifting is the act of distributing product and/or service listings through multiple online channels, in order for them to become available for purchase and sold directly on those channels.                     </p>
                    <p>
                    By “channel” we refer to other platforms and user accounts. Meaning that by outshifting you can sell through multiple platforms and third-parties simultaneously, in order to exponentially scale your e-commerce distribution and sales.                     </p>
                    <p>
                    On the Outshifter platform you can connect with users in our network and create your own sales community. Connected users get access to source and outshift each other’s listings through their own channels.                      </p>
                    <p>
                    When you create a listing on Outhifter, you set a sales commission that is a percentage of the items full price. Whenever a user in your community makes a sale from outshifting your listing, this commission is automatically transferred to that user.                     </p>
                    <p>
                    Outshifter facilitates the proses of outshifting in a seamless manner through our deep integrations and powerful cross-channel listing tools. Allowing you to manage and monitor your e-commerce distribution, network and sales from one dashboard. 
                    </p>
                </div>
                <div id="general-terms-1" className="terms-description">
                    <h5>How to Outshift</h5>
                    <p>
                    Go to <b>“Products”</b> -> <b>“Outshift”</b> to manage your distribution.
                    </p>
                    <p>Here you will find all the listings you have crated or imported from other users. </p>
                    <p>
                    In order to outshift these listings to your channels, begin by clicking on the channel you want listings exported to. 
                    </p>
                    <p>
                    Mark the listings you want outshifted to said channel and click <b><em>“save changes”.</em></b> To remove the listing from the channel, simply click on the channel, un-mark the listing and click <b><em>“save changes”.</em></b>
                    </p>
                    <p>
                    You can manage outshifting for a single product by clicking <b><em>“outshift”</em></b> on the products profile, and from there edit all the channels you want it available on. 
                    </p>
                </div>   
                </div>

                <div id="getting-started" className="container">
                <div className="terms-titel">
                    <h3>Getting Started</h3>
                    <p>Ready to connect your sales community and start growing your e-commerce exponentially?</p>
                </div>
                <div id="getting-started-1" className="terms-description">
                    <h5>Connect your Channels</h5>
                    <p>Click <b><em>“Manage”</em></b> on your dashboard´s Channels section. </p>
                    <p>
                    Here you can connect your Channels, meaning your account’s on other platforms.                     </p>
                    <p>
                    By connecting these channels to your <b>Outshifter</b> account, you can <b>outshift</b> listings you have created yourself or listings you or sourced from other users.                    </p>
                   
                </div>   
                </div>

                


            {/* Privacy Policy */}

       

        </StyledTermsData>        

        );
    }

}


export default TermsData;
