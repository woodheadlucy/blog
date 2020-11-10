/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from 'styled-components'

import { rhythm } from "../utils/typography"

const Bio = ({className}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      className={className}
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      {/* <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      /> */}
      <p className="title">
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow her on Twitter
        </a>
      </p>
    </div>
  )
}

const styledBio = styled(Bio)`
.title {
  color: #ed6a5a!important;
}
`

export default styledBio;
