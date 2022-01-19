import axios from 'axios';

const url = 'http://localhost:8080'
export const authenticateSignup = async (user) => {
    try {
        
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error.message);
    }
}

export const authenticateLogin = async (user) => {
    try {
        
        console.log(user)
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error.message);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        console.log('payment api');
        let response = await axios.post(`${url}/payment`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}





