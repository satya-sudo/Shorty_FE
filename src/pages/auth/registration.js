import React,{useState,useEffect} from 'react';
import logo from '../../assets/link.png';
import { useNavigate } from 'react-router-dom';

import { register,login,getToken } from '../../services/auth';

const  Registration = (props) => {

    let navigate = useNavigate();
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [type,setType] = useState(props.type);

    const [error,setError] = useState(false);
    const [message,setMessage] = useState();

    const handleSwitch = () => {
        setType(!type);
        setError(false);
        setMessage();   
    }

    useEffect(() => {
        if(getToken()){
           navigate('/Dashboard');
        }
    },[])




    const handleSubmit = async () =>  {
        if (type === true) {
            const response = await register({phone,password})
            console.log(response);
            if (response.status === true) {
                setType(!type);
                setError(false);
                setMessage();
            }
        } else {
            const response = await login({phone,password})
            if (response === true) {
                setMessage('Login Successful');
                navigate('/Dashboard');
                setError(false);
            } else {
                setMessage('Login Failed! invalid Credentials');
                setError(true);
            }
        }
    }




    return (
        <div className="d-flex align-content-center flex-wrap justify-content-center reg_form">
            
            <div className="card bg-light">
                <div className="card-body">
                    <div className="text-center mb-3">
                    <img src={logo} alt="logo" className="logo card-img-top"/>

                    </div>
                    {
                        message && <div className={error ? "alert alert-danger": "alert alert-success" }>{message}</div>
                    }
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-outline-primary btn-block" onClick={(e)=>{handleSubmit()}}>{type=== false ?"Login ":"Register " }</button>
                    <h6 className="text-muted text-center mt-3">{type=== true ?"Already have an account? ":"Don't have an Account? " }<button className="btn btn-light text-primary" onClick={()=>handleSwitch()}>{type=== true ?"Login ":"Register " }</button></h6>
                
                </div>
            </div>

        </div>

    );
}

export default Registration;