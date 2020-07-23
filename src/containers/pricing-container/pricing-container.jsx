import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./pricing-container.scss";

class PricingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  render() {
    return (
      <div className="pricing-container">
        <div className="pricing-container__package">
          <div className="package__header">
            <div className="package__header-title">Simple Yet Effective</div>
            <div className="package__header-content">
              We will build you a custom website and host it ($100 value) for
              the first year for free.
            </div>
          </div>
          <div className="package__cost">$250</div>
          <div className="package__content">
            <p>Up to 5 pages</p>
            <p>Support and maintenance costs</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Hyperlink
            href="/contact"
            className="package__link"
            title="Start Your New Site"
          />
        </div>
        <div className="pricing-container__package">
          <div className="package__header">
            <div className="package__header-title">E-Commerce Site</div>
            <div className="package__header-content">
              Let us create a place where your customers can browse and purchase
              from you with ease.
            </div>
          </div>
          <div className="package__cost">$500</div>
          <div className="package__content">
            <p>Shopping Cart and Payments</p>
            <p>Support and maintenance costs</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Hyperlink
            href="/contact"
            className="package__link"
            title="Build your app today"
          />
        </div>
      </div>
    );
  }
}

export default PricingContainer;
