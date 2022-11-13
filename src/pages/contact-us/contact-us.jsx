import React from 'react'
import './contact-us.css'

export default function ContactUs() {
    return (
        <div class="contain">

            <div class="wrapper">

                <div class="form">
                    <h4>GET IN TOUCH</h4>
                    <h2 class="form-headline">Send us a message</h2>
                    <form id="submit-form" action="">
                        <p>
                            <input id="name" class="form-input" type="text" placeholder="Your Name*" />
                            <small class="name-error"></small>
                        </p>
                        <p>
                            <input id="email" class="form-input" type="email" placeholder="Your Email*" />
                            <small class="name-error"></small>
                        </p>
                        <p class="full-width">
                            <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required />
                            <small></small>
                        </p>
                        <p class="full-width">
                            <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                            <small></small>
                        </p>

                        <p class="full-width">
                            <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()" />
                        </p>
                    </form>
                </div>

                <div class="contacts contact-wrapper">

                    <ul>
                        <li>We've driven online revenues of over <span class="highlight-text-grey">$2
                            billion</span> for our clients. Ready to know
                            how we can help you?</li>
                        <span class="hightlight-contact-info">
                            <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
                            <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 11 1111 2900</span></li>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    )
}
