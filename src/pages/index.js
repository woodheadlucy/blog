import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"


import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Banner from '../components/banner'
import Community from '../components/community'
import About from '../components/about'

const BlogIndex = ({ data, location, className }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Layout className={className} location={location} title={siteTitle}>
        <div className="top">
        <div className="nav"> 
            <Link className="nav-item" to="https://woodheadlucy.medium.com/">BLOG</Link>
          </div>
        <Banner />
        </div>
        <SEO title="Lucy Woodhead" />
        <About />
        <Community />
        {/* {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none`, color: 'black' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })
        } */}
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
