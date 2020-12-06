import React from "react"
import styled from 'styled-components';

const Footer = ({ className }) => {
    return (
        <div className={className}>
            © {new Date().getFullYear()}

        </div>

    )
}

const styledFooter = styled(Footer)`
background-color: #4F493E;
color: white;

h1 {
    color: white;
    font-family: 'merriweather';
    text-align: center;
    margin-top: 3.5rem;
}

.container {
  background-color: #b3aa93;
  display: flex;
  margin: 50px;
  padding: 20px;
}
.container > .image {
  flex: 1 0 0%;
  text-align:right;
}
.image > img {
  vertical-align:top;
  max-width: 100%;
  max-height: 300px;
}
.container > .text {
  flex: 2 0 0%;
  
 /* // margin:auto 0; */
}
`

export default styledFooter;