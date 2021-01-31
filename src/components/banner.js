import React from "react"
import lucy from "../../content/assets/stairs-sitting.png"
import styled from 'styled-components'

const Banner = ({ className }) => {
    return (
        <div className={className}>
            <img src={lucy}/>
            <div className="text">
                <h1>Lucy Woodhead</h1>
                <p>Software Developer based in the UK</p>
                <div className="links">
                    <button className="button"><a href="https://www.linkedin.com/in/woodheadlucy/" >Connect with me!</a></button>
                    <button className="button"><a href="https://woodheadlucy.medium.com/">Read my articles</a></button>
                </div>

            </div>
        </div>
    )
}

const styledBanner = styled(Banner)`
    display: block;
    margin-left: auto;
    margin-right: auto;

    position: relative;
    text-align: center;
    color: white;

    .text {
    position: absolute;
    top: 0.5em;
    margin: 2em;
    }

        @media only screen and (max-width: 680px) {
        .text {
            position: relative;
        }
        }
}

    .links {
        display: flex;
        flex-direction: column;
    }

    p {
        color: black;
    }


    a {
        color: white;
    }

    button {
        margin: 1em;
        height: 3em;
        padding: 0.5em 1.875em;
        border: 2px solid #1C1B1D;
        border-radius: 1em;
        cursor: pointer;
        background-color: transparent;

        &:hover {
            color: white;
            background-color: #1C1B1D;
        }
    }
`;
export default styledBanner;