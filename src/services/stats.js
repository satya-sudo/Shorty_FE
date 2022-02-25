import shortyApi from "../apis/Shorty";
import {
    getToken
} from "../services/auth";

  
export const stats = async () => {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
    const response = await shortyApi.get('api/dashboard/stats/',
    { headers: headers
    })
    .then(response => {
            console.log(response);
            return {
                status: response.status,
                data: response.data
            }
    })
    .catch(error => {
        return {
            status:error.response.status,
            message:error.response.data}
    });

    return await response;
}