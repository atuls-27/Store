import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          The idea for the site came about because people were often asking for advice about which watch they should buy. The more this happened — and it happened a lot — the more we realized that searching for a watch online is a minefield of information.
The individual brand websites are great, but there are hundreds of watch brands in Switzerland alone, so checking out each page individually would take you weeks, and that’s if you know the names of all the brands.
There is nowhere you can really search for all the new watches on the planet, compare models, check prices, and discover new brands all in the same place. That is, until now!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;