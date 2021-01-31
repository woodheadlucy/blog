import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from './footer';

const Layout = ({ location, title, children, className }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          // ...scale(1.5),
          marginTop: 0,
          textAlign: `center`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `#4F493E`,
            textTransform: `uppercase`,
            fontSize: `18px`,
            fontFamily: `merriweather`,
            textAlign: `center`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h1
        style={{
          // ...scale(1.5),
          marginTop: 0,
          textAlign: `center`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `#4F493E`,
            textTransform: `uppercase`,
            fontSize: `18px`,
            fontFamily: `merriweather`,
            textAlign: `center`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  }
  return (
    <div
      className={className}
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout;
