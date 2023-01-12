import axios from 'axios';

const LoginRequest = async (credentials, setToken) => {


    const instance = axios.create({
        baseURL: "http://100.91.178.59:8765",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json',
          withCredentials: false
        }
    });

    await instance.post('/login', credentials)
        .then(result => {
            console.log(result.data);
            setToken("token", result.data.accessToken, {
                path: "/", 
                maxAge: 1000000,
                sameSite: true
            })
        })
        .catch((res ) => {
            console.log(credentials.remember);
            console.log(res)
        });
        window.location = '/tweets';

}

export default LoginRequest;