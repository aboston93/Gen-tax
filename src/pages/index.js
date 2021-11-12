import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/genrelaxed.jpg"
      />
      <p>I'm making this by following the Gatsby Tutorial.</p>
     <ul>Specialty’s:
    <li>

1099</li> 

<li>W-2</li> 

<li>Schedule c</li>

<li>Services:
</li>
<li>Tax Preparation </li>

<li>Tax Filing 
</li>

<li>Notary</li>

     </ul>
    </Layout>
  );
};

export default IndexPage;
