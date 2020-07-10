import React, { useState, useEffect } from 'react';

import API from '../utils/API';
import { Card, Row } from 'react-materialize';
import { useParams } from 'react-router-dom';
import Loading from '../common/Loading';
import { ITechnology } from '../models/Technology';
import ConsultantLink from '../common/ConsultantLink';
import { IConsultantSimple } from '../models/Consultant';
import ProjectSection from '../project/ProjectSection';

function TechnologyDetail(){
    const { technologySlug } = useParams();
    const [technology, setTechnology] = useState<ITechnology | null>(null);

    useEffect(() => {
        const fetchTechnology = async() => {
            const result = await API.get(`/technologies/${technologySlug}/`);
            setTechnology(result.data);
        };
        fetchTechnology();
    }, [technologySlug]);

    return (
        <div className="container">
            {technology ? (
                <>
                    <h1>{technology.name}</h1>
                    <Card>
                        {technology.description}
                    </Card>
                    {technology.consultants.length > 0 && (
                        <>
                            <h2>Consultants</h2>
                            <Row>
                                {technology.consultants.map((consultant: IConsultantSimple) => (
                                    <ConsultantLink key={consultant.slug} consultant={consultant} />
                                ))}
                            </Row>
                        </>
                    )}

                    <ProjectSection projects={technology.projects} />
                </>
            ) : (
                <Loading />
            )}
            
        </div>
    )
}

export default TechnologyDetail;
