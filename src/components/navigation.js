import React from "react"
import styled from 'styled-components'


const Navigation = ({className, items}) => {
    return (
        <div className={className}>
            {items.map(x => (
                <div className="nav-item">
                    {x}
                </div>
            ))}
        </div>
    )
}

const styledNavigation = styled(Navigation)`
display: flex;

    .nav-item {
        padding: 20px;
    }
`
export default styledNavigation;