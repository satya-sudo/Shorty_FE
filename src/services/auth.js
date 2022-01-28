
import shortyApi from "../apis/Shorty";


export const register = async (data) => {
    const response = await shortyApi.post('/api/auth/register/', data);
    return await response.data;
}

export const login = async (data) => {
    const response = await shortyApi.post('/api/auth/login/', data)
    .then(response => {
            setToken(response.data.data.tokens);
            return true;
    })
    .catch(error => {
        return false
    });
    return response;

}



export const getToken = () => {    
    return localStorage.getItem('ACCESSTOKENVALUE');
}

export const setToken = (token) => {
    localStorage.setItem('ACCESSTOKENVALUE', token);
}

export const removeToken = () => {
    localStorage.removeItem('ACCESSTOKENVALUE');
    return true
}

