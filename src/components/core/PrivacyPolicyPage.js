import React from 'react';
import { handlePageView } from '../../tools/analytics';
import { privacyPolicy } from '../../content/privacyPolicy';


export default class PrivacyPolicyPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div id='privacy_policy_page'>
        <h3>Privacy Policy for {privacyPolicy.companyWebsite}</h3>
        {privacyPolicy.policy.map((policyLine, index) => {
          if (policyLine.isBold) {
            return <h4 key={index}>{policyLine.text}</h4>;
          }
          return <p key={index}>{policyLine.text}</p>;
        })}
      </div>
    );
  }
}
