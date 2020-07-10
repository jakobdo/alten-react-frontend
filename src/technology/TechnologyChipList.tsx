import React from 'react';
import { Chip } from 'react-materialize';
import { Link } from 'react-router-dom';
import { ITechnologySimple } from '../models/Technology';

interface TechnologyChipListProps {
    technologies: ITechnologySimple[]
}

function TechnologyChipList({technologies}:TechnologyChipListProps){
    return (
        <>
            {technologies.map((technology: ITechnologySimple) => (
                <React.Fragment key={technology.slug}>
                    <Link to={`/technologies/${technology.slug}/`}>
                        <Chip>{technology.name}</Chip>
                    </Link>
                </React.Fragment>
            ))}
        </>
    )
}

export default TechnologyChipList;