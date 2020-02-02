import React from 'react'

import { StyledTermsData } from './TermsData.styled'

class TermsData extends React.Component {

    render() {
        return(

        <StyledTermsData
            info1={this.props.info1}
            info2={this.props.info2}
            info3={this.props.info3}
            info4={this.props.info4}
            info5={this.props.info5}
            info6={this.props.info6}
            info7={this.props.info7}
            info8={this.props.info8}
            info9={this.props.info9}
            info10={this.props.info10}
            info11={this.props.info11}
        >

            <div id="about-outshifting" className="container">
                <div className="terms-titel">
                    <h3>About Outshifting</h3>
                </div>
                <div id="about-outshifting-1" className="terms-description">
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
                <div id="about-outshifting-1" className="terms-description">
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
                    <p>Here are 4 easy steps to help you start outshifting immediately:</p>
                    <br/>
                </div>
                <div id="getting-started-1" className="terms-description">
                    <h5>1. Connect your Channels</h5>
                    <p>Click <b><em>“Manage”</em></b> on your dashboard´s Channels section. </p>
                    <p>
                    Here you can connect your Channels, meaning your account’s on other platforms.
                    </p>
                    <p>
                    By connecting these channels to your <b>Outshifter</b> account, you can <b>outshift</b> listings you have created yourself or listings you or sourced from other users.
                    </p>
                </div>
                <div id="getting-started-2" className="terms-description">
                    <h5>2. Connect your Community</h5>
                    <p>Click on <b><em>“Network”</em></b> -> <b><em>“Search”</em></b> in the menu.</p>
                    <p>Here you can find and connect with other users in the Outshifter network.</p>
                    <p>By clicking <b><em>“connect”</em></b> on another user profile, a request will be sent to said user. Connected users get access to source and outshift each other’s listings through their own channels.</p>
                    <p>By clicking on <b><em>“Network”</em></b> -> <b><em>“Requests”</em></b>in the menu, you can mange requests from other users simply by clicking <b><em>“Accept”</em></b> or <b><em>“Decline”</em></b>.</p>
                </div>
                <div id="getting-started-3" className="terms-description">
                    <h5>3. List and Source</h5>
                    <p>Go to <b><em>“Products”</em></b> -> <b><em>“Search”</em></b> in the menu to find products to source.</p>
                    <p>Go to <b><em>“Products”</em></b> -> <b><em>“Listings”</em></b> in the menu to create a listing or to manage your listings.</p>
                </div>   
                <div id="getting-started-4" className="terms-description">
                    <h5>4. Outshift</h5>
                    <p>Go to <b><em>“Products”</em></b> -> <b><em>“Outshift”</em></b> to manage your distribution.</p>
                    <p>Here you will find all the listings you have crated or imported form other users.</p>
                    <p>In order to outshift these listings to your channels, begin by clicking on the channel you want listings exported to.</p>
                    <p>Mark the listings you want outshifted to said channel and click “save changes”. To remove the listing from the channel, simply click on the channel, un-mark the listing and click <b><em>“save changes”</em></b>.</p>
                    <p>You can manage outshifting for a single product by clicking <b><em>“outshift”</em></b> on the products profile, and from there edit all the channels you want it available on.</p>
                    <p className="disclaimer">Outshifting is the act of distributing product and/or service listings through multiple online channels, in order for them to become available for purchase and sold directly on those channels. By <b><em>“channel”</em></b> we refer to an external platforms and user account.</p>
                </div>   
            </div>

            <div id="account" className="container">
                <div className="terms-titel">
                    <h3>Account</h3>
                    <p>To change your account information, go to settings and edit. From here you can change your username, password and contact information as well as update your online channels, shipping information, payment details and more.</p>
                    <br/>
                </div> 
            </div>

            <div id="listings" className="container">
                <div className="terms-titel">
                    <h3>Listings</h3>
                    <p>Listings refer to products and services available for sale through the Outshifter Platform and network.</p>
                    <p> Go to “Products” -> “Listings” in the menu to create a listing or to manage / edit your listings.</p>
                    <p> To create a listing click “create listing” in the top right corner of the page. </p>
                    <p> Only the users you connect with on the Outshifter platform have access to source and outshift your listings. You are always in complete control over which channels the listings you create can be outshifted to, by managing “Channels” when creating or editing a listing. </p>
                    <p> When you create a listing on Outhifter, you set a sales commission that is a percentage of the items full price. Whenever a user in your community makes a sale from outshifting your listing, this commission is automatically transferred to that user. The remainder is transferred to your account, with the Outshifter fee already subtracted. </p>
                    <br/>
                </div> 
            </div>
       
            <div id="sourcing" className="container">
                <div className="terms-titel">
                    <h3>Sourcing</h3>
                    <p>Listing outsourcing and sourcing.</p>
                    <br/>
                </div>
                <div id="sourcing-1" className="terms-description">
                    <h5>1. Outsourcing</h5>
                    <p>On the Outshifter platform you can connect with users in our network and create your own sales community. Connected users get access to source and outshift each other’s listings through their own channels.</p>
                    <p>You are “outsourcing” when a user in your community imports and outshifts one of your listings. Your listings can be sourced by a several users simultaneously and outshifted through multiple channels.</p>
                    <p>You are always in complete control over whom can source your listings by managing your connections. You can also manage the channels that the individual listings you create can be outshifted to, by managing “Channels” when creating or editing a listing. </p>
                    <p>When you create a listing on Outhifter, you set a sales commission that is a percentage of the items full price. Whenever a user in your community makes a sale from outshifting your listing, this commission is automatically transferred to that user. The remainder is transferred to your account, with the Outshifter fee already subtracted.</p>
                </div>
                <div id="sourcing-2" className="terms-description">
                    <h5>2. Sourcing</h5>
                    <p>Sourcing refers to importing product listings from other users in order to outshift them through your own online channels. To source a product listing you must first connect with the user who owns the listing (the supplier). Once connection is granted you can outshift the listing to your own channels and sell directly. </p>
                    <p>You can source and outshift unlimited amounts of product listings from multiple users simultaneously, there is no limit.</p>
                    <p>When you make a sale, the commission (referral fee) is automatically transferred to your account and the supplier is instantly notified of the order, customer information, shipping address, etc. The order is shipped (or transferred) directly from the supplier to the customer. You don’t have to do anything. </p>
                </div>
            </div>

            <div id="channels" className="container">
                <div className="terms-titel">
                    <h3>Channels</h3>
                    <p>Outshifter allows you to export listings onto multiple online channels: Outshifter facilitates the proses of outshifting in a seamless manner through our deep integrations and powerful cross-channel listing tools.</p>
                    <p>By “channel” we refer to other platforms and user accounts. Meaning that by outshifting you can sell through multiple platforms and third-parties simultaneously, in order to exponentially scale your e-commerce distribution and sales. </p>
                    <p>We are constantly adding new channels and allow for our users to create plug-ins for their favorite platforms through our open API. Please see our developer community for more information. If you can´t find your channel of choice leave us some feedback and we will see what we can do. Please keep in mind that third party channels and platforms may have different terms and conditions and privacy policy standards than us.</p>
                    <br/>
                </div>
                <div id="channels-1" className="terms-description">
                    <h5>1. Your Channels</h5>
                    <p>   
                        Click “Manage” on your dashboard´s Channels section. 
                        <br/>
                        Here you can connect your Channels, meaning your accounts on other platforms. 
                        <br/>
                        By connecting these channels to your outshifter account, you can outshift listings you have created yourself or listings you or sourced (imported) from other users.
                        <br/>
                        Outshift
                        <br/>
                        Go to “Products” -> “Outshift” to manage your distribution.
                        <br/>
                        Here you will find all the listings you have crated or imported from other users. 
                        <br/>
                        In order to outshift these listings to your channels, begin by clicking on the channel you want listings exported to. 
                        <br/>
                        Mark the listings you want outshifted to said channel and click “save changes”. To remove the listing from the channel, simply click on the channel, un-mark the listing and click “save changes”.
                        <br/>
                        You can manage outshifting for a single product by clicking “outshift” on the products profile, and from there edit all the channels you want it available on. 
                    </p>
                </div>
                <div id="channels-2" className="terms-description">
                    <h5>2. Third-party Channels</h5>
                    <p>Only the users you connect with on the Outshifter platform have access to source and outshift your listings. You are always in complete control over which channels the listings you create can be outshifted to, by managing “Channels” when creating a listing, or editing it.</p>
                </div>
            </div>

            <div id="orders" className="container">
                <div className="terms-titel">
                    <h3>Orders</h3>
                    <p>All orders can be tracked through you Outshifter dashboard. The flow of how you treat an order depends on whether you are the supplier of the listing or you sourced the listing. </p>
                    <p>As a supplier you are responsible for order fulfillment. Once we receive an order, we forward you the order details. It is then your responsibility to fulfill the order includin packaging and shipping. Making sure you include return information and labels. The purchase agreement is between you and the end customer. Meaning you are also responsible for communications with the end customer and own the customer relationship.</p>
                    <p>If you have sourced the listing, you will receive an order notification to your account´s email, and the order is forwarded to the Supplier/s.</p>
                    <p>If the order is through Shopify, you will have to approve the order by clicking “authorize payment”.</p>
                    <br/>
                </div> 
            </div>

            <div id="shipping" className="container">
                <div className="terms-titel">
                    <h3>Shipping</h3>
                    <br/>
                </div>
                <div id="shipping-1" className="terms-description">
                    <h5>1. Connect your courier</h5>
                    <p>We integrate with a variety of couriers worldwide, ranging from DHL to UPS and FedEx. As a supplier you use your current rates and solutions, according to your own courier agreement. Shipping rates are estimated automatically in real time based on your courier rates and displayed to the customer at checkout. You can print the shipping label directly from each order at the Outshifter platform. Always make sure to include return labels and all legally required information in the package.</p>
                </div>
                <div id="shipping-2" className="terms-description">
                    <h5>2. Flat Rate</h5>
                    <p>You can also choose to set a flat rate (general shipping price) for your orders, as a default option. If you want to offer free shipping you can set the flat rate to zero. The cost of shipping is then covered by you.</p>
                </div>
            </div>

            <div id="service-fee" className="container">
                <div className="terms-titel">
                    <h3>Service Fee</h3>
                    <p>The Service Fee is how we charge for using our services. We are determined to keep it as low as we can. However, it is what makes us able to keep the platform running and provide you with payments, shipping integrations, insights and continued innovation. It is and will always be completely free to get started at Outshifter.</p>
                    <br/>
                </div>
                <div id="service-fee-1" className="terms-description">
                    <h5>1. Outshifter only charges per transaction</h5>
                    <p>– For a limited time only, your first 100 transactions are free of charge.</p>
                    <p>The Service Fee is 4,8% of the value of the transaction plus a 0,18€ flat fee.</p>
                    <p>The fee is automatically subtracted from the payout from an order (for further details on this see the billing section). The Service Fee is only charged to products and services you list yourself. In other words, the fee is not applied to you if the listing was sourced.</p>
                    <p>Please keep in mind that your platforms might charge you a fee for using them as a channel (The charge is only applicable to you when a sale is made through your account) In these instances, we will make you aware once you connect a channel to your Outshifter account. </p>
                    <p>We will always be 100% transparent regarding our fees, however, please familiarize yourself with the fee structure on the channels you allow for product listings to be outshifted to, as they differ from ours. </p>
                </div>
                <div id="service-fee-2" className="terms-description">
                    <h5>2. Billing</h5>
                    <p>The Service Fee is automatically subtracted from your payout, so there is nothing you have to do on your end. The billing statement gives you an overview of the monthly transaction total and our Service Fee. </p>
                </div>
                <div id="service-fee-3" className="terms-description">
                    <h5>3. Referral Fee</h5>
                    <p>The referral fee is the payout to the user who sourced, outshifted and facilitated a sale from one of your listings. The user receives a referral fee for every successful transaction they facilitate through their channels. The user that owns the listing (supplier) always decides what the referral fee for each of their listings is, when creating it. </p>
                </div>
            </div>

        </StyledTermsData>        

        );
    }

}


export default TermsData;
