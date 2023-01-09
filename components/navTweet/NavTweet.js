import React from "react";

function NavTweet() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "90px",
        backgroundColor: "red",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fafafa",
          border: "solid black ",
        }}
      >
        <a
          href="/users"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#fafafa",
          }}
        >
          Users
        </a>
        <a
          href="/users/following"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#fafafa",
          }}
        >
          Followings
        </a>
        <a
          href="/users/followers"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#fafafa",
          }}
        >
          Followers
        </a>
      </div>
    </nav>
  );
}

export default NavTweet;
