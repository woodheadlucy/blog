import React from "react"
import styled from 'styled-components'

const About = ({ className }) => {
    return (
        <div className={className}>
            <h1>
                Hi I'm Lucy
            </h1>
            <p>I'm a software developer based in the UK and I am interested in so many areas of technology!</p>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C#</li>
                <li>Python</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>React</li>
                <li>Highcharts</li>

                <li>Mocha</li>
                <li>Chai</li>
                <li>Jest</li>
                <li>Cypress</li>
                <li>Cucumber</li>
                <li>xUnit</li>


            </ul>
        </div>
    )
}

const styledAbout = styled(About)`

    p {
        text-transform:uppercase;
    }
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
`
export default styledAbout;