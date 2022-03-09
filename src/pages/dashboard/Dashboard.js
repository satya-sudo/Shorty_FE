import React,{ useState, useEffect } from 'react';
import { getToken,removeToken } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
// import Donutchart from './Chart';
import ApexCharts from './Chart';
import { shorten } from '../../services/shortner';

import {stats} from  '../../services/stats';


// const label = ['office', 'Entertainment', 'facebook', 'Instagram', 'twitter','others']

const Pserise  =  [44, 55, 13, 43, 22,77]


const Dashboard = () => {

    let navigate = useNavigate();
    // Storty service data
    const [url,setUrl] = useState();
    const [shortUrl,setShortUrl] = useState("");
    const [tag,setTag] = useState();

    // Error states
    const [error,setError] = useState(false);
    const [message,setMessage] = useState();
    const [messageApi,setMessageApi] = useState();

    // Chart data
    const [serise,setSerise] = useState([]);

    const [labels,setLabels] = useState([])

    const [totalUrls,setTotalUrls] = useState(0);
    const [totalClicks,setTotalClicks] = useState(0);


    useEffect(() => {

        
        fetchData();
        console.log(serise,"serise");
    },[]);

    const fetchData = async () => {
        const response = await stats();
        if(response.status === 200){
            setSerise(response.data.visits);
            setTotalUrls(response.data.total_urls);
            setTotalClicks(response.data.total_visits);
            setLabels(response.data.tags);
            console.log(response.data);
        } else if (response.status === 401){
            removeToken();
            navigate('/registration');
        }
        return response;
    };


    useEffect(() => {
        if(!getToken()){
              navigate('/registeration');
        }
    },[navigate])


    const handleSubmit = async () => {

        // form validatiom
        if (!url) {
            setMessage('Please enter a valid URL');
            setError(true);
            return
        }
        else if (!tag) {
            setMessage('Please enter a Tag');
            setError(true);
            return
        }

        const response = await shorten({ url, tag });

        // response from api
        if (response.status === 201 ){
            setMessage("Here is the shorten url");
            setShortUrl(response.data.id);
        } else  if (response.status === 400 ){
            setMessage("Something Went Wrong! ");
            setError(true);
        } else if (response.status === 401) {
            removeToken();
            navigate('/registration');
        }

    }


    // copy to clipboard functions
    const handleClickToCopy = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(shortUrl);
            setError(false);
            setMessage('Copied to clipboard');
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(getToken());
        setMessageApi('Api Key Copied to clipboard');
    }
            
    return (
        <div className="container dashboard dashBoard">
            <div className="d-flex align-content-center flex-wrap justify-content-center" >

                <div className="card bg-light  cardWrapper"> 
                    <div className="card-body">
                    
                        <h3>Shorted A Url</h3>
                        {
                           message && <div className={error ? "alert alert-danger": "alert alert-success" }>{message}</div>
                        }
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter Url" value={url} onChange={(e)=>setUrl(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter Tag" value={tag} onChange={(e)=>setTag(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control copy" placeholder="Short slug" value={shortUrl} onClick={()=>handleClickToCopy()}/>
                        </div>
                        <button className="btn btn-outline-primary btn-block" onClick={() => handleSubmit() }>Short</button>
                    </div>
                </div>

                <div className="card bg-light ApiKeyWrapper">
                    <div className="card-body">
                    {messageApi && <div className="alert alert-primary">{messageApi}</div>}
                        <h6>
                            <div className="row">
                                <div className="col-md-2">
                                <i className="fa fa-key"></i>
                                API KEY
                                </div>
                                <div className="text-primary col-md-10 copy" onClick={()=>handleCopy()}>{getToken()}</div>
                            </div>
                        </h6>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                        <div className="card bg-light NoboarderCard">
                            <div className="card-body p-4">
                                {serise.length >0  && labels.length > 0 ? <ApexCharts series={serise}  labels={labels} /> : null  }
                           
                            </div>
                        </div>
                
                </div>
                <div className="col-md-4">
                <div className="card bg-light NoboarderCard">

                    <div className="text-center card-body">
                        
                        <h4 className="text-primary">{totalUrls}</h4>
                        <h4>Total Urls</h4>
                        
                        <h4 className="text-primary">{totalClicks}</h4>
                        <h4>Total Visits</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default Dashboard;