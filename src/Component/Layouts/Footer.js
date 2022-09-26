// import { Alert } from 'bootstrap'
import React from "react";
import "./Footer.css";
import {ReactComponent as Facebook} from '../UI/Icons/Facebook.svg'
import {ReactComponent as Twitter} from '../UI/Icons/Twitter.svg'
import {ReactComponent as Instagram} from '../UI/Icons/Instagram.svg'
import {ReactComponent as LinkedIn} from '../UI/Icons/LinkedIn.svg'

function Footer() {
  return (
    <>
    <div className="footer-header">
      <div className="footer-header-item">
      &#127793; Plants grow people
      </div>
      <div className="footer-header-item">
      &#127793; Plants grow people
      </div>
      <div className="footer-header-item">
      &#127793; Plants grow people
      </div>
      <div className="footer-header-item">
      &#127793; Plants grow people
      </div>
      <div className="footer-header-item">
      &#127793; Plants grow people
      </div>
    </div>
    <div className="footer-container">
      <div className="footer-section footer-section-left">
        <div className="footer-section-column">
          <h5>ABOUT US</h5>
          <p>Our Story</p>
          <p>Contact Us</p>
          <p>Locate Stores</p>
        </div>
        <div className="footer-section-column">
          <h5>CUSTOMER CARE</h5>
          <p>Track Order</p>
          <p>Shipping Policy</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>
        <div className="footer-section-column">
          <h5>OFFERS & REWARDS</h5>
          <p>Plant Parent Club</p>
          <p>Ugaoo Coupons</p>
        </div>
      </div>
      <div className="footer-section footer-section-right">
        <div className="footer-section-column">
          <h5>SIGN UP FOR OUR NEWSLETTER</h5>
          <p>
            For plant care tips, our featured plant of <br/> the week, exclusive
            offers and discounts
          </p>
          <h5 className="follow-us-section">FOLLOW US ON SOCIAL MEDIA</h5>
          <p className="socialMedia-Icons">
            <Facebook width={"20px"}/>
            <Twitter width={"20px"}/>
            <Instagram width={"20px"}/>
            <LinkedIn width={"20px"}/>
          </p>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
        Made with &#127793; by Avil
    </div>
    </>
  );
}

export default Footer;
