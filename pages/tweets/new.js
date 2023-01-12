import NewTweetCard from "/components/tweet/newTweetCard/newTweetCard"
import styles from '/styles/TweetStyle.module.css'
import Navbar from "../../components/navbar/navbar";

const New = () => {
    return (
        <div className={styles.page}>
            <Navbar/>
            <NewTweetCard username = "dummy" 
                userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            />
        </div>
    )
}
export default New;