import shortyApi from "../apis/Shorty";
import {
    getToken
} from "../services/auth";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  }
export const shorten = async (data) => {
    const response = await shortyApi.post('/api/url/', data,
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