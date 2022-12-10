import axios from 'axios';

const CreateAccountRequest = async (personalInformation) => {

    delete personalInformation.confirmPassword;

    const instance = axios.create({
        baseURL: "http://localhost:8765",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json',
          withCredentials: false
        }
    });

    await instance.post('/api/users', personalInformation)
        .then(result => {
            console.log(result);
            window.location = '/account/login'
        })
        .catch((res ) => {
            console.log(personalInformation);
            console.log(res)
        });
}

export default CreateAccountRequest;