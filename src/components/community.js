import React from "react"
import styled from 'styled-components';



const Community = ({className}) => {
    const communityData = [
        {
            logo: '',
            name: "AI Tech North",
            description: 'Community Manager and AI Ambassador'
        }, {
            logo: '',
            name: 'Code First: Girls',
            description: 'Speaker at the 2019 conference'
        }, {
            logo: '',
            name: 'Code and Stuff',
            description: 'Speaker at the 2019 National Coding Week'
        }, {
            logo: '',
            name: 'Metis',
            description: 'Speaker'
        }, {
            logo: '',
            name: "Tech Women 100",
            description: "Shortlisted for my contribution to the community"
        }
        
    ]
    return (
        <div className={className}>
           {communityData.map(x => {
               return (
                <>
                    <h1>{x.name}</h1>
                    <p>{x.description}</p>
                </>

               )
           })}
        </div>
    )
}

const styledCommunity = styled(Community)`
background-color: #4F493E;
`

export default styledCommunity;