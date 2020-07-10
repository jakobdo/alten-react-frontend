import React, { useState, useEffect } from 'react';

import API from '../utils/API';
import Loading from '../common/Loading';
import { useParams } from 'react-router-dom';
import { Card } from 'react-materialize';
import { IService } from '../models/Service';
import ProjectSection from '../project/ProjectSection';
import TechnologySection from '../technology/TechnologySection';

function ServiceDetail(){
    const { serviceSlug } = useParams();
    const [service, setService] = useState<IService | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const result = await API.get(`/services/${serviceSlug}/`);
            setService(result.data);
        };
        fetchData();
    }, [serviceSlug]);

    return (
        <div className="container">
            {service ? (
                <React.Fragment>
                    <Card>
                        <h1>{service.name}</h1>
                    </Card>

                    <ProjectSection projects={service.projects} />

                    <TechnologySection technologies={service.technologies} />
                </React.Fragment>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default ServiceDetail;
