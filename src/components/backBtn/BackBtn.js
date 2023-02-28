//library import
import { useNavigate } from "react-router-dom";

//CSS import
import './BackBtn.css';

const BackBtn = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return ( 
        <button onClick={goBack}></button>
    );
}

export default BackBtn;