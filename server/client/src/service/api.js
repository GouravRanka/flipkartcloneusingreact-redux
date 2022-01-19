import axios from 'axios';


export const authenticateSignup = async (user) => {
    try {
        
        return await axios.post(`/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error.message);
    }
}

export const authenticateLogin = async (user) => {
    try {
        
        console.log(user)
        return await axios.post(`/login`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error.message);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        console.log('payment api');
        let response = await axios.post(`/payment`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}





