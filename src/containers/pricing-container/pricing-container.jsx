import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import styles from "./pricing-container.module.scss";

class PricingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  render() {
    return (
      <div className={styles.pricingContainer}>
        <div className={styles.pricingContainer__package}>
          <div className={styles.package__header}>
            <div className={styles.package__headerTitle}>
              Simple Yet Effective
            </div>
            <div className={styles.package__headerContent}>
              We will build you a custom website and host it ($100 value) for
              the first year for free.
            </div>
          </div>
          <div className={styles.package__cost}>$250</div>
          <div className={styles.package__content}>
            <p>Up to 5 pages</p>
            <p>Support and maintenance costs</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Hyperlink
            href="/contact"
            className={styles.package__link}
            title="Start Your New Site"
          />
        </div>
        <div className={styles.pricingContainer__package}>
          <div className={styles.package__header}>
            <div className={styles.package__headerTitle}>E-Commerce Site</div>
            <div className={styles.package__headerContent}>
              Let us create a place where your customers can browse and purchase
              from you with ease.
            </div>
          </div>
          <div className={styles.package__cost}>$500</div>
          <div className={styles.package__content}>
            <p>Shopping Cart and Payments</p>
            <p>Support and maintenance costs</p>
            <p>
              Hosting for the first year <strong>FREE</strong>
            </p>
          </div>
          <Hyperlink
            href="/contact"
            className={styles.package__link}
            title="Build your app today"
          />
        </div>
      </div>
    );
  }
}

export default PricingContainer;
