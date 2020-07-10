import React from 'react';
import { IProjectSimple } from '../models/Project';
import { Icon, Card } from 'react-materialize';
import { Link } from 'react-router-dom';
import { ITechnologySimple } from '../models/Technology';
import TechSeparator from '../common/TechSeparator';
import TechnologyChipList from '../technology/TechnologyChipList';

interface ProjectSectionProps {
    projects: IProjectSimple[]
}

function ProjectSection({projects}:ProjectSectionProps){
    return (
        <>
            {projects.length > 0 && (
                <>
                    <div className="center-align">
                        <Icon>group_work</Icon>
                    </div>
            
                    <Card className="card-main">
                        <h2 className="center-align">Projects</h2>
                        {projects.map((project: IProjectSimple) => (
                            <React.Fragment key={project.slug}>
                                <Link to={`/projects/${project.slug}/`}><h5>{project.name}</h5></Link>
                                <TechnologyChipList technologies={project.technologies} />
                            </React.Fragment>
                        ))}
                    </Card>
                </>
            )}
        </>
    )
}

export default ProjectSection;