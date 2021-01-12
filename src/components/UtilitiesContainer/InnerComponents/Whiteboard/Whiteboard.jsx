import React from 'react';

export default function Whiteboard(props){
    return(
        <div className={'white-board'}>
            <span className={"ghost-name-label"}>Ghost name:</span> <input className={"ghost-name"}/>
            <h2 className={"board-title"}>Session objectives</h2>
            <span className={"objective"}>Objective 1:</span> <span className={"first-objective"}>Discover what type of Ghost we are dealing with</span>
            <span className={"objective"}>Objective 2:</span> <input type={"text"} id="objective-two" list={"objective-data"} />
            <span className={"objective"}>Objective 3:</span> <input type={"text"} id="objective-three" list={"objective-data"} />
            <span className={"objective"}>Objective 4:</span> <input type={"text"} id="objective-four" list={"objective-data"} />

            <datalist id={"objective-data"}>
                <option value={"Have a member of your team witness a Ghost Event"} />
                <option value={"Capture a photo of the Ghost"} />
                <option value={"Capture a photo of Dirty Water in a sink"} />
                <option value={"Find evidence of the paranormal with an EMF Reader"} />
                <option value={"Detect a room below 10 Celsius/50 Fahrenheit with a Thermometer"} />
                <option value={"Detect a Ghosts presence with a Motion Sensor"} />
                <option value={"Cleanse the area near the Ghost using Smudge Sticks"} />
                <option value={"Prevent the Ghost from hunting with a Crucifix"} />
                <option value={"Get a Ghost to walk through Salt"} />
            </datalist>

            <div className={"ghost-behavior-container"}>
                <span className={"ghost-behavior-label"}>Ghost responds to</span>

                <input type={"radio"} className={"ghost-behavior-radio"} id="individuals" name={"behavior"} value={"individuals"} />
                <label>Individuals</label>

                <input type={"radio"} className={"ghost-behavior-radio"} id="groups" name={"behavior"} value={"groups"} />
                <label>Groups</label>
            </div>
        </div>
    )
}
