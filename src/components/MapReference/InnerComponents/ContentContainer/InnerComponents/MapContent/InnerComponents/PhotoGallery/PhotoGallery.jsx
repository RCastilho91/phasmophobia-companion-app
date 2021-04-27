import React from 'react';
import './PhotoGallery.css';

// Map labels
import asylumLabels from '../../../../../../../../images/maps/asylum/map_labels.jpg';
import bleasdaleLabels from '../../../../../../../../images/maps/bleasdale/map_labels.jpg';
import edgefieldLabels from '../../../../../../../../images/maps/edgefield/map_labels.jpg';
import graftonLabels from '../../../../../../../../images/maps/grafton/map_labels.jpg';
import highschoolLabels from '../../../../../../../../images/maps/highschool/map_labels.jpg';
import prisonLabels from '../../../../../../../../images/maps/prison/map_labels.png';
import ridgeviewLabels from '../../../../../../../../images/maps/ridgeview/map_labels.jpg';
import tanglewoodLabels from '../../../../../../../../images/maps/tanglewood/map_labels.png';

/**
// Map entrances
import asylumEntrance from '../../../../../../../../images/maps/asylum/asylum-outside.jpg';
import bleasdaleEntrance from '../../../../../../../../images/maps/bleasdale/bleasdale-outside.jpg';
import edgefieldEntrance from '../../../../../../../../images/maps/edgefield/edgefield-outside.jpg';
import graftonEntrance from '../../../../../../../../images/maps/grafton/grafton-outside.jpg';
import highschoolEntrance from '../../../../../../../../images/maps/highschool/highschool-outside.jpg';
import prisonEntrance from '../../../../../../../../images/maps/prison/prison-outside.jpg';
import ridgeviewEntrance from '../../../../../../../../images/maps/ridgeview/ridgeview-outside.jpg';
import tanglewoodEntrance from '../../../../../../../../images/maps/tanglewood/tanglewood-outside.jpg';
*/

export default function PhotoGallery(props){
    const photoReferences = {
        'asylum': [asylumLabels],
        'bleasdale': [bleasdaleLabels],
        'edgefield': [edgefieldLabels],
        'grafton': [graftonLabels],
        'highschool': [highschoolLabels],
        'prison': [prisonLabels],
        'ridgeview': [ridgeviewLabels],
        'tanglewood': [tanglewoodLabels]
    }

    const relevantPhotos = props.activeMap === undefined
        ? "No relevant photos to show"
        : photoReferences[props.activeMap].map((photo) => {
            return <a href={photo} target={"_blank"}><img alt={props.activeMap} className={"map-photo"} src={photo} /></a>
        })

    return(
        <div className={"photo-gallery"}>
            <a href={"https://phasmophobia.fandom.com/wiki/Main_Page"} target={"_blank"}>Labeled maps brought to you from the Phasmophobia fan-maintained Wiki</a>
            {relevantPhotos}
        </div>
    )
}
