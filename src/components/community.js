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
            <h1>In the community</h1>
            <div class="outer">
                <div class="container">
                    <div class="text">
                        <h2>Tech Women 100 Award Winner</h2>
                        <span>I am very proud to be given recognition for my efforts in helping other women explore careers in technology and advancing my own.</span>
                        <a href="https://wearetechwomen.com/techwomen100-awards-winners-2020/">View the 2020 winners here</a>
                    </div>
                    <div class="image">
                        <img src={tw100} />
                    </div>
                </div>

                <div class="container">
                    <div class="text">
                        <h2>The Code Zone</h2>
                        <span>The Code Zone are an organisation aiming to engage children with technology. They are based in Cambridge but run virtual lessons online.</span>
                        <a href="https://www.thecodezone.co.uk/news/women-in-coding">Read my article here</a>
                    </div>
                    <div class="image">
                        <img src={codeZone} />
                    </div>
                </div>

                <div class="container">
                    <div class="text">
                        <h2>AI Tech North</h2>
                        <span>For 2019-2020 I have been the Community Manager for AI Tech North.
                             This voluntary role saw me bringing together communities in the North
                          of the UK and putting on regular events to help people learn more about AI.</span>
                    </div>
                    <div class="image">
                        <img src={aitn} />
                    </div>
                </div>


                <div class="container">
                    <div class="text">
                        <h2>Metis</h2>
                        <span>After successfully completing a course in testing I was invited back to speak about
                            my experience as a developer and how others can kick start their career!
                </span>
                        <a href="https://metis-online.com/">View Metis' testing courses here</a>
                    </div>
                    <div class="image">
                        <img src={metis} />
                    </div>
                </div>

                <div class="container">
                    <div class="text">
                        <h2>Code First: Girls</h2>
                        <span>The Code First: Girls 2019 conference took place in Manchester where I sat on a panel to discuss
                            being a software engineer and how I got there.
                    </span>
                    </div>
                    <div class="image">
                        <img src={cfg} />
                    </div>
                </div>


                <div class="container">
                    <div class="text">
                        <h2>Code and stuff</h2>
                        <span>As part of National Coding Week 2019 I delivered a talk on my growth as
                        a developer and how I utilise local meetup groups to learn quickly.</span>
                    </div>
                    <div class="image">
                        <img src={codeandstuff} />
                    </div>
                </div>


                <div class="container">
                    <div class="text">
                        <h2>Cisco</h2>
                        <span>I spent time mentoring and advising college students looking to study STEM subjects at university. I ran some technical sessions
                            and talked through the variety of technical roles that exist in the industry.
                    </span>
                    </div>
                    <div class="image">
                        <img src={cisco} />
                    </div>
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
    font-family: 'merriweather';
    text-align: center;
    padding-top: 40px;
    margin: auto;
}

h2 {
    color: #D56C68;
}

span {
    color: #A89298;
}

.outer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.container {
  background-color: #F5F3F2;
  display: flex;
  margin: 50px;
  padding: 20px;
  border-radius: 20px;
  width: 310px;

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

.container:last-child {
    margin: 50px 50px 0px 50px;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
`

export default styledCommunity;