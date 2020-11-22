import React from "react"
import styled from 'styled-components';
import aitn from '../../content/assets/aitn.png'
import cfg from '../../content/assets/cfg.png'
import codeandstuff from '../../content/assets/codeandstuff.png'
import metis from '../../content/assets/metis.jpg'
import tw100 from '../../content/assets/tw100.png'
import codeZone from '../../content/assets/code-zone.png'
import cisco from '../../content/assets/cisco.jpg'

const Community = ({className}) => {
    return (
        <div className={className}>
            <h1>IN THE COMMUNITY</h1>

            <div class="container">
                <div class="text"> 
                    <h2>Tech Women 100 Award Winner</h2>
                    <p>Test</p>
                    <a href="https://wearetechwomen.com/techwomen100-awards-winners-2020/">View the 2020 winners here</a>
                </div>
                <div class="image">
                    <img src={tw100} />
                </div>
            </div>
        
            <div class="container">
                <div class="text">
                    <h2>The Code Zone</h2>
                    <p>The Code Zone are an organisation aiming to engage children with technology. They are based in Cambridge but run virtual lessons online.</p>
                    <a href="https://www.thecodezone.co.uk/news/women-in-coding">Read my article here</a>
                </div>
                <div class="image">
                    <img src={codeZone} />
                </div>
            </div>

            <div class="container">
                <div class="text">
                    <h2>AI Tech North</h2>
                    <p>Test</p>
                </div>
                <div class="image">
                    <img src={aitn} />
                </div>
            </div>
 

        <div class="container">
            <div class="text">
                <h2>Metis</h2>
                <p>Test</p>
                    <a href="https://metis-online.com/">View Metis' testing courses here</a>
            </div>
            <div class="image">
                <img src={metis} />
            </div>
        </div>

            <div class="container">
                <div class="text">
                    <h2>Code First: Girls</h2>
                    <p>Test</p>
                </div>
                <div class="image">
                    <img src={cfg} />
                </div>
            </div>


            <div class="container">
                <div class="text">
                    <h2>Code and stuff</h2>
                    <p>Test</p>
                </div>
                <div class="image">
                    <img src={codeandstuff} />
                </div>
            </div>


            <div class="container">
                <div class="text">
                    <h2>Cisco</h2>
                    <p>Test</p>
                </div>
                <div class="image">
                    <img src={cisco} />
                </div>
            </div>

        </div>

    )
}

const styledCommunity = styled(Community)`
background-color: #4F493E;
color: #4F493E;

h1 {
    color: white;
    font-family: merriweather;
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

export default styledCommunity;