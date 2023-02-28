//import libraries
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

//import component
import BeerListItem from "../components/beerListItem/BeerListItem";
import Navbar from "../components/navbar/Navbar";

const Beerlist = () => {
    const [beer,setBeer] = useState([])

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => response.json())
        .then(data =>{
            setBeer(data)
            
        })
    },[])
    console.log(beer)
    return ( 
        <main>
            {beer && beer.map((beer) =>{
                return <BeerListItem
                key = {uuidv4()}
                name={beer.name}
                imgURL={beer.image_url}
                slogan={beer.tagline}
                contributor={beer.contributed_by}
                id={beer._id}
                />
            })}
            <Navbar/>
        </main>
    );
}

export default Beerlist;