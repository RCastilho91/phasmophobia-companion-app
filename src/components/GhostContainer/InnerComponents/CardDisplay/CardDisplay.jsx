import React from 'react';
import GhostCard from "../GhostCard/GhostCard";

export default function CardDisplay(props){

    const possibleCards = props.possibleCards.map((card) => {
        return <GhostCard ghost={card} cardType={'possible'} />
    });

    const negativeCards = props.eliminatedCards.map((card) => {
        return <GhostCard ghost={card} cardType={'negative'} />
    })

    const positiveCard = props.positiveIdCard.map((card) => {
        return <GhostCard ghost={card} cardType={'found'} />
    })

    const generalCards = (
        <>
            {possibleCards}
            {negativeCards}
        </>
    )

    return(
        <div className={'card-display'}>
            {positiveCard.length > 0
                ? positiveCard
                : generalCards
            }
        </div>
    )
}
