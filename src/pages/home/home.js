import React from 'react'; 
import image from '../../assets/image.svg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/registration');
    }

    return (
        <div className="d-flex align-content-center flex-wrap justify-content-center homeWrapper home">
            <div className="text-center mx-6 headWrapper text-primary">
                <h1>Welcome to Shorty</h1>
                <h3>A simple URL shortener service as an api with powerful dashboard</h3>
                <img src={image} alt="logo" className="logo"/>
                <button className="btn btn-outline-primary" onClick={()=>handleClick()}>Try Out</button>
            </div>
        </div>
    );

}

export default Home;