import React, { useState, useEffect } from 'react';

import { IConsultant } from '../models/Consultant';
import API from '../utils/API';
import { Row, Col, Card, Icon } from 'react-materialize';
import { useParams } from 'react-router-dom';
import Loading from '../common/Loading';
import TechnologyLevels from '../common/TechnologyLevels';
import { IExperience } from '../models/Experience';

import './ConsultantDetail.css';
import ProjectSection from '../project/ProjectSection';

function ConsultantDetail(){
    const { consultantSlug } = useParams();
    const [consultant, setConsultant] = useState<IConsultant | null>(null);

    useEffect(() => {
        const fetchConsultant = async() => {
            const result = await API.get(`/consultants/${consultantSlug}/`);
            setConsultant(result.data);
        };
        fetchConsultant();
    }, [consultantSlug]);

    const mailSubject = consultant ? encodeURI(`Book consultant - ${consultant.fullname}`) : '';

    return (
        <div className="container">
            {consultant ? (
                <>
                    <Card className="card-main">
                        <div className="center-align">
                            <img className="circle responsive-img" src={consultant.image.medium} alt={consultant.fullname} />
                        </div>
                        <div className="center-align">
                            <h2>{consultant.fullname}</h2>
                            <h5>{consultant.jobtitle}</h5>
                            <hr />
                        </div>
                        <div className="left-align">{consultant.description}</div>
                        <br />
                        <br />
                        <Row className="center-align">
                            <Col s={6}>
                                <a
                                    href={`mailto:tech@alten.dk?subject=${mailSubject}`}
                                    className="waves-effect waves-light btn"
                                >
                                    <Icon left={true}>schedule</Icon>Book Consultant
                                </a>
                            </Col>
                            <Col s={6}>
                                <a
                                    href={consultant.cv}
                                    className="waves-effect waves-light btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon left={true}>file_download</Icon>Download CV
                                </a>
                            </Col>
                        </Row>
                        <br/>
                        {consultant.linkedin && (
                            <div className="center-align">
                                <a 
                                    href={consultant.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        <img src="https://api.altentechnology.dk//static/base/logo/linkedin.png" alt="LinkedIn" />
                                </a>
                            </div>
                        )}
                    </Card>

                    {consultant.technologyLevels.length > 0 && (
                        <>
                            <div className="center-align">
                                <Icon>star</Icon>
                            </div>

                            <Card>
                                <h2 className="center-align">Technologies & Tools</h2>
                                <TechnologyLevels technologyLevels={consultant.technologyLevels} />
                            </Card>
                        </>
                    )}

                    <ProjectSection projects={consultant.projects} />

                    {consultant.experience.length > 0 && (
                        <>
                            <div className="center-align">
                                <Icon>work</Icon>
                            </div>

                            <Card>
                                <h2 className="center-align">Experience</h2>
                                <div className="timeline">
                                    {consultant.experience.map((job: IExperience, index: number) => (
                                        <div 
                                            className="timeline-event" 
                                            key={`timeline_key_${index}`}
                                        >
                                            <div className="card timeline-content alten-light-blue">
                                                <div className="card-content">
                                                    <span className="card-title alten-header-color">{job.start} - {job.company}</span>
                                                    <p className="alten-p-light-blue"><b>{job.job_title}</b></p>
                                                    <hr />
                                                    <p>{job.description}</p>
                                                </div>
                                            </div>
                                            <div className="timeline-badge blue white-text">
                                                <i className="material-icons">my_location</i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </>
                    )}
                </>
            ) : (
                <Loading />
            )}
            
        </div>
    )
}

export default ConsultantDetail;
