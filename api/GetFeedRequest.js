import axios from 'axios';

const GetFeedRequest = async (setTweets) => {

    const instance = axios.create({
        baseURL: "http://100.91.178.59:8765",
        withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json',
        }
    });

    let res = await instance.get('/api/tweets/test');
    setTweets({list: res.data});
}

export default GetFeedRequest;