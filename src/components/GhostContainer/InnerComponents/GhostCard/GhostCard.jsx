import React from 'react';
import './GhostCard.css';

// Ghost Pictures
import spirit from '../../../../images/ghosts/0.png';
import wraith from '../../../../images/ghosts/1.png';
import banshee from '../../../../images/ghosts/2.png';
import demon from '../../../../images/ghosts/3.png';
import jinn from '../../../../images/ghosts/4.png';
import mare from '../../../../images/ghosts/5.png';
import oni from '../../../../images/ghosts/6.png';
import phantom from '../../../../images/ghosts/7.png';
import poltergeist from '../../../../images/ghosts/8.png';
import revenant from '../../../../images/ghosts/9.png';
import shade from '../../../../images/ghosts/10.png';
import yurei from '../../../../images/ghosts/11.png';

// Evidence Icons
import spiritBox from '../../../../images/evidence-icons/SVGs/spirit-box.svg';
import ghostOrb from '../../../../images/evidence-icons/SVGs/ghost-orbs.svg';
import ghostWriting from '../../../../images/evidence-icons/SVGs/ghost-writing.svg';
import fingerprints from '../../../../images/evidence-icons/SVGs/fingerprints.svg';
import freezing from '../../../../images/evidence-icons/SVGs/freezing-temperatures.svg';
import emf from '../../../../images/evidence-icons/SVGs/emf.svg';

export default function GhostCard(props){
    const ghostPictures = [
        {spirit},
        {wraith},
        {banshee},
        {demon},
        {jinn},
        {mare},
        {oni},
        {phantom},
        {poltergeist},
        {revenant},
        {shade},
        {yurei}
    ];

    const evidence = [
        {
            id: 0,
            icon: {emf}
        },
        {
            id: 1,
            icon: {fingerprints}
        },
        {
            id: 2,
            icon: {freezing}
        },
        {
            id: 3,
            icon: {ghostOrb}
        },
        {
            id: 4,
            icon: {ghostWriting}
        },
        {
            id: 5,
            icon: {spiritBox}
        }
    ]

    const targetPicture = ghostPictures[props.ghost.id];
    const targetSubstring = props.ghost.type.toLowerCase();

    const targetEvidence = evidence.map((evidence) => {
        return props.ghost.evidence.includes(evidence.id) ? evidence.icon : null
    });

    console.log(targetEvidence)

    return(
        <div className={props.cardType}>
            <div className={"ghost-name"}>
                {props.ghost.type}
            </div>
            <div className={"ghost-picture"}>
                <img src={targetPicture[targetSubstring]} alt={props.ghost.type} />
            </div>
            <div className={"evidence-icon-row"}>
                <img src={targetEvidence} />
            </div>
        </div>
    )
}
