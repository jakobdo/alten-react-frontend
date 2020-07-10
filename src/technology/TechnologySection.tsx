import React from 'react';
import { Icon, Card } from 'react-materialize';
import { ITechnologySimple } from '../models/Technology';
import TechnologyChipList from './TechnologyChipList';

interface TechnologySectionProps {
    technologies: ITechnologySimple[]
}

function TechnologySection({technologies}:TechnologySectionProps){
    return (
        <>
            {technologies.length > 0 && (
                <>
                    <div className="center-align">
                        <Icon>star</Icon>
                    </div>
            
                    <Card className="card-main">
                        <h2 className="center-align">Technologies & Tools</h2>
                        <TechnologyChipList technologies={technologies} />
                    </Card>
                </>
            )}
        </>
    )
}

export default TechnologySection;