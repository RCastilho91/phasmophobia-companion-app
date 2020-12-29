import React from 'react';
import './GhostContainer.css'
import CardDisplay from "./InnerComponents/CardDisplay/CardDisplay";
import ghostWriting from '../../images/evidence-icons/SVGs/ghost-writing.svg'


export default function GhostContainer(props){

    // Detail filters
    const possibleDetails = props.ghosts.filter((ghost) => {
        return props.possibleGhosts.includes(ghost.id);
    });
    const eliminatedDetails = props.ghosts.filter((ghost) => {
        return props.negativeGhosts.includes(ghost.id);
    });
    const positiveIdDetails = props.ghosts.filter((ghost) => {
        return props.positiveID === ghost.id
    });

    // Card Generators
    const possibleCards = possibleDetails.filter((ghost) => {
        return ghost
    });
    const eliminatedCards = eliminatedDetails.filter((ghost) => {
        return ghost
    });
    const positiveIdCard = positiveIdDetails.filter((ghost) => {
        return ghost
    });

    return(
        <div className={"possibility-container"}>
            <h2>{props.message}</h2>
            <img src={ghostWriting} />
            <h3>(ghosts cannot be visually recognized)</h3>

            <CardDisplay
                possibleCards={possibleCards}
                eliminatedCards={eliminatedCards}
                positiveIdCard={positiveIdCard}
            />
        </div>
    )
}
