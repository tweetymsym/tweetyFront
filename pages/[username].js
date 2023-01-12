import { useRouter } from "next/router";
import styles from '/styles/TweetStyle.module.css'
import { useState } from "react";
import UserInfosCard from "../components/profile/UserInfosCard";

const Profile = () => {
    const router = useRouter()
    const path = router.query.username

    return (
        <div className={styles.page}>
            <UserInfosCard firstname = "dummy"
                lastname = "dummy"
                username = "dummy"
                userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                numberFollowers = "1"
                numberFollowing = "79"
            /> 
        </div>
    )
}
export default Profile;