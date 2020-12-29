import React from 'react';
import './GhostContainer.css'

import GhostCard from "./InnerComponents/GhostCard/GhostCard";

export default function GhostContainer(props){
    const possibleCards = props.ghosts.filter((ghost) => {
        return <GhostCard {...ghost} />
    });

    const eliminatedCards = props.ghosts.filter((ghost) => {
        return <GhostCard {...ghost} />
    });

    const positiveIdCard = props.ghosts.filter((ghost) => {
        return <GhostCard {...ghost} />
    });

    const ghostNotFound = (
        <>
            {possibleCards}
            {eliminatedCards}
        </>
    )

    return(
        <div className={"possibility-container"}>
            <h2>{props.message}</h2>
            <h3>(ghosts cannot be visually recognized)</h3>
            {
                props.positiveID || props.positiveID === 0
                    ? positiveIdCard
                    : ghostNotFound
            }
        </div>
    )
}
