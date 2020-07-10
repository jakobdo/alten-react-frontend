import React, { useState, useEffect } from 'react';

import API from '../utils/API';
import { Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom';
import { IServiceSimple } from '../models/Service';


function ServiceList(){
    const [services, setServices] = useState<IServiceSimple[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            const result = await API.get('/services/');
            setServices(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1>Services</h1>
            <ul className="list">
                {services.map((service: IServiceSimple) => 
                    <li className="list-item" key={service.slug}>
                        <Card
                            header={(
                                <Link to={`/services/${service.slug}`}>
                                    <CardTitle image={service.image.medium} />
                                </Link>
                            )}
                        >
                            <Link to={`/services/${service.slug}`}>
                                {service.name}
                            </Link>
                        </Card>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ServiceList;
