import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"


import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Banner from '../components/banner'
import About from '../components/about'

const BlogIndex = ({ data, location, className }) => {
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
        <Banner />
        </div>
        {/* <SEO title="Lucy Woodhead" /> */}
      </Layout>   
   </>
  )
}

const styledBlogIndex = styled(BlogIndex)`
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

export default styledBlogIndex;

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
`
