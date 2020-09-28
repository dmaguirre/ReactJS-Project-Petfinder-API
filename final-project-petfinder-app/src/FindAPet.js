import React from 'react';
import Header from "./Header";

export default function FindAPet(props) {
    return (
        <div className="header">
        <header>
            <Header />
        </header>
        <main className="main">
                <div>FIND A PET</div>
                <div>
                    {props.results.animals.map((animal) => (
                        <li key={animal.id}>{animal.id}</li>
                    ))}
                </div>
        </main>                 
    </div>
    )
}
