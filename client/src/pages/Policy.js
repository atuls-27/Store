import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>The types of information we process depends on how you use our Services.</p>
          <p>Many of our Services require users to set up an account, which involves the collection and processing of your name and email address.</p>
          <p>Other Services may require the collection of additional information. </p>
          <p>In order to use our Services, Group Companies may require you to register and create an account.</p>
          <p>Depending on your needs, you may provide us with additional personal information, including your area of expertise.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;