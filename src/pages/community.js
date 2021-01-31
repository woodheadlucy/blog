import React from "react"
import {Link, graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"


const community = ({ data, location, className}) => {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
        <>
        <Layout className={className} location={location} title={siteTitle}>

            <div className="top">
                <div className="nav">
                    <Link className="nav-item" to="https://woodheadlucy.medium.com/" target="_blank">Articles</Link>
                    <Link className="nav-item" to="/community">Community</Link>
                </div>
</div>
        <ul>
            <li>Code First Girls Fellowship, 2021</li>
            <li><a href="https://wearetechwomen.com/techwomen100-awards-winners-2020/">#TechWomen100 winner, 2020</a></li>
            <li>AI Tech North Community Manager, 2020</li>
            <li><a href="https://www.thecodezone.co.uk/news/women-in-coding">Guest writer for The Code Zone, 2020</a></li>
            <li>Speaker at Tech Equity Manchester, 2020</li>
            <li>Speaker at METIS Testing courses, 2020</li>
            <li>Speaker at Code and Stuff - National Coding Week, 2019</li>
            <li>Speaker at Code First Girls Conference, 2019</li>
        </ul>
            <SEO title="Lucy Woodhead" />

        </Layout>
        </>
    )
}

const styledCommunity = styled(community)`
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
`
export default styledCommunity;


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

