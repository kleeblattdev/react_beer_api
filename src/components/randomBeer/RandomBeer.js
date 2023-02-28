//image import
import randombeer from '../../images/randombeer.png';

//library import    
import { Link } from 'react-router-dom';

const AllBeer = () => {
    return ( 
        <article>
            <Link to='/beers/'>
                <img src={randombeer} alt="" />
                <h2>All Beers</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cumque officia assumenda, culpa obcaecati, quod nihil commodi impedit quam hic consequuntur neque, animi facere consectetur voluptatum minus officiis molestias libero!</p>
        </article>    
    );
}

export default AllBeer;