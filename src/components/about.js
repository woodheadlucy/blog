import React from "react"
import styled from 'styled-components'

const About = ({ className }) => {
    return (
        <div className={className}>
            <h1>
                Hi, I'm Lucy!
            </h1>
            <p>I'm a software developer based in the UK and I am currently working on healthcare technology at GSK. I love what I do and find the learning process really rewarding. Here are some of the languages and tools I use to create successful outcomes:</p>
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

background: #CD6353;
    h1 {
        font-family: 'merriweather';
        text-align: center;
    }
    ul {
        height: 100px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
`
export default styledAbout;