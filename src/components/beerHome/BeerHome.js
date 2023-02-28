//library import
import { Link } from "react-router-dom";

const BeerHome = (props) => {

    return ( 
        <article>
            <Link>
            <img src={props.img} alt="beer" />
            <h2>{props.title}</h2>
            </Link>
            <p>{props.description}</p>
        </article>
    );
}

export default BeerHome;