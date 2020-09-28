import React from 'react';
import Header from "./Header";

export default function FindAPet(props) {
    return (
        <div className="header">
        <header>
            <Header />
        </header>
        <main className="main">
                <div className="page-title">FIND A PET</div>
                <div className="animal-list">
                    {props.results.animals.map((animal) => (
                        <li key={animal.id}>Name: {animal.name} Type:{animal.type} Description: {animal.description} Link: <a href={animal.url}>See My Profile</a></li>
                    ))}
                </div>
        </main>                 
    </div>
    )
}
