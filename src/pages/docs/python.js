import React from 'react';


const PCard = () => {
    return ( 
        <div className="card bg-light NoboarderCard">
            <div className="card-body">
                <pre>
                    <code className="language-python">
{`
import requests
 
url = "https://shty1.herokuapp.com/api/url/"

token = "eyJ0eXA..."

data = {
    "url": "www.shorty.com",
    "tag": "business",
}

headers  = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {token}",
}
 
response = requests.post(url,headers=headers,json=data)
 
print("Status Code", response.status_code)
print("JSON Response ", response.json())`}
                    </code>
                </pre>
            </div>
        </div>
    )
}


export default  PCard;