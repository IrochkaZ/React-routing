import React from 'react';
import image from '../img/ira.jpg';
import './Home.css';

export function Home() {
    return (
        <React.Fragment>
            <h1> Welcome to My Home Page</h1>
            <img src={image} width="300" alt="Ira" />
            <p>Hello everyone, I am a beginner front-end developer and here you can see my applications</p>
            <h2>Personal information</h2>
            <ul className="person-information-list">
                <li><strong className='badge badge-pill badge-primary'> Name</strong> - Irina Zaletko</li>
                <li><strong className='badge badge-pill badge-primary'> Date of birth</strong> - 	12th November 1991</li>
                <li><strong className='badge badge-pill badge-primary'> Phone number</strong> - +375257692261</li>
                <li><strong className='badge badge-pill badge-primary'> Marital status</strong> - Single</li>
                <li><strong className='badge badge-pill badge-primary'> Email</strong> - zaletk.irina@gmail.com</li>
            </ul>

            <h2>Education</h2>
            <li>
                <p>The Belarusian State University of Informatics and Radioelectronics</p>
                <p>Radio communication systems of broadcasting and television</p>
                <p>Telecommunications Engineer</p>
                <p>2012-2016</p>
            </li>

            <li>
                <p>Higher State College of Communications</p>
                <p>Radio communication systems of broadcasting and television</p>
                <p>Telecommunications Technician</p>
                <p>2008-2012</p>
            </li>
        </React.Fragment>
    )
}
