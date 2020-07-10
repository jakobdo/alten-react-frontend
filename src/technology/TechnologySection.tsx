import React from 'react';
import { Icon, Card, Chip } from 'react-materialize';
import { Link } from 'react-router-dom';
import { ITechnologySimple } from '../models/Technology';

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
            
                    <Card>
                        <h2 className="center-align">Technologies & Tools</h2>
                        {technologies.map((technology: ITechnologySimple) => (
                            <React.Fragment key={technology.slug}>
                                <Link to={`/technologies/${technology.slug}/`}>
                                    <Chip>{technology.name}</Chip>
                                </Link> : 
                            </React.Fragment>
                        ))}
                    </Card>
                </>
            )}
        </>
    )
}

export default TechnologySection;