import TweetCard from "../../components/tweet/tweetCard/tweetCard"
import CalculateDateDifference from "../../utils/CalculateDateDifference";
import styles from '/styles/TweetStyle.module.css'
export default function Feed() {
    var tweetDateString = "2022-11-30 17:16:01";
    var dateToExpose = CalculateDateDifference(tweetDateString);

    return (
        <div className={styles.page}>
            <div>
                <TweetCard firstname = "dummy"
                    lastname = "dummy"
                    username = "dummy" 
                    userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    date = {dateToExpose}
                    numberLikes = "5"
                    numberComments = "1"
                    numberRetweets = "2"
                />
                <TweetCard firstname = "dummy"
                    lastname = "dummy"
                    username = "dummy" 
                    userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    date = {dateToExpose}
                    numberLikes = "5"
                    numberComments = "1"
                    numberRetweets = "2"
                />
                <TweetCard firstname = "dummy"
                    lastname = "dummy"
                    username = "dummy" 
                    userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    date = {dateToExpose}
                    numberLikes = "5"
                    numberComments = "1"
                    numberRetweets = "2"
                />
                <TweetCard firstname = "dummy"
                    lastname = "dummy"
                    username = "dummy" 
                    userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    date = {dateToExpose}
                    numberLikes = "5"
                    numberComments = "1"
                    numberRetweets = "2"
                    />
            </div>
        </div>
    )
}