import React from 'react';
import './EvidenceRowIcon.css';

// Evidence Icons
import spiritBox from '../../../../images/evidence-icons/SVGs/spirit-box.svg';
import ghostOrb from '../../../../images/evidence-icons/SVGs/ghost-orbs.svg';
import ghostWriting from '../../../../images/evidence-icons/SVGs/ghost-writing.svg';
import fingerprints from '../../../../images/evidence-icons/SVGs/fingerprints.svg';
import freezing from '../../../../images/evidence-icons/SVGs/freezing-temperatures.svg';
import emf from '../../../../images/evidence-icons/SVGs/emf.svg';

export default function EvidenceIconRow(props){
    const evidence = [
        {
            id: 0,
            targetName: 'emf',
            icon: {emf}
        },
        {
            id: 1,
            targetName: 'fingerprints',
            icon: {fingerprints}
        },
        {
            id: 2,
            targetName: 'freezing',
            icon: {freezing}
        },
        {
            id: 3,
            targetName: 'ghostOrb',
            icon: {ghostOrb}
        },
        {
            id: 4,
            targetName: 'ghostWriting',
            icon: {ghostWriting}
        },
        {
            id: 5,
            targetName: 'spiritBox',
            icon: {spiritBox}
        }
    ]

    const evidenceFilter = evidence.filter(evidence => props.ghostEvidence.includes(evidence.id))
    const targetEvidence = evidenceFilter.map((evidence) => {
        return evidence
    });
    const evidenceIcons = targetEvidence.map((svg) => {
        return <embed src={svg.icon[svg.targetName]} className={'card-icon'} alt={svg.targetName} />
    });

    return(
        <div className={"evidence-icon-row"}>
            {evidenceIcons}
        </div>
    )
}
