import axios from "axios";
import React, { useEffect, useState } from "react";
import NavTweet from "../../components/navTweet/NavTweet";
function index() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("704bc8d8-4a49-437f-b73a-ab983a7b7b47");

  const getUsers = async () => {
    //get requetst and specifie the type of data we want to get in the header
    const data = await fetch(`http://localhost:8089/api/user/detail/${id}`, {
      //content type is a list
      headers: { "Content-Type": "application/json" },
    });
    //convert the data to json
    const users = await data.json();
    console.log(users);
    // const users = [
    //   {
    //     id: "704bc8d8-4a49-437f-b73a-ab983a7b7b47",
    //     userName: "user1",
    //   },
    //   {
    //     id: "704bc8d8-4a49-4777f-b73a-ab983a7b7b47",
    //     userName: "user2",
    //   },
    //   {
    //     id: "7c8d8-4a49-437f-b73a-ab983a7b7b47",
    //     userName: "user1",
    //   },
    //   {
    //     id: "704bc8d9-4777f-b73a-ab983a7b7b47",
    //     userName: "user2",
    //   },
    //   {
    //     id: "704bc8d8-4a49-437f-bab983a7b7b47",
    //     userName: "user1",
    //   },
    //   {
    //     id: "704bc8d8-4a4777f-b73a-ab983a7b7b47",
    //     userName: "user2",
    //   },
    //   {
    //     id: "704bc8d8-4a49-437f-b73a-ab9a7b7b47",
    //     userName: "user1",
    //   },
    //   {
    //     id: "704bc8d8-4a49-4777f3a-ab983a7b7b47",
    //     userName: "user2",
    //   },
    // ];

    //set the users state to the users we got from the api
    setUsers(users);
    //set the loading state to false
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  const Follow = async (idToFollow) => {
    setLoading(true);

    //send post request with a json body to the api with fetc
    const data = await fetch("http://localhost:8089/api/follow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentUserId: id,
        userToFollow: idToFollow,
      }),
    });
    //convert the data to json
    getUsers();
    setLoading(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifySelf: "center",
        }}
      >
        <NavTweet />
      </div>

      <div
        style={{
          display: "flex",
          flex: "flex1",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fafafa",
        }}
      >
        {loading ? (
          //scrolling loading animation
          <div style={{}}>Loading...</div>
        ) : (
          //two column table one for name and other for follow or unfollow button
          <table
            style={{
              width: "100%",
              maxWidth: "600px",
              borderCollapse: "collapse",
              border: "1px solid #dbdbdb",
              borderRadius: "3px",
              backgroundColor: "#fff",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              marginBottom: "60px",
              marginTop: "60px",
            }}
          >
            <tr
              style={{
                border: "1px solid #dbdbdb",
                padding: "16px",
                backgroundColor: "#fafafa",
                fontWeight: "600",
                fontSize: "14px",
                color: "#262626",
                textAlign: "left",
                textTransform: "uppercase",
                letterSpacing: "1px",
                lineHeight: "1.2",
                borderTopLeftRadius: "3px",
                borderTopRightRadius: "3px",
              }}
            >
              <th
                style={{
                  border: "1px solid #dbdbdb",
                  padding: "16px",
                  backgroundColor: "#fafafa",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#262626",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.2",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                }}
              >
                Name
              </th>
              <th
                style={{
                  border: "1px solid #dbdbdb",
                  padding: "16px",
                  backgroundColor: "#fafafa",
                  fontWeight: "600",

                  color: "#262626",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.2",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                }}
              >
                Follow
              </th>
            </tr>
            {users.map((user) => (
              <tr
                style={{
                  border: "1px solid #dbdbdb",
                  padding: "16px",
                  backgroundColor: "#fafafa",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#262626",
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: "1.2",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                }}
                key={user.id}
              >
                <td
                  style={{
                    border: "1px solid #dbdbdb",
                    padding: "16px",
                    backgroundColor: "#fafafa",
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#262626",
                    textAlign: "left",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    lineHeight: "1.2",
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                  }}
                >
                  {user.userName}
                </td>
                <td
                  style={{
                    border: "1px solid #dbdbdb",
                    padding: "16px",
                    backgroundColor: "#fafafa",
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#262626",
                    textAlign: "left",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    lineHeight: "1.2",
                    borderTopLeftRadius: "3px",
                    borderTopRightRadius: "3px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#3897f0",
                      border: "1px solid #3897f0",
                      borderRadius: "3px",
                      color: "#fff",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "600",
                      padding: "8px 16px",
                      textAlign: "center",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      lineHeight: "1.2",
                      width: "100%",
                    }}
                    onClick={() => {
                      Follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}

export default index;
