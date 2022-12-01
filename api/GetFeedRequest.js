import axios from 'axios';

const GetFeedRequest = async (setTweets) => {

    const instance = axios.create({
        baseURL: "http://10.1.6.3:8765",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json',
        }
    });

    await instance.get('/api/tweets/test').then(result => {
        setTweets({list: result.data})
    });
}

export default GetFeedRequest;