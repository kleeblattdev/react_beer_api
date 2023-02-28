//file import
// Library Imports
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

//components import
import Navbar from '../components/navbar/Navbar.js';
import BackBtn from '../components/backBtn/BackBtn.js';

const Beerdetail = () => {
    const params = useParams()
    console.log(params.beerId)

    const [detail,setDetail] = useState({});

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
        .then(response => response.json())
        .then(data => {
            setDetail(data)
        })
},[params.beerId])
console.log(detail)

    return ( 
        <main>
            <img src={detail.image_url} alt="beerproduct" />
            <h2>{detail.name}</h2>
            <h3>{detail.slogan}</h3>
            <p>First brewed: <span>{detail.first_brewed}</span></p>
            <p>Attenuation level: <span>{detail.attenuation_level}</span></p>
            <p>{detail.description}</p>
            <p>Contributed by: {detail.contributed_by}</p>
            <BackBtn/>
            {/* <Navbar></Navbar> */}
        </main>
    );
}

export default Beerdetail;