import axios from "axios";

const GetFollowingRequest = async (req, res) => {
  const { id } = req.query;
  const instance = axios.create({
    baseURL: `http://0.0.0.0:8080/api/follow`,
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  const result = await instance.get(`/following/${id}`);
  //check if error
  if (result.error) {
    res.status(500).json({ error: result.error });
  } else {
    res.status(200).json(result.data);
  }
};

export default GetFollowingRequest;
