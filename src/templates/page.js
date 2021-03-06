import React from 'react';
import { graphql } from 'gatsby';

import SiteLayout from '../components/SiteLayout';
import SEO from '../components/seo';

const UsesPage = ({ data }) => (
  <SiteLayout>
    <SEO title="Weibenfalk's uses" />
    <div className="container">
      <div className="row">
        {console.log(data)}
        {/* <div dangerouslySetInnerHTML={{ __html: html }}>fgdg</div> */}
      </div>
    </div>
  </SiteLayout>
);

export default UsesPage;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
