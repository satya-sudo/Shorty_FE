import React  from 'react';
import logo from  '../assets/not.svg'


const Notfound = () => {

    return (
        <div className="d-flex align-content-center flex-wrap justify-content-center notfoundWrapper">
            <div className="text-center mx-6 headWrapper text-primary">
                
                <h1><img src={logo} alt="logo" className="logo"/>  404</h1>
                <h3>Page Not Found</h3>
            </div>
        </div>
    );

}

export default Notfound;