import React from 'react';
import { IProjectSimple } from '../models/Project';
import { Icon, Card } from 'react-materialize';
import { Link } from 'react-router-dom';
import { ITechnologySimple } from '../models/Technology';
import TechSeparator from '../common/TechSeparator';

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
            
                    <Card>
                        <h2 className="center-align">Projects</h2>
                        {projects.map((project: IProjectSimple) => (
                            <React.Fragment key={project.slug}>
                                <Link to={`/projects/${project.slug}/`}>{project.name}</Link> : 
                                <>
                                    {project.technologies.map<React.ReactNode>((technology: ITechnologySimple, index: number) => (
                                        <Link 
                                            to={`/technologies/${technology.slug}/`}
                                            key={`tech_key_${index}`}
                                        >{technology.name}</Link>
                                    )).reduce((prev, curr, index) => [prev, <TechSeparator key={`sep_key_${index}`} />, curr])}
                                </>
                            </React.Fragment>
                        ))}
                    </Card>
                </>
            )}
        </>
    )
}

export default ProjectSection;