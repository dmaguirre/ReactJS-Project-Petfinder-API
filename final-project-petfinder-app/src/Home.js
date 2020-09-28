import React from 'react';
import Header from "./Header";

export default function Home() {
    return (
    <div className="header">
        <header>
            <Header />
        </header>
        <main className="main">
            <div>
            <img src={require('./bowandmeowcover.gif')} alt="Loading Homepage..." />
            </div>
        </main>    
    </div>
    )
}
