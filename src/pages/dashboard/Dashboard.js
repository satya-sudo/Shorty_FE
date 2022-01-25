import React,{ useState, useEffect } from 'react';
import { getToken } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import BarChart from './Chart';

import { shorten } from '../../services/shortner';

const datas = [

    [10, 80, 40, 20],

    [10, 40, 30, 20, 50, 10],

    [10, 40, 30, 20, 20, 10],

    [10, 40, 20, 50, 10],

    [10, 20, 50, 10],

    [60, 30, 40, 20, 30],

];

var i = 0;

const Dashboard = () => {

    let navigate = useNavigate();
    useEffect(() => {
        if(!getToken()){
              navigate('/registeration');
        }
    },[navigate])
    const [data, setData] = useState([]);


    useEffect(() => {

        changeData();

    }, []);


    const changeData = () => {

        setData(datas[i++]);

        if(i === datas.length) i = 0;

    }


    const [url,setUrl] = useState();
    const [shortUrl,setShortUrl] = useState("");
    const [tag,setTag] = useState();

    const [error,setError] = useState(false);
    const [message,setMessage] = useState();
    const [messageApi,setMessageApi] = useState();

    const handleSubmit = async () => {

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

        if (response.status === 201 ){
            setMessage("Here is the shorten url");
            setShortUrl(response.data.id);
        } else  if (response.status === 400 ){
            setMessage("Something Went Wrong! ");
            setError(true);
        } else if (response.status === 401) {
            setMessage("token expired");
            setError(true);
        }

    }

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
        <div className="container dashboard">
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
                <BarChart width={600} height={400} data={data} />
            </div>
        </div>
    );
};

export default Dashboard;