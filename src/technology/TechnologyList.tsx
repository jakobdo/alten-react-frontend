import React, { useState, useEffect } from 'react';

import API from '../utils/API';
import { Link } from 'react-router-dom';
import { ITechnology } from '../models/Technology';

function TechnologyList(){
    const [technologies, setTechnologies] = useState<ITechnology[]>([]);

    useEffect(() => {
        const fetchTags = async() => {
            const result = await API.get('/technologies/');
            setTechnologies(result.data);
        };
        fetchTags();
    }, []);

    return (
        <div className="container">
            <h1>Technologies & Tools</h1>
            <ul className="list">
                <div className="collection">
                    {technologies.map((technology: ITechnology) => 
                        <li className="list-item" key={technology.slug}>
                            <div className="card"
                            >
                                <Link 
                                    className="collection-item"
                                    to={`/technologies/${technology.slug}`}
                                >
                                    {technology.name}
                                </Link>
                            </div>
                        </li>
                    )}
                </div>
            </ul>
        </div>
    )
}

export default TechnologyList;
