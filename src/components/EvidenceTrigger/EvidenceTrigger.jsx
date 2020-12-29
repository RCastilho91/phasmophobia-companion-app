import React from 'react';

export default function EvidenceTrigger(props){
    return(
        <div className={"evidence-trigger-container"}>
            <button
                className={"evidence-trigger"}
                onClick={props.handleEvidenceLogger}>
                Log Evidence
            </button>
        </div>
    )
}
