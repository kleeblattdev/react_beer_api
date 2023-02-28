//library import
import { Link } from 'react-router-dom';

//CSS import
import './BeerListItem.css'

const BeerListItem = (props) => {
    return ( 
        <article>
            <img src={props.imgURL} alt="bottle of beer" />
            <div className='beerOverview'>
                <h2>{props.name}</h2>
                <h3>{props.slogan}</h3>
                <p>Created by: {props.contributor.slice(0, props.contributor.indexOf("<"))}</p>
                <Link to={`/beers/${props.id}`}>Details</Link>  
            </div>
        </article>
    );
}

export default BeerListItem;