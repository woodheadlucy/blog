import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"


const projects = ({ data, location, className }) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
        <>
            <Layout className={className} location={location} title={siteTitle}>

                <div className="top">
                    <div className="nav">
                        <Link className="nav-item" to="https://woodheadlucy.medium.com/" target="_blank">Articles</Link>
                        <Link className="nav-item" to="/community">Community</Link>
                        <Link className="nav-item" to="/projects">Projects</Link>
                    </div>
                </div>
               
                <SEO title="Lucy Woodhead" />
                <div className="grid">
                    <div className="grid-item">
                        hoptions

                    </div>
                </div>

            </Layout>
        </>
    )
}

const styledProjects = styled(projects)`
max-width: none!important;


  .top {
    background: #4F493E;
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-item {
          font-family: 'merriweather';
      padding-right: 20px;
      color: white;
  }  

  .nav-item:hover {
     color: #FDE9AC;
  }

  .grid {
      display: grid;
      grid-template-columns: 10% 40% 40% 10%;
  }

  .grid-item {
      grid-column: 2/3;
  }
`
export default styledProjects;


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

