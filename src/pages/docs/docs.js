import React,{useState} from 'react';
import Pcard from './python';
import Ccard from './curl';
const Docs = () => {

    const [toggle,setToggle] = useState(0);

    return (
        <div  className="container docs">
            <div className="Header py-3">
                <h1 className="text-capitalize text-primary">
                    How To Get Started ...
                </h1>
            </div>

            <div className="Step_1">
                <div className="Step_1_header">
                    <h2 className="text-capitalize text-primary"> 
                        Step 1:
                    </h2>
                </div> 
                <div className="Step_1_body">
                    <p className="text-capitalize text-black-50 py-3">
                        <b>
                            1.
                        </b>
                        Create an account on Shorty and login.
                    </p>
                    <p className="text-capitalize text-black-50 py-3">
                        <b>
                            2.
                        </b>
                        Get Bearer Token from the Dashboard
                    </p>
                </div>

            </div>
            <div className="Step_2">
                <div className="Step_2_header">
                    <h2 className="text-capitalize text-primary">
                        Step 2:
                    </h2>
                </div>
                <div className="Step_2_body">
                    <p className="text-capitalize text-black-50 py-3">
                        <b>
                            1.
                        </b>
                        Make A post request to the endpoint <b>/api/v1/shorten</b>
                    </p>
                    <p className="text-capitalize text-black-50 py-3">
                        <b>
                            2.
                        </b>
                        Add bearer token in the header <b>Authorization</b> as <b>Bearer token</b>
                    </p>
                    <p className="text-capitalize text-black-50 py-3">
                        <b>
                            3.
                        </b>
                        Add the url to shorten in the body as <b>url</b> along with a optional <b>tag</b>
                    </p>
                    <p className="text-capitalize text-black-50 py-3">
                        <b>
                            3.
                        </b>
                        Get the short url in the response <b>id</b>
                    </p>
                </div>
            </div>
            <div className="code-block">
                <h2 className="text-capitalize text-primary">
                    Code Snippet:
                </h2>
                <button className="btn btn-outline-primary m-3" onClick={()=> {setToggle(0)}}>Python</button>
                {/* <button className="btn btn-outline-primary m-3" onClick={()=> {setToggle(1)}}>JavaScript</button> */}
                <button className="btn btn-outline-primary m-3" onClick={()=> {setToggle(1)}}>Curl</button>
                {
                    toggle === 0 ? <Pcard /> : null
                }
                {
                    toggle === 1 ? <Ccard /> : null
                }
                {/* {
                    toggle === 1 ? <Ccard /> : null
                } */}
            </div>


        </div>
    )
}


export default Docs;