import TweetCard from "../../components/tweet/tweetCard/tweetCard"
import CalculateDateDifference from "../../utils/CalculateDateDifference";
import styles from '/styles/TweetStyle.module.css'
import NewTweetCard from "/components/tweet/newTweetCard/newTweetCard"
import { useState } from "react";
import GetFeedRequest from "../../api/GetFeedRequest";
import { useEffect } from "react";

export default function Feed() {
    const [tweets, setTweets] = useState({list: []})

    useEffect(
        () => {
            GetFeedRequest(setTweets)
        }, [tweets.list.length]
    );

    return (
        <div className={styles.page}>
            <div style={{
                width: "100%"
            }}>
                <NewTweetCard username = "dummy" 
                    userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                />
                {tweets.list.map(
                    (tweet) => (
                        <TweetCard 
                            key={tweet.id}
                            firstname = "dummy"
                            lastname = "dummy"
                            username = {tweet.userId}
                            userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                            content = {tweet.content}
                            date = {CalculateDateDifference(tweet.date)}
                            numberLikes = "5"
                            numberComments = "1"
                            numberRetweets = "2"
                        />
                    )
                )}
            </div>
        </div>
    )
}