import axios from 'axios';

const CreateAccountRequest = async (personalInformation) => {

    delete personalInformation.confirmPassword;

    const instance = axios.create({
        baseURL: "http://100.91.178.59:8765",
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
        }
    });

    await instance.post('/api/users', personalInformation)
    window.location = '/account/login'
}

export default CreateAccountRequest;