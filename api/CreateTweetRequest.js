import axios from 'axios';

const CreateTweetRequest = async (content) => {

    const instance = axios.create({
        baseURL: "http://localhost:8765",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json',
          withCredentials: false
        }
    });

    await instance.post('/api/tweets', {
        content
    }).then(result => {
        console.log(result);
    });
}

export default CreateTweetRequest;