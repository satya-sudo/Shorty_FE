import React from 'react';





const Ccard = () => {
    return ( 
        <div className="card bg-light NoboarderCard">
            <div className="card-body">
                <pre>
                    <code className="language-python">
{`
curl -X POST "http://shty1.herokuapp.com/api/url/" 
-H  "accept: application/json" 
-H  "Authorization: Bearer eyJ0e..." 
-H  "Content-Type: application/json" 
-d "{  \"url\": \"shorty.com\",  \"tag\": \"Office\"}"
`}
                    </code>
                </pre>
            </div>
        </div>
    )
}


export default  Ccard;