import axios from 'axios';
import { readCookie } from '../utils/Cookies';

const GetUserDetails = async (setUserDetails) => {

    let token = readCookie("token");
    console.log(token);

    const instance = axios.create({
        baseURL: "http://100.91.178.59:8765",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token,
          withCredentials: false
        }
    });

    let result = await instance.get('/api/users/current');
    setUserDetails(result.data)
}

export default GetUserDetails;