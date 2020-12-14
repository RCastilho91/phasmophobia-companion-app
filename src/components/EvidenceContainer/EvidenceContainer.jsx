import React from 'react';
import EvidenceTable from "./InnerComponents/EvidenceTable/EvidenceTable";

export default function EvidenceContainer(props){
    return(
        <div className={"evidence-container"}>
            <h2>With the evidence below...</h2>
            <EvidenceTable
                evidence={props.ghostData.evidences}
                allOptionsUsed={props.allOptionsUsed}
                positiveEvidence={props.positiveEvidence}
                handleToggle={props.handleToggle}
                handleNegative={props.handleNegative}
            />
        </div>
    )
}
