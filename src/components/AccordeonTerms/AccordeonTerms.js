import React from 'react'

import { StyledAccordeonTerms } from './AccordeonTerms.styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt, faLockAlt, faMoneyCheckAlt } from '@fortawesome/pro-duotone-svg-icons';

class AccordeonTerms extends React.Component {

    render() {
        return (

            <StyledAccordeonTerms
                collapsed1={this.props.collapsed1}
                collapsed2={this.props.collapsed2}
                collapsed3={this.props.collapsed3}
            >

                <h3>Outshifter Terms of Service</h3>
                <div className="terms-titel-2">
                    <h5>Welcome to Outshifter!</h5>
                    <p>
                        Please carefully review these General Terms and Conditions of Use (“<strong>Terms</strong>”, “<strong>Agreement</strong>”) before registering for or using the platform, outshifer.com and services offered by Outshifter AS. The Agreement sets out the legally binding terms and conditions for your use of the platform, outshifter.com, including any subdomains thereof, and services (hereinafter collectively referred to as the “<strong>Outshifter Platform</strong>” or “<strong>Platform</strong>”) offered by Outshifter AS. By using, accessing, or registering for the Outshifter Platform you agree to comply with and accept these Terms.<br/>
                    </p>
                </div>
        
                <h5>Contents</h5>

                <ul className="list-unstyled">
                    <li className="sidebar-item sidebar-item-first">
                        <a onClick={this.props.toggle1}><FontAwesomeIcon icon={faShieldAlt} />   General Terms</a>

                                {/* General Terms */}
                                <div id="general-terms" className="container">
                                    <div className="terms-titel">
                                        <h3>Outshifter General Terms and Conditions of Use</h3>
                                        <p>Last updated: 20.01.2020</p>
                                    </div>

                                    <div className="terms-titel-2">
                                        <h5>Welcome to Outshifter!</h5>
                                        <p>
                                            Please carefully review these General Terms and Conditions of Use (“<strong>Terms</strong>”, “<strong>Agreement</strong>”) before registering for or using the platform, outshifer.com and services offered by Outshifter AS. The Agreement sets out the legally binding terms and conditions for your use of the platform, outshifter.com, including any subdomains thereof, and services (hereinafter collectively referred to as the “<strong>Outshifter Platform</strong>” or “<strong>Platform</strong>”) offered by Outshifter AS. By using, accessing, or registering for the Outshifter Platform you agree to comply with and accept these Terms.<br/>
                                            <br/>
                                            When these Terms mention “we,” “us,” and “Outshifter” it refers to Outshifter AS. Outshifter AS is registered in Norway under the company registration number: 917.648.972 and address: Nes Terrasse 33, 1394 Nesbru, Norway. This agreement is between you and Outshifter AS. By agreeing to these Terms, you confirm that you have the authority to agree on your behalf or on behalf of the company you represent as set forth in section 3 of this Agreement.<br/>
                                            <br/>
                                            The following definitions are used in this Agreement:<br/>
                                            <strong>“Customer”</strong> refers to a person or company using the Outshifter Platform as the receiving party of the product or service in transactions provided through the Outshifter Platform.<br/>
                                            <strong>“Mediator”</strong> means any person or company with access to online distribution channels, mediums, and social platforms that can be used for outshifting (see definition below) of products and services.<br/>
                                            <strong>"Supplier"</strong> means a person or company listing products or services available for outshifting (see definition below) through the Outshifter Platform.<br/>
                                            <strong>"User"</strong> includes both Suppliers and Mediators, it refers to any person, Customer or entity with an Outshifter Platform Account or any person, Customer or entity that is using the Outshifter Platform.<br/>
                                            <br/>
                                            For information about our collection and use of personal information in connection with your access to and use of the Outshifter Platform, please see our Privacy Policy.<br/>
                                            <br/>
                                            Platform Users alone are responsible for identifying, understanding, and complying to local laws and regulations, such as, but not limited to taxes, advertising and consumer protection regulations. Outshifter allows for user generated content in the form of User Profiles and Listings, thus Outshifter cannot guarantee the accuracy and applicability of this content. Whenever purchasing products and services from Suppliers utilizing the Outshifter Platform, the sales contract is with the Customer and the Supplier. Outshifter is at no point liable for the delivery of any kind of goods.
                                            <br/>
                                            This Agreement is always available on the Outshifter Platform and through your Outshifter Profile.
                                            </p>
                                    </div>

                                    <div id="general-terms-1" className="terms-description">
                                        <h5>1. The Scope of Outshifter´s Platform</h5>
                                        <p>
                                            1.1 “<strong>Outshifting</strong>” ” is the general expression applied to the action of placing products or services to different and multiple online mediums, channels, platforms and webpages and making them available for sale. The technical solution or functionality used to provide this service may differ amongst the various mediums, channels, platforms, and webpages. Outshifter AS provides users with e-commerce infrastructure and services which allow for the outshifting of products and services and the tracking of products and services facilitated through the Outshifter Platform.
                                            <br/><br/>
                                            1.2 Outshifter does not own, create, sell, resell, provide, control, manage, offer, deliver, or supply any of the products and/or services listed on and through our platform and infrastructure. Users alone are responsible for their Outshifting activities, posts, and engagements. When Users of the Outshifter platform engage in outshifting, they are entering into contract directly with each other. Outshifter AS is not acting as an agent or representative on behalf of any of the Users utilizing our Platform. Outshifter is not liable for delivery of any kind of goods as a result of the transactional contracts made through outshifting, except as it pertains to payments.
                                            <br/><br/>
                                            1.3 Outshifter may contain direct links to third party platforms, services, websites and resources, as well as plug-ins to third party platforms, services, websites and resources. Such Third-Parties may be subject to different terms and conditions and privacy practices. We are not responsible or liable for the availability or accuracy of such Third-Parties, or the content, products or services available through and from them. Links and plug-ins to such Third-Parties are not an endorsement by Outshifter of said Third-Party.
                                            <br/><br/>
                                            1.4 While we strive to offer the best possible experience and service, we do not guarantee or control (i) the quality, safety, suitability, existence and legality of user created content and listings on the Outshifter Platform; or (ii) the performance, conduct, content and delivery of any User or Third-Party. Users are solely liable for how they act and present themselves through the Outshifter Platform. We do not endorse any of the products, services and content listed on, or facilitated by the Outshifter Platform. We do not take any responsibility and liability for any of the content and listings Users convey through the Outshifter Platform to Third-Party Services and their conduct on such Third-Party Services.
                                            <br/><br/>
                                            1.5 Due to the characteristics and structures of the internet, Outshifter cannot guarantee uninterrupted and constant access and availability to the Outshifter Platform. The Outshifter Platform will be unavailable at times for reasons such as, but not limited to, maintenance, updates, errors and failures. Outshifter is not liable for any losses of transactions in that time span. We will have no liability of any sort arising from any interruptions or errors in our site. Outhshifter and its officers, directors and employees shall not be held liable in any case for any direct, indirect, special, exemplary, consequential or incidental damages.
                                            <br/><br/>
                                            1.6 We reserve the right to at any time cease providing any or all of the services at our sole discretion and without notice.
                                        </p>
                                    </div>

                                    <div id="general-terms-2" className="terms-description">
                                        <h5>2. Changes and Modifications to the Agreement</h5>
                                        <p>
                                            We reserve the right to change and modify the Agreement at any time at our discretion. In case of changes or modifications we will notify you through your Outshifter user account or the email(s) provided in your account. Your continued use of, and access to our Platform will confirm your acceptance of the revised Terms. We encourage you to frequently review this Agreement to ensure you understand the terms and conditions that apply to your use of the Outshifter Platform.
                                        </p>
                                    </div>

                                    <div id="general-terms-3" className="terms-description">
                                        <h5>3. Representation</h5>
                                        <p>
                                        3.1 In order to access, use and register for the Outshifter platform, services and website you must be an individual at least 16 years old, or a duly organized, validly existing business, organization or other legal entity in good standing under the laws of the country you are registered and able to enter into legally binding contracts. By using and accessing our Platform you confirm that your status and/or age is compliant with the above-mentioned Terms and you confirm that you have all necessary power, right and authority to enter into this Agreement and perform your responsibilities and grant the rights and authorizations you grant through this Agreement. 
                                        <br/><br/>
                                        3.2 You represent and warrant to Outshifter that: (i) If you are a business, you are appropriately organized, existing and in good standing under the laws of the territory in which your business is registered; (ii) Any information provided by you or your affiliates to Outshifter is correct and complete, and you will update such information as necessary to ensure it at all times remains correct and complete; and (iii) You are not subject to sanctions or otherwise designated on any list of prohibited or restricted parties or owned or controlled by such a party, including but not limited to the lists maintained by the United Nations Security Council, the European Union or its member states, the United States Government, or other applicable government authority.
                                        <br/><br/>
                                        3.3 In the case that you are less than 16 years of age you confirm that you are an emancipated minor, or possess legal parental or guardian consent and are fully able and competent to enter into this Agreement and perform your responsibilities and grant the rights and authorizations you grant through this Agreement.
                                        <br/><br/>
                                        3.4 This agreement does not provide you with exclusivity, nor does it provide you with the authority to make any offers or representations on our behalf. You will not act in a manner that should signal otherwise. As between you and Outshifter, you will be solely responsible for all obligations associated with the use of any Third-Party service, platform or feature that you permit us to use on your behalf, including, but not limited to compliance with any applicable terms and conditions of use and privacy policy.
                                        </p>
                                    </div>

                                    <div id="general-terms-4" className="terms-description">
                                        <h5>4. Security - Loss of Account Information</h5>
                                        <p>
                                            You are solely responsible for maintaining the confidentiality of your username and password. Thus, you are responsible for any and all activities that are conducted through your account. We shall be entitled to assume that a user presenting your username and password is, in fact, you. You agree to notify us immediately of any unauthorized use of your account. We reserve the right at any time to change, modify or amend your username and password.
                                        </p>
                                    </div>

                                    <div id="general-terms-5" className="terms-description">
                                        <h5>5. Term and Termination</h5>
                                        <p>
                                            The term of this agreement will start on the date of your completed registration and acceptance of this contract. It will continue until terminated by us or you as provided below. We may terminate or suspend this agreement or any service immediately without notice to you for any reason at any time. You may terminate this agreement or any service for any reason at any time by deleting your account at outshifter.com. To delete your account please login to your Outshifter account and visit account settings, general and deregister.
                                            <br/><br/>
                                        </p>
                                    </div>

                                    <div id="general-terms-6" className="terms-description">
                                        <h5>6. Copyrights & Trademark</h5>
                                        <p>
                                            6.1 Nothing in this agreement constitutes a partnership, joint venture, franchise, agency, sales representative or employment relationship between you and Outshifter AS. The term “Outshifting” and “Outshifter” name and logo are registered trademarks and belongs to Outshifter AS, this agreement does not provide you with the rights to use our logo and name. Except for the limited right to use as expressly permitted under this Agreement, no other rights of any kind are granted hereunder, by implication or otherwise. This applies to all marketing, branding, sales material, media, packaging, digital media and broadcasting.
                                            <br/><br/>
                                            6.2 You are allowed to promote your Outshifter Profile and Content. When engaging in such activities you agree to ensure that your ads and marketing materials, or publications does not display any Outshifter graphic symbols, logos, or icons, in a manner that would imply Outshifter’s affiliation with or endorsement, sponsorship, or support of your or a Third-Party’s product or service. You may not use an Outshifter trademark or any other Outshifter owned graphic symbol, logo, or icon in a disparaging or derogatory manner, or together with images that disregard our photograph guidelines. The Outshifter logo is a Saturn, slightly tilted to the left. You may only use the Outshifter logo, not the wordmarks. Do not alter the logo in any way, nor add any filters or effects onto it. Make sure to always include your Outshifter URL whenever you reference Outshifter and that any representation of Outshifter’s interface matches the device it is showed on.
                                            <br/><br/>
                                            6.3 You will not interfere with Outshifter’s rights to the trademark, including challenging Outshifter’s use, registration of, or application to register such trademark, alone or in combination with other words, anywhere in the world, and that you will not harm or misuse any Outshifter trademark. You may not use or register, in whole or in part “Outshifter”, “Outshift”, “Outshifting” or any other Outshifter trademark, including Outshifter-owned graphic symbols, logos, icons, or an alteration thereof, as or as part of a company name, trade name, product name, or service name. You may not use an identical or nearly identical Outshifter trademark as a second level domain name. For instance, but not limited to: “Outshift”, “Outshifter” or “Outshifting”.
                                            <br/><br/>
                                            6.4 All product names, trademarks and registered trademarks are property of their respective owners. All company, product, and service names used on the Outshifter Platform are for identification purposes only. Use of these names, trademarks, and brands does not imply our endorsement.
                                            <br/><br/>  
                                            6.5 Users own all content listed on and uploaded to the Outshifter Platform. Outshifter does not claim ownership of content and listings, all copyrights and rights to use are the User´s sole responsibility.
                                        </p>
                                    </div>

                                    <div id="general-terms-7" className="terms-description">
                                        <h5>7. Payments, Referral Fee, & Service Fee</h5>
                                        <p>
                                            7.1 Outshifter allows for payment processing services to be provided by third-party vendors according to the choice of the User. The terms and conditions and privacy practices of these vendors might be different from ours. Through purchasing goods and/or services through third party vendors you agree to their terms and conditions and privacy policies. Please review their term and conditions and privacy policies carefully. 
                                            <br/><br/>
                                            7.2 Payment processing handled by the Outshifter Platform is handled by MANGOPAY S.A. (Mangopay S.A., 59 Boulevard Royal, 2449 Luxembourg) and are subject to MANGOPAY´s <a href="https://www.mangopay.com/terms/MANGOPAY_Terms-EN.pdf" target="_blank">“General Conditions of Use of Electronic Money”</a>, <a href="https://www.mangopay.com/terms/PSP/PSP_MANGOPAY_EN.pdf" target="_blank">“General Conditions of Use for the Payment Services”</a> and <a href="https://www.mangopay.com/privacy/" target="_blank">“Confidentiality Policy”</a>, collectively referred to as the “MANGOPAY Services Agreement”.
                                            <br/><br/>
                                            By registering for payment processing or using the Outshifter platform you agree to be bound by the MANGOPAY Services Agreement. As a condition of Outshifter enabling payment processing services through MANGOPAY, you agree to provide Outhshifter accurate and complete information about you and/or your business, and you authorize Outshifter to share this information and transaction information related to your use of the payment processing services provided by MANGOPAY.
                                            <br/><br/>
                                            7.3 You allow us to subtract one euro from your account when you sign up. This is to verify that the account information you have provided is correct. The one euro is transferred back onto the account once we have verified that the information is correct.
                                            <br/><br/>
                                            7.4 Outshifting enables Users to receive a <b>“Referral Fee”</b> per transaction facilitated through their direct distribution channels and mediums, such as, but not limited to their webpage, online shop, marketplace and social media accounts. The Referral Fee is calculated as a percentage of the total value of the product or service involved in the transaction. The Suppliers sets the applicable Referral Fee for all products and services it uploads and enables for outshifting; thus, the Referral Fee may differ amongst products, services, and Users. Outshifter never intervenes with the Referral Fee set by a Suppler. It is your responsibility to ensure you are familiar with the Referral Fee before agreeing to outshift as a Mediator. The Referral Fee is automatically subtracted from the transaction total and paid out to you.
                                            <br/><br/>
                                            7.5 Outshifter charges a <b>“Service Fee”</b> of 4,8% of the total value of the transaction, plus 0,18 € (Euro) per transaction facilitated through the Outshifter Platform. This fee is only applicable to products and services in listings uploaded by the User. The Service Fee is calculated as a percentage of the total value of the transaction. In addition to the percentage, a flat fee of 0,18 € (Euro) apply to every transaction. The Service Fee is automatically subtracted from the transaction by our payment provider. The Service Fee includes all services provided by Outshifter directly through the Outshifter Platform. The Service Fee will change should you choose to use another payment provider than the default provided through us. If you chose to use another payment provider through our Third-Party plug-ins their fee structure will apply. The fee charged by each Third-Party plug-in is listed on the Outshifter Platform when you chose your outshifting channels. These fees may wary depending on your account, subscription or plan with said Third-Party. Please keep in mind that Third-Party payment providers might have different Privacy Policies and Terms and Conditions than us.
                                            <br/><br/>
                                            7.6 The payment from all transactions facilitated through the Outshifter Platform is paid out at most 30 days in arrears. This is given that the product in question has not been returned or cancelled and is confirmed delivered by the Supplier. 
                                        </p>
                                    </div>

                                    <div id="general-terms-8" className="terms-description">
                                        <h5>7. Shipping, Returns and Cancelations</h5>
                                        <p>
                                            Outshifter does not take part in any shipping, returns, cancelations, complaints, recalls, and reclamations of products and services. It is the Merchant’s responsibility to ensure products and services sold comply with local consumer protection laws and regulation. Shipping, returns, cancelations, reclamations and the likes should be arranged between users of the Outshifter Platform. Outshifter has no responsibility for these arrangements between third parties. All contact regarding the aforementioned points should occur directly between the seller and buyer of said product or service. 
                                        </p>
                                    </div>

                                    <div id="general-terms-8" className="terms-description">
                                        <h5>8. Shipping, Returns, Customs and Cancelations</h5>
                                        <p>
                                            8.1 Outshifter does not take part in any shipping, returns, cancelations, complaints, recalls, and reclamations of products and services. It is the User´s responsibility to ensure products and services sold comply with local consumer protection laws and regulation. Shipping, returns, cancelations, reclamations and the likes should be arranged between Users of the Outshifter Platform and the Customer. Outshifter has no responsibility for these arrangements between third parties. All contact regarding the aforementioned points should occur directly between the seller and buyer of said product or service.
                                            <br/><br/>
                                            8.2 If you are a Supplier you are the seller of the products and services, your responsibilities include handling, shipping, returns, cancelations, reclamations, nonconformities, recalls, delivery errors, refunds, complaints, customer support and other potential issues and processes dealing with the customer. Outshifter is at no point responsible for the order, we only facilitate the transaction and forward you the Order Information. We expect you to: (i) Ship products and provide services within reasonable time, at a minimum according to local consumer laws and regulations; (ii) Package your products and provide services in a commercially reasonable manner; (iii) Include all relevant return, reclamation, contact and other relevant sales information with the order; (iv) Include an order-specific packing slip within each shipment of your products and services, and, if applicable, any tax invoices; (v) Identify yourself as the seller of the product on all packing slips or other information included or provided in connection with your products and services and as the person/business to which the customer may return the applicable product, complain, and use his/hers right of withdrawal according to local consumer protection laws. 
                                            <br/><br/>
                                            8.3 The Outshifter Platform offers a shipping integration and access to Third-Party shipping services, such as but not limited to Postmen, Aftership, DHL, Bring, and UPS. When the Customer orders products and/or services to be shipped through these Third-Party shipping services it is your responsibility as a Supplier to fulfill and ship the order according to the requirements of the Third-Party shipping provider. 
                                            <br/><br/>
                                            8.4 When ordering products and services from outside of your residing territory you may be subject to import duties and taxes, which are levied once the package reaches the specified destination. Any additional charges for customs clearance must be borne by the Supplier or the Customer; Outshifter has no control over these charges. Customs policies vary from country to country, so you should contact your local customs office for further information. It is your responsibility to comply with all laws and regulations of the country in which you are receiving the products.
                                            <br/><br/>
                                            <b>The following two sections (M.1 & M.2) only apply to Platform Users engaging in a Supplier specific role:</b>
                                            <br/><br/>
                                            <b>M.1 The Customer Relationship</b>
                                            <br/><br/>
                                            M.1.1 As the Supplier you are always the responsible and liable party in the sales transaction of products and services facilitated through the Outshifter Platform. Thus, you are the liable party to the Customer in the Sales Contract. The Outshifter Platform only facilitates the transaction and the Mediator only enables Content distribution.
                                            <br/><br/>
                                            M.1.2 You have to clearly identify and make accessible your terms and conditions, privacy policies, return policies, order cancelation policies, refund policies and, reclamation policies associated with each Listing. These will be made readily available for the Customer through the Outshifter Platform.
                                            <br/><br/>
                                            M.1.3 All post order dialogue should be handled directly with the Customer. The Customer can contact you regarding orders and will be entitled to the same level of service you offer through your other sales and distribution channels. You warrant that in your dealing with Customers and fulfillment of Sales Contracts you will comply to all local consumer protection laws and regulations.
                                            <br/><br/>
                                            <b>M.2 Receiving Orders and Order Fulfillment</b>
                                            <br/><br/>
                                            M.2.1 We will provide Order Information to you for each order received through the Outshifter Platform from your Listing(s). The Order Information will by default be sent to your registered email address, unless you use a plug-in to the Outshifter Platform that requires another form of communication.
                                            <br/><br/>
                                            M.2.2 All orders must be processed and prepared for fulfillment in a timely fashion. We expect you to check for orders from the Outshifter Platform at a minimum every business day. 
                                            <br/><br/>
                                            M.2.3 You are solely responsible for order fulfillment of orders received through our Platform. Outshifter only forwards you the Order Information. You are the responsible and liable party to the Customer and own the Sales Contract. 
                                            <br/><br/>
                                            M.2.4 You will ensure that your products and/or services (including packaging) and the offer and ensuing sale and fulfillment of any of your products or services comply with all applicable laws (including all minimum age, marking and labelling requirements). Furthermore, you declare that your products and services were not produced, manufactured, assembled, or packaged by forced, prison or child labor.                 
                                        </p>
                                    </div>

                                    <div id="general-terms-9" className="terms-description">
                                        <h5>9. Content & Information About Listed Product and Services (Listings)</h5>
                                        <p>
                                            The term Content (<b>“Content”</b>) refers to all images, photos, symbols, information, text, reviews, products, and services you upload to and create on the Outshifter Platform.
                                            <br/><br/>
                                            9.1 Outshifter is not the manufacturer, handler, seller, distributor, designer, or producer of the products and services sold and listed through our Platform. Outshifter simply allows for outshifting to take place. While we work to ensure that product and service information appearing on product listings through our platform is correct, we cannot guarantee the accuracy of such listings. All products and services listed on the Outshifter Platform are User created. We do not endorse, guarantee, authenticate, represent, or otherwise approve of any of the products and services listed on the Outhsifter Platform, nor their description and presentation. Users are responsible for writing product and service descriptions and their sales policies. Thus, we encourage you to exercise caution and ensure you do proper research before entering into an outshifting contract with another User. Please always read labels, warnings and directions provided with the product and service before use. Outshifter accepts no liability for inaccuracies or misstatements about products and services provided by our Users and Third-Parties. 
                                            <br/><br/>
                                            9.2 When uploading and creating product and service listings (“<b>Listings</b>” or “<b>Listing</b>”) you represent and warrant that: (i) You have the legal right and capacity to enter into this agreement in your jurisdiction; (ii) You own the right to use and sell the Content, products and services posted by you on the Outshifter Platform, or otherwise have the right to distribute the Content, products and services in the territories you claim; (iii) The posting and use of your Content, products and services on, or through the Outshifter Platform, does not violate, misappropriate or infringe on the rights of any Third-Party, including, without limitation, privacy rights, publicity rights, copyrights, trademark and other intellectual property rights; (iv) All information, such as product origin and product description, regarding the products and services provided by you is truthful, accurate and comply with local copyrights, consumer protection and marketing laws and regulations; (v) Listings should always be maintained and updated so the information they portray is accurate and current. The inventory listed on the Outshifter Platform by you, shall at all times represent inventory you can readily ship; and (vi) You agree to pay for all royalties, fees, and any other monies owed by reason of copyright infringement or missing licenses of products and services you list on, or through the Outshifter Platform.
                                            <br/><br/>
                                            9.3 Outshifter never owns or claims to own any of the Content or Listings you create and upload to our Platform. However, in order for us to provide the Outshifter Platform, we need the legal permission to use your Content and Listings. Through this agreement you grant us a royalty free non-exclusive, transferable, sub-licensable, and worldwide license to host, use, distribute, copy, run, modify (e.g. for technical purposes, such as making sure your submission is viewable on a smartphone as well as a computer), and display the Content and Listing(s) uploaded by you to our Platform. You can revoke this license at any time by deleting the Content in question or deleting your User Account on the Outshifter Platform.
                                            <br/><br/>
                                            9.4 Uploaded Content and Listings must follow Outshifter´s technical requirements, including, but not limited to file size, file name, and formatting (please see our <a href="/solution">Solution Guide</a> for more details). We reserve the right to remove Listings at our discretion if it does not meet our Platform´s standards. Outshifter reserves the right to use, format and re-distribute the uploaded Content and Listings so it fits our platform requirements and the platform integrations and plug-ins it is intended to work on.
                                            <br/><br/>
                                            9.5 Transparency and honesty is of utmost importance to us at Outshifter. How you present yourself on and through the Outshifter Platform matters. You represent and warrant that: (i) All information you provide to us and Content you upload to our Platform is correct, accurate, current, genuine, and does not infringe, violate, misappropriate or infringe on the rights of any Third-Party, including, without limitation, privacy rights, publicity rights, copyrights, trademark and/or other intellectual property rights; (ii) You agree to pay for all royalties, fees, and any other monies owed by reason of copyright infringement or missing licenses of products and services you post on, or through the Outshifter Platform.
                                            <br/><br/>
                                            9.6 How you present yourself on Third-Party platforms is none of our business. However, we will not tolerate association with and facilitation through the Outshifter Platform of behavior and Content including, but not limited to, promoting racisms, glorifying violence, and/or inciting hatred. In addition to content misleading consumers and falsely and inaccurately portraying products and services. We reserve the right to cancel your Outshifter Account at any time. Be aware that other Users might have strict requirements on how they expect you to present yourself and what Content they will allow their brand to be associated with. 
                                            <br/><br/>
                                            9.7 You warrant that: (i) You will make yourself familiar with all local marketing laws for the territories you operate in; (ii) You will follow all marketing laws, consumer protection laws, advertising laws and other rules and regulations applicable to for the territories you operate in; (iii) You will not mislead consumers, make false claims and statements, and otherwise misrepresent the products and services you list, outshift or sell; (iv) Outshifter and potential Users you outshift for cannot be held liable for any of your misinterpretation, violation of, or breaking of applicable marketing, consumer protection and advertising laws and regulations. 
                                            <br/><br/>
                                            9.8 We reserve the right to at any time remove any Account, Content or Listing at our sole discretion and without notice. For more information on Listing Guidelines please see our <a href="/solution">Solution Guide</a>. You agree that you cannot hold Outshifter liable for any lost transactions or damages should we remove Listings you outshift.
                                            <br/><br/>
                                        </p>
                                    </div>

                                    <div id="general-terms-10" className="terms-description">
                                        <h5>10. Prohibited, Content, Items Products and Services</h5>
                                        <p>
                                        10.1 All products, items, content and services listed, outshifted and sold through our Platform have to comply to local laws and regulations, as well as Outshifter´s policies. Please keep in mind that when outshifting to Third-Party platforms, these platforms might have different policies than us regarding what is prohibited items, content, products and services. The following are examples of prohibited products and services including, but not restricted to: 
                                        <br/><br/>
                                            <ul>
                                                <li>Illegal, Prescription, or Recreational Drugs</li>
                                                <li>Tobacco Products and related Paraphernalia</li>
                                                <li>Ingestible Supplements</li>
                                                <li>Weapons, Ammunitions, or Explosives</li>
                                                <li>Live Animals and Certain Animal products</li>
                                                <li>Adult Product and Services</li>
                                                <li>Alcohol</li>
                                                <li>Healthcare Products and Services</li>
                                                <li>Body Parts and Fluids</li>
                                                <li>Real Money and Gambling Services</li>
                                                <li>Counterfeit products and digital media without proper copyrights</li>
                                                <li>Stolen Property</li>
                                                <li>Real, Virtual and/or Fake Currency</li>
                                                <li>Products and services with no real commercial intent</li>
                                                <li>Recalled Products</li>
                                                <li>Gold, Precious Stones and Gemstones</li>
                                            </ul>
                                            In addition, Outshifter does not allow the selling of what we consider offensive materials such as, but not limited to products promoting racisms, glorifying violence, and/or inciting hatred. In addition to misleading products and services and the way they are portrayed.                      
                                            <br/><br/>
                                            10.2 Outshifter only authorize the sale of new products (no custom-made / made-to-measure, vintage or second-hand) and requires that all branded stock is genuine. All products and stock must be physically owned by the Supplier and in the quantity and condition listed on Outshifter. Uploading Listings that rely on Dropshipping, pre-order, or stock in transit is prohibited.
                                            <br/><br/>
                                            10.3 You warrant to us that: (i) You will not engage in outshifting of any products or services of the nature listed above; and (ii) If you come across any products or services on our Platform that could fit in the aforementioned categories you will notify us at: <a href="mailto:name@rapidtables.com">support@outshifter.com</a>. Outshifter reserves the right to suspend your account without any reason, at any time without notice and liability to you.            
                                        </p>
                                    </div>

                                    <div id="general-terms-11" className="terms-description">
                                        <h5>11. Taxes</h5>
                                        <p>
                                            The term taxes in this agreement refers to, but is not limited to: Any and all value added, sales, use, excise, import, export and other taxes and duties assessed, incurred or required to be collected or paid for any reason in connection with any advertisement, offer, or sale of products or services by you on, through, or in connection with our Platform (“<b>Taxes</b>”). 
                                            <br/><br/>
                                            11.1 You are responsible for paying and collecting all applicable taxes in the territories you operate in. By accepting this agreement, you acknowledge that you follow local laws and regulations and that you are familiar with the tax laws in the territories you operate in. Outshifter is not responsible for collecting, remitting, or reporting any Value Added Taxes (VAT) or other taxes arising from your use of the Outshifter Platform. If we are required by law to collect any value added, sales, use, or similar taxes from you, you will pay such taxes to us. Furthermore, if we are required to comply with local tax authorities in the territories you conduct your business, we reserve the right to comply and share information with them. 
                                            <br/><br/>
                                            11.2 You agree that the price listed by you for your products or services through the Outshifter Platform includes any customs duty, value added tax or other tax that you may be required to pay in connection with the sale.
                                            <br/><br/>
                                            11.3 If you are a business registered in Norway we will pay VAT on the services provided to you. If you are registered outside of Norway we will not pay VAT and other applicable taxes on the services provided to you. You are liable and responsible to pay all applicable taxes in the territories you operate.
                                            <br/><br/>
                                            11.4 Outshifter is required by law to collect your VAT registration number and/or other tax identification numbers for certain territories. You warrant to us that you will provide us with such information if requested and that the VAT registration number you submit to us is correct, current, belongs to the business you operate, and you will update this information immediately in case of changes. 
                                            <br/><br/>
                                            11.5 Outshifter reserves the right to request additional information and to confirm the validity of any User´s account information (including without limitation your VAT registration number) from you or government authorities and agencies as permitted by law and you hereby authorize us to request and obtain such information from such government authorities and agencies. Further, you agree to provide any such information to us upon request.
                                            <br/><br/>
                                            11.6 We reserve the right to suspend any services to you without notice, if we suspect you are not complying with local tax laws and regulations.                    
                                        </p>
                                    </div>

                                    <div id="general-terms-12" className="terms-description">
                                        <h5>12. Interactions on the Outshifter Platform</h5>
                                        <p>
                                            12.1 The <b>“Outhifting Contract”</b> is between you and the other User you connected with. It sets forth the Terms you have to adhere to when engaging in outshifting with said User, including Referral Fee specifics. Outshifter is never involved or a liable party in your engagement with other Users. It is solely your responsibility to understand and judge agreements you make with other Users.
                                            <br/><br/>
                                            12.2 Your interactions with Users on the Outshifter Platform is done solely at your own risk. Outshifter facilitate the connection between other Users and you, however, all specifics of that relationship including, but not limited to contractual obligations, liabilities, and deliverables such as the Outshifting Contract is your own liability and responsibility. Outshifter is at no point a responsible party in the contract between you and other Users. Outshifter cannot be held liable for your interactions and contracts with other Users and other Third-Party platforms.
                                            <br/><br/>
                                            12.3 Various Users might have different requirements to what they consider proper Content and behavior regarding the outshifting of products and services. Through the Outshifting Contract you might be obliged to refrain from certain Content and presentations. It is your responsibility to ensure you are familiar with what is expected in each outshifting contract and to oblige by said Terms. You warrant to us that you will within reasonable means strive to follow all terms and conditions set forth in the Outshifting Contract. 
                                            <br/><br/>
                                            12.4 Outhshifter is not liable for the content posted by our Users, they chose how to present themselves on the Outshifter Platform and through the outshifting process. Being a User on the Outshifter Platform does not mean we endorse, sponsors, or support, or otherwise suggest the authenticity and accuracy of the claims made by said User. Nor do we approve, endorse or, otherwise interfere with the way they present themselves and act on our Platform and Third-Party platforms. It is your responsibility to verify and do necessary background check of Users and claims made by Users before entering into a contractual relationship with them. Outshifter will not be held liable for the Users content, behavior, performance, or failure to meet contractual obligations you have agreed to with them. 
                                            <br/><br/>
                                            12.5 You acknowledge that the other User can cancel the Outshifting Contract at any time, without cause. Similarly, you can cancel the contract and refrain from engaging in outshifting at any time without cause. Neither Outshifter, nor the other User can be held liable for any lost transactions or other damages resulting from a canceled Outshifting Contract. 
                                            <br/><br/>
                                            12.6 The Supplier owns the customer relationship and is the liable party in all transactions. Including, but not limited to responsibility for handling, shipping, returns, cancelations, reclamations, nonconformities, recalls, delivery errors, and refunds. Outshifter is never the liable party in a transaction, nor do we fulfill any orders or transactions. You warrant that: (i) You will not engage in behavior that suggest you are the selling party or make any guarantees, claims, representations or other statements on behalf of the Supplier or Outshifter, if you are not the Supplier and (ii) You will make it obvious that you are not the liable party in the transaction if you are not the Supplier. 
                                            <br/><br/>
                                            12.7 You will not solicitate or harass any of the other Users and Customers met through the Outshifter Platform. All engagement and interaction with Customers and Users met through the Outshifter Platform are at your own risk. We highly advise against communicating with Users outside of the Outshifter Platform. Outshifter will not be held liable for any damages or other issues arising from your engagement and communication with Users and Customers met through our Platform.
                                            <br/><br/>
                                            12.8 You agree that we may use mechanisms that rate, or allow Users to rate, products, services and performance of Users on the Outshifter Platform, we may make these ratings and feedback available within the Outshifter Platform.
                                            <br/><br/>
                                        </p>
                                    </div>

                                    <div id="general-terms-13" className="terms-description">
                                        <h5>13. Suggestions and Feedback</h5>
                                        <p>
                                            We welcome and encourage you to provide feedback, comments, ideas and suggestions for improvements to the Outshifter Platform regarding our services, platform and website. Any feedback you submit to us will be considered non-confidential and non-proprietary to you. By submitting feedback to us, you grant us a non-exclusive, worldwide, royalty-free, irrevocable, sub-licensable, perpetual license to use, publish and implement, or otherwise exploit this feedback or material as we see fit.
                                        </p>
                                    </div>

                                    <div id="general-terms-14" className="terms-description">
                                        <h5>14. Third Party Service Providers & Plug-Ins</h5>
                                        <p>
                                            14.1 In order to provide you the best possible services on the Outshifter Platform we use the services of Third-Party Service Providers. Through using some of our services you also agree to the terms and conditions of our Third-Party Service Providers. These services include shipping partners and aforementioned payment providers. When you chose to use certain plug-ins and to outshift to other Third-Party Platforms you might also have to agree to their Terms & Conditions and applicable privacy policies. By consenting to the outshifting of Listings to Third-Party platforms you Agree to the terms and conditions of the Third-Party platforms the listings are Outshifted to. 
                                            <br/><br/>
                                            14.2 When outshifting you warrant that you will be compliant with third parties Terms and Conditions. Third-Party platforms might have different terms and conditions than us. It is your responsibility to ensure products and services sourced from our Platform is compliant with the platform you chose to outshift to.
                                            <br/><br/>
                                            14.3 The Outshifter Platform contains links and plug-ins to third party platforms and services. A link or plug-in is at no point an endorsement, representation, sponsorship, verification or support of said Third-Party platform or service. You access and use Third-Party platforms and services solely at your own risk. 
                                            <br/><br/>
                                        </p>
                                    </div>

                                    <div id="general-terms-15" className="terms-description">
                                        <h5>15. Indemnification</h5>
                                        <p>
                                        You release Outshifter and agree to indemnify, defend and hold harmless Outshifter and its officers, directors, and employees against any claim, cost, damage, expense, loss, settlement, or other liability arising from or related to: (i) Your actual or alleged breach of any responsibilities in this agreement; (ii) The collection, payment, or failure to collect or pay your taxes; (iii) Any sales channels owned or operated by you, your products and/or services (including the offer, sale, fulfilment, refund, cancellation, return or adjustments thereof), your materials, any actual or alleged infringement of any intellectual property rights by any of the foregoing, violation of consumer protection and marketing laws, and any personal injury, death or property damage related thereto; and (iv) Any Content you post, upload, list, use, distribute, store or otherwise transmit through the Platform.
                                        </p>
                                    </div>

                                    <div id="general-terms-16" className="terms-description">
                                        <h5>16. Disclaimer</h5>
                                        <p>
                                        THE OUTSHIFTER PLATFORM INCLUDING CONTENT, SOFTWARE FUNCTIONS, PLUG-INS, AND INFORMATION IS PROVIDED AND MADE AVAILABLE ON A “AS IS”, “AS AVAILABLE” BASIS, WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESSED OR IMPLIED. YOU USE AND PARTICIPATE IN THE PLATFORM AT YOUR OWN RISK. OUTSHIFTER DISCLAIMS TO THE FULLEST EXTENT OF THE LAW INCLUDING, BUT NOT LIMITED TO: (I) THE IMPLIED WARRANTIES OF FITNESS FOR A SPECIFIC PURPOSE, MERCHANTABILITY, NON-INFRINGEMENT, TITLE, QUALITY, PERFORMANCE, NON-INTERFERENCE WITH INFORMATION AND ACCURACY OF CONTENT; (II) ANY IMPLIED WARRANTIES AND REPRESENTATION ARISING FROM USAGE, COURSE OF PERFORMANCE, OR THIS AGREEMENT; (III) ANY CLAIM, LIABILITY, OBLIGATION OR LIABILITY, WHETHER OR NOT IT ARISES FROM OUR NEGLIGENCE. WE DO NOT WARRANT THAT THE SERVICE WILL BE CONTINUOUSLY AVAILABLE, ERROR FREE, AND UNINTERRUPTED, NOR CAN WE GUARANTEE IT MEETS YOUR REQUIREMENTS. WE CANNOT BE HELD LIABLE FOR ANY SERVICE INTERRUPTIONS, DEFECTS, OR SYSTEM FAILURES THAT MAY AFFECT THE ACCEPTANCE OF TRANSACTIONS AND ORDERS OR OTHERWISE DISRUPT YOUR ENGAGEMENT WITH OUR PLATFORM.
                                        <br/><br/>
                                        AS OUTSHIFTER IS NOT THE RESPONSIBLE PARTY IN THE TRANSACTION BETWEEN THE CUSTOMER AND THE USER, NOR THE RESPONSIBLE PARTY FOR CONTRACT SPECIFICS BETWEEN THE PLATFORM USERS, WE WILL NOT BE INVOLVED IN ANY POTENTIAL DISPUTE(S) SHOULD ONE ARISE BETWEEN YOU AND/OR ANY OF THE OTHER PARTIES. EACH PARTICIPANT IN A DISPUTE RELEASE OUTSHIFTER AND ITS EMPLOYEES, DIRECTORS AND OFFICERS FROM ANY CLAIMS, DAMAGES AND DEMANDS.
                                        </p>
                                        </div>

                                    <div id="general-terms-17" className="terms-description">
                                        <h5>17. Limitation of Liability</h5>
                                        <p>
                                            To the maximum extent permitted by law, Outshifter shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: (i) Your access to or use of or inability to access or use the service; (ii) Any conduct or content of any third party on the service, including without limitation, any defamatory, offensive or illegal conduct of other users or third parties; or (iii) unauthorized access, use or alteration of your transmissions or content.
                                        </p>
                                    </div>

                                    <div id="general-terms-18" className="terms-description">
                                        <h5>18. Governing Law and Jurisdiction</h5>
                                        <p>
                                            Any dispute between you and Outshifter will be governed by these Terms and Norwegian law, without giving effect to any conflict of laws principles that may provide for the application of the law of another jurisdiction.
                                        </p>
                                    </div>

                                    <div id="general-terms-19" className="terms-description">
                                        <h5>19. Severability</h5>
                                        <p>
                                            These Terms, together with the Privacy Policy and any amendments and any additional agreements you may enter into with Outshifter shall constitute the entire agreement between you and Outshifter concerning the access to and use of our Platform. If any provision of these Terms is deemed invalid, then that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms will remain in full force and effect.
                                        </p>
                                    </div>


                                </div>
                    </li>

                    <li className="sidebar-item">
                        <a onClick={this.props.toggle2}><FontAwesomeIcon icon={faLockAlt} />   Privacy Policy</a>
                    
                            {/* Privacy Policy */}
                            <div id="privacy-policy" className="container">
                                <div className="terms-titel">
                                    <h3>Outshifter´s General Privacy Policy</h3>
                                    <p>Last updated: 20.01.2020</p>
                                </div>

                                <div className="terms-titel-2">
                                    <h5>Thank you for using Outshifter!</h5>
                                    <p>
                                        At Outshifter we are committed to ensuring the highest level of trust and transparency. Thus, privacy and security of your personal data is of the utmost importance to us. Please carefully review our Privacy Policy before using our platform, website and services (“Platform”).
                                        <br/><br/>
                                        This Privacy Policy describes how we might gather, store, share and use personal information related to your use of our Platform. The Policy applies to the entire Outshifter Platform. When this policy mentions “Outshifter,” “we,” “us,” or “our,” it refers to Outshifter AS, which is responsible for your information under this Privacy Policy (the “Data Controller”). 
                                        <br/><br/>
                                        By using or accessing the Outhsifter Platform you acknowledge that we might collect, use, and share your information as described in this Privacy Policy, in addition to the terms and conditions set forth in our <a href="#general-terms">General Terms & Conditions</a>.
                                    </p>
                                </div>

                                <div id="privacy-policy-1" className="terms-description">
                                    <h5>1. Personal Information Collected Through the Outshifter Platform</h5>
                                    <p>
                                        When you use, access, register for the Outshifter Platform, and purchase products or services facilitated through our Platform we collect certain information about you. The main reason for this is for us to be able to offer our Platform to you and deliver on the terms set forth in our General Terms & Conditions. Examples of how and what we use your information for includes:
                                        <ul>
                                            <li>Processing of orders, let you manage your account, and enable outshifting.</li>
                                            <li>Continuously improve our Platform. Through collecting information on your recent visits to our Platform and which parts of the Platform you engaged with, this allows us to understand how people use our Platform so we can improve it.</li>
                                            <li>Being Compliant. We use information provided by you to make sure we are compliant with local laws and regulations. For instance, tax compliance and fraud prevention.</li>
                                        </ul>
                                        Your decision not to supply us with required information could result in us not being able to provide our Platform to you.
                                        <br/><br/>
                                        <h6>1.1 Information you Provide</h6>
                                        When you use our Platform you often provide information to us, such as when you register for an account or a make a purchase. Information we collect depends on which services you want to use and may include:
                                        <ul>
                                            <li>Name</li>
                                            <li>Email</li>
                                            <li>Phone Number</li>
                                            <li>Billing Information & Payment Method</li>
                                            <li>Shipping Address</li>
                                            <li>Tax Identification Number</li>
                                            <li>Social Media Account Information</li>
                                            <li>Transaction Information</li>
                                            <li>Location & Nationality</li>
                                            <li>Company Name, Contact Person, & Company Registration Number</li>
                                        </ul>
                                        <h6>1.2 Information We Automatically Collect</h6>
                                            When you use and access the Outshifter Platform, such as when you visit our website, we might automatically collect information about how you use it and the devices you use to access it on. Information we might collect automatically:                            
                                        <ul>    
                                            <li>IP Address</li>
                                            <li>Device Information</li>
                                            <li>Information on how you use our Platform</li>
                                        </ul>
                                    </p>
                                </div>

                                <div id="privacy-policy-2" className="terms-description">
                                    <h5>2. Sharing of Your Information</h5>
                                    <p>
                                        We only share your information as outlined in this policy. The reason we share your information is to be able to provide our services and Platform to you. We only share information with Service Providers and Companies of the following nature:
                                        <ul>
                                            <li>Companies that provide services to deliver and process your purchases, such as payment service providers and shipment and delivery providers.</li>
                                            <li>Companies approved by you, such as social media sites (if you choose to link your accounts to us) and Suppliers that you place an order from.</li>
                                            <li>Law Enforcement and Authorities. For instance, in tax related matters and to avoid fraud. </li>
                                        </ul>
                                        We may provide third parties with aggregated but anonymized information and analytics about how our Platform is being used, before we do so, we will make sure that it does not identify you.
                                    </p>
                                </div>

                                <div id="privacy-policy-3" className="terms-description">
                                    <h5>3. Information Regarding Cookies</h5>
                                    <p>
                                        Outshifter uses cookies and similar technologies to help provide, protect, and improve the Outshifter Platform.
                                        <br/><br/>
                                        <h6>3.1 What Are Cookies?</h6>
                                        Cookies are small text files that are used to store or retrieve information to perform certain functions and remember visits to a website. There are 2 distinct types of cookies – session cookies and persistent cookies. A session cookie is only accessible while your browser is open and is deleted as soon as you navigate away from our website. A persistent cookie can remain on your computer for a pre-defined period of time, or until they are forcibly deleted. Other technologies including pixels, tags, web beacons or local storage also store and retrieve data on a device and are similar to cookies. A further explanation about cookies is available on: http://www.allaboutcookies.org/
                                        <br/><br/>
                                        <h6>3.2 How Outshifter Uses Cookies</h6>
                                        We use information gathered from cookies to help improve your experience on our Platform, for security and to personalize content. For example, they help us to identify and customize the experience for you, or to determine the most relevant related products to show you when you're browsing. The list below details how we use cookies on our Platform:
                                        <ul>
                                            <li>Necessary: These are required for the operation of our Platform. They include, for example, cookies that enable you to log into secure areas of our Platform. Examples of necessary cookies we use are JSESSIONID which is used as part of security to access the Platform or X-Mapping- which is used to route data and page requests to the correct server. These cookies are deleted when you close your browser.</li>
                                            <li>Functionality: These are used to recognize you when you return to our Platform. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region). An example is stack_ch which allows us to track your entire journey on our Platform or gpv_p12 which captures which page on three.ie you've come from prior to the one you're on.</li>
                                            <li>Session cookies: These are used to maintain your session when you sign in on Outhsifter, or when purchasing a product outshifted through our Platform. If you choose to deny this cookie, this will affect your ability to purchase online or to remain signed in on your account online. An example of a session cookies is PHPSESSID. The PHPSESSID cookie is set by our website to enable it to store state data. It is used to establish a user session and to pass state data via a session cookie. It helps maintain a logged-in status for a user between pages.</li>
                                        </ul>
                                        <h6>3.3 Third party cookies</h6>
                                        We use cookies served by third parties in order to improve our Platform; personalize your experience; and understand how our Platform is used. We also use cookies to make our advertising on other websites more relevant. Using information collected about you for advertising purposes is known as targeted or behavioral advertising. You can opt out of this behavioral advertising on the web browser you are currently using with an "opt-out cookie" by visiting http://www.youronlinechoices.com/ie/your-ad-choices or by using the specific opt-outs listed below. If you choose to turn off online behavioral advertising it does not mean you will no longer receive online advertising, it means that the advertising you see may not be tailored to your interests or preferences on the web browser you are currently using.
                                        <br/><br/>
                                        <h6>3.4 Google Analytics</h6>
                                        This cookie is used to recognize repeat visitors to our Platform. These cookies may contain some anonymous data such as the method you used to enter the Platform, the path you took within the Platform, individual pages you viewed and any options that you selected along the way.
                                        <br/><br/>
                                        Google Analytics cookies are used to collect anonymous information about how visitors use our Platform. We use the information to compile reports and to help us improve our Platform. The information collected is anonymous and includes the number of visitors to the Platform, what pages they visited and where they have come to the Platform from. More information is available on: https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage           
                                    </p>
                                </div>

                                <div id="privacy-policy-4" className="terms-description">
                                    <h5>4. Data Retention</h5>
                                    <p>
                                        In general, we keep the information you provide us with and generate through our Platform, for as long as is necessary for the performance of the contract between you and Outshifter (see <a href="#general-terms">Terms & Conditions</a>) and to comply with our legal obligations. For Merchants, Mediators, and Customers this means we keep the information as long as you have an account with us. Once you terminate your relationship with us, we generally continue to keep certain information for legitimate business purposes, such as to ensure we are compliant with local tax laws and regulations and audit purposes. 
                                    </p>
                                </div>

                                <div id="privacy-policy-5" className="terms-description">
                                    <h5>5. Your Rights</h5>
                                    <p>
                                    We want you to be in control of how your personal information is being used by us. As a user of Outshifter´s Platform you have several rights associated with your information. In accordance with European General Data Protection Regulation (GDPR) you have the right to the following:
                                    <ul>
                                            <li><strong>The right to access </strong>– You have the right to request Outshifter for copies of your personal information. We may charge you a small fee for this service.</li>
                                            <li><strong>The right to rectification</strong> – You have the right to request that Outshifter correct any information you believe is inaccurate. You also have the right to request Outshifter to complete the information you believe is incomplete.</li>
                                            <li><strong>The right to erasure</strong> – You have the right to request that Outshifter erase your personal information, under certain conditions.</li>
                                            <li><strong>The right to restrict processing</strong> – You have the right to request that Outhifter restrict the processing of your personal information, under certain conditions.</li>
                                            <li><strong>The right to object to processing</strong> – You have the right to object to Outshifter processing of your personal information, under certain conditions.</li>
                                            <li><strong>The right to data portability</strong> – You have the right to request that Outhifter transfer the information that we have collected to another organization, or directly to you, under certain conditions.</li>
                                        </ul>
                                        These rights can be exercised at any time by updating your information and preferences in the account settings page on the Outshifter Platform or contacting us at privacy@outshifter.com. If you make a request, we have one month to respond to you.
                                    </p>
                                </div>

                                <div id="privacy-policy-6" className="terms-description">
                                    <h5>6. Information About Children</h5>
                                    <p>
                                    Outshifter´s Platform is not directed to children under the age of 16. We do not knowingly collect personal information from children under 16 years of age. If you are under the age of 16, please do not use the Outshifter Platform and do not provide any personal information to us. 
                                    <br/><br/>
                                    If you believe that we are processing the personal information concerning a child, please contact us using the information provided under the “How to Contact Us” section, at the bottom of this page.
                                    </p>
                                </div>

                                <div id="privacy-policy-7" className="terms-description">
                                    <h5>7. Changes to the Privacy Policy</h5>
                                    <p>
                                    We reserve the right to change this Privacy Policy from time to time, to reflect how we are processing your information. If we make significant changes, we will make that clear on the Outshifter Platform, or by some other means of contact such as email, so that you are able to review the changes before you continue to use our Platform. If you disagree to the updated Privacy Policy, you may cancel your account and discontinue using our Platform. If you do not cancel your account before the changes in the Privacy Policy becomes effective, your continued access to the Outshifter Platform and use of our Platform will be subject to the updated Privacy Policy.
                                    </p>
                                </div>

                                <div id="privacy-policy-8" className="terms-description">
                                    <h5>8. How to Contact Us</h5>
                                    <p>
                                    Thank you for using Outshifter and reading our Privacy Policy. For any questions or concerns regarding this policy and how we process and handle your data, please contact us at privacy@outshifter.com, or using the information below.
                                    <br/><br/>
                                        Outshifter AS
                                        <br/>
                                        Nes Terrasse 33,
                                        <br/>
                                        1394 Nesbru,
                                        <br/>
                                        Norway
                                    </p>
                                </div>
                            </div>
                    </li>


                    <li className="sidebar-item">
                        <a onClick={this.props.toggle3}><FontAwesomeIcon icon={faMoneyCheckAlt} />   Transactions</a>

                            {/* Transactions */}

                            <div id="transactions" className="container">
                                <div className="terms-titel">
                                    <h3>Outshifter Terms and Conditions for Transaction</h3>
                                    <p>Last updated: 20.01.2020</p>
                                </div>

                                <div className="terms-titel-2">
                                    <p>
                                        Please carefully review these Terms and Conditions for Transaction (<b>“Terms”</b>, <b>“Agreement”</b>) before engaging in transactions, and using the platform and services offered by Outshifter AS. The Agreement sets out the terms and conditions for the transaction and your use of the platform, outshifter.com, including any subdomains thereof, and services (hereinafter collectively referred to as the “<b>Outshifter Platform</b>” or “<b>Platform</b>”) offered by Outshifter AS. By using, transacting, accessing, or registering for the Outshifter Platform you agree to comply with and accept these Terms.
                                        <br/><br/>
                                        When these Terms mention “we,” “us,” and “Outshifter” it refers to Outshifter AS. Outshifter AS is a limited liability company registered in Norway under the company registration number: 917648972 and address: Nes Terrasse 33, 1394 Nesbru, Norway. This agreement is between you and Outshifter AS.
                                        <br/><br/>
                                        For information about our collection and use of personal information in connection with your transaction, access to and/or use of the Outshifter Platform, please see our <a href="#privacy-policy">Privacy Policy</a>.
                                        <br/><br/>
                                        This Agreement is always available on the Outshifter Platform (<a href="/policies">www.outshifter.com/policies</a>).
                                    </p>
                                </div>

                                <div id="transactions-1" className="terms-description">
                                    <h5>1. Formation of Contract & Order Confirmation</h5>
                                    <p>
                                        1.1 When you order products and services through Outshifter you have a contract with us as stated in these Terms as well as a contract with the Supplier you are buying the products or services from.
                                        <br/><br/>
                                        1.2 When clicking “Buy Now” you place an order. You will receive an acknowledgement e-mail to the provided email address confirming the receipt of your order and details. All orders are subject to availability and confirmation of the order price. Your order is only accepted once payment has been approved. The order is fulfilled by the Supplier you are buying the products or services from.
                                    </p>
                                </div>
                                <div id="transactions-2" className="terms-description">
                                    <h5>2. Shipping, Returns, Customs and Cancelations</h5>
                                    <p>
                                    2.1 The shipping and order fulfillment is carried out by the Supplier and their shipping provider. The Supplier is the responsible party for the shipping costs. These costs are clearly stated in the Order Total at checkout. Please contact the Supplier for details as it relates to order status and shipping.
                                    <br/><br/>
                                    2.2 When ordering products and services from outside of your residing territory you may be subject to import duties and taxes, which are levied once the package reaches the specified destination. Any additional charges for customs clearance must be borne by you; Outshifter has no control over these charges. Customs policies vary from country to country, so you should contact your local customs office for further information. It is your responsibility to comply with all laws and regulations of the country in which you are receiving the products.
                                    <br/><br/>
                                    2.3 For the return policy and return of a product you should contact the Supplier you have purchased said item from directly. Information regarding how to contact the Supplier and the return policy is available at checkout and in your Order Confirmation. Return information and labels should also be included with the shipped order. Please be aware that various Suppliers have different return policies and standards for the return of a product. We encourage you to familiarize yourself with the Supplier´s return policy before making a purchase.
                                    <br/><br/>
                                    2.4 Cancelations should be done directly through the Supplier and with a copy to Us. Please see the Supplier´s return policy for more details on how to proceed for said Supplier. In addition to this please send a cancelations e-mail to support@outshifter.com with the order confirmation number and order details.
                                    <br/><br/>
                                    2.5 Any refunds are paid out to the account or credit card you used for payment. We strive to pay back the refund within 14 days of a cancelled order or refund. 
                                    </p>
                                </div>
                                <div id="transactions-3" className="terms-description">
                                    <h5>3. Payments</h5>
                                    <p>
                                    3.1 Payment processing handled by the Outshifter Platform is handled by MANGOPAY S.A. (Mangopay S.A., 59 Boulevard Royal, 2449 Luxembourg) and are subject to MANGOPAY´s <a href="https://www.mangopay.com/terms/MANGOPAY_Terms-EN.pdf" target="_blank">“General Conditions of Use of Electronic Money”</a>, <a href="https://www.mangopay.com/terms/PSP/PSP_MANGOPAY_EN.pdf" target="_blank">“General Conditions of Use for the Payment Services”</a> and <a href="https://www.mangopay.com/privacy/" target="_blank">“Confidentiality Policy”</a>, collectively referred to as the “MANGOPAY Services Agreement”.
                                    <br/><br/>
                                    By making a purchase through the Outshifter platform you agree to be bound by the MANGOPAY Services Agreement. As a condition of Outshifter enabling payment processing services through MANGOPAY, you agree to provide Outhshifter accurate and complete information about you and/or your business, and you authorize Outshifter to share this information and transaction information related to your use of the payment processing services provided by MANGOPAY.
                                    <br/><br/>
                                    3.2 All prices are including VAT (where applicable). Shipping prices are estimates and may vary slightly from provider to provider. 
                                    </p>
                                </div>
                                <div id="transactions-4" className="terms-description">
                                    <h5>4. The Scope of the Outshifter Platform </h5>
                                    <p>
                                        4.1 The Purchase Agreement is between you and the Supplier. Outshifter is simply an online distribution software that helps the Supplier facilitate sales, online distribution and transactions. Information about the Supplier is available as you check-out and in your order confirmation. They are responsible for shipping, order fulfillment, returns, cancelations, reclamations, complaints and product recalls. Communication regarding the sale has to be direct with the Supplier. Outshifter is at no point liable for the delivery or return of any kind of goods.
                                        <br/><br/>
                                        4.2 Outshifter is not the manufacturer, handler, seller, distributor, designer, or producer of the products and services sold and listed through our Platform. Outshifter simply allows for outshifting to take place. While we work to ensure that product and service information appearing on product listings through our platform is correct, we cannot guarantee the accuracy of such listings. All product and services listed on the Outshifter Platform are User created. We do not endorse, guarantee, authenticate, represent, or otherwise approve of any of the products and services listed on the Outhsifter Platform, nor their description and presentation. Users are responsible for writing product and service descriptions and their sales policies. Thus, we encourage you to exercise caution before purchasing. Please always read labels, warnings and directions provided with the product and service before use. Outshifter accepts no liability for inaccuracies or misstatements about products and services provided by our Users and Third-Parties. 
                                        <br/><br/>
                                        For support and general inquiries about your order, contact the Supplier as specified at checkout or in your Order Confirmation e-mail. Other inquiries can be directed at Outshifter through: support@outshifter.com.
                                        <br/><br/>
                                        Best Regards, 
                                        <br/><br/>
                                        The Outshifter Team
                                    </p>
                                </div>
                            </div>
                    </li>

                </ul>








            </StyledAccordeonTerms>
            
        );
    }


}

export default AccordeonTerms;