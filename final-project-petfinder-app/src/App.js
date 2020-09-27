import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./index.css";
import Home from "./Home";
import FindAPet from "./FindAPet";
import Adopt from "./Adopt";
import About from "./About";
import Contact from "./Contact";
import axios from 'axios';

const clientKey=process.env.REACT_APP_API_CLIENT_KEY;
const clientSecret=process.env.REACT_APP_SECRET_KEY;

export default function App(){
    const [accessToken, setAccessToken] = useState(null);
    const [results, setResults] = useState(null);

    useEffect(() => {
        const fetchAccessToken = async () => {
           
            const petFinderResponse = await axios.post(
                "https://api.petfinder.com/v2/oauth2/token/", 
                {
                    grant_type: "client_credentials",
                    client_id: clientKey,
                    client_secret: clientSecret
                }
            ); 
             setAccessToken(petFinderResponse.data.access_token);       
             //console.log(petFinderResponse.data.access_token);
        }; 
        fetchAccessToken();
    }, []);

  
    useEffect(() => {

        if (accessToken === null) {
            console.log("Token is null");
        } else {
        const fetchAnimals = async () => {
            const petFinderRequest = await axios.get(
                "https://api.petfinder.com/v2/animals?status=adoptable&location=Edmonton",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            setResults(petFinderRequest.data);   
            //console.log(petFinderRequest.data); 
        }
    fetchAnimals();
    }}, [accessToken])

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route 
                    exact path="/findapet" 
                    render={() => (
                    <FindAPet results={results} />
            )} />  
                <Route exact path="/about" component={About} />
                <Route exact path="/adopt" component={Adopt} />
                <Route exact path="/contactus" component={Contact} />  
            </Switch>
        </BrowserRouter>
    )  
}
