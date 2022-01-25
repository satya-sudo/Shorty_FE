import React from 'react'; 
import image from '../../assets/image.svg'


const Home = () => {
    return (
        <div className="d-flex align-content-center flex-wrap justify-content-center homeWrapper">
            <div className="text-center mx-6 headWrapper text-primary">
                <h1>Welcome to Shorty</h1>
                <h3>A simple URL shortener service as an api with powerful dashboard</h3>
                <img src={image} alt="logo" className="logo"/>
                <button className="btn btn-outline-primary">Try Out</button>
            </div>
        </div>
    );

}

export default Home;