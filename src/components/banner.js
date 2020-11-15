import React from "react"
import lucy from "../../content/assets/stairs-sitting.png"
import styled from 'styled-components'

const Banner = ({ className }) => {
    return (
        <div className={className}>
            <img src={lucy}/>
        </div>
    )
}

const styledBanner = styled(Banner)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
`
export default styledBanner;