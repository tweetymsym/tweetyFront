import TweetCard from "../../components/tweet/tweetCard/tweetCard"
import { useRouter } from "next/router";

const Tweet = () => {
    const router = useRouter()
    const path = router.query.tweetId
    //we use path to retrieve the tweet's infos
     
    var tweetDateString = "2022-11-30 17:16:01";
    var tweetDate = new Date(tweetDateString);
    var actualDate = new Date();
    var DateToExpose
    if (tweetDate.getFullYear() == actualDate.getFullYear()) {
        if (tweetDate.getMonth() == actualDate.getMonth()) {
            if (tweetDate.getDate() == actualDate.getDate()) {
                if (tweetDate.getHours() == actualDate.getHours()) {
                    if (tweetDate.getMinutes() == actualDate.getMinutes()) {
                        DateToExpose = actualDate.getSeconds() - tweetDate.getSeconds() + "secs"
                    }
                    else {
                        DateToExpose = actualDate.getMinutes() - tweetDate.getMinutes() + "mins";
                    }
                }
                else {
                    DateToExpose = actualDate.getHours() - tweetDate.getHours() + "hrs";
                }
            }
            else {
                DateToExpose = actualDate.getDate() - tweetDate.getDate() + "days";
            }
        }
        else {
            DateToExpose = actualDate.getMonth() - tweetDate.getMonth() + "mo";
        }
    }
    else {
        DateToExpose = actualDate.getFullYear() - tweetDate.getFullYear() + "y";
    }

    return (
        <div>
            <TweetCard firstname = "dummy"
                lastname = "dummy"
                username = "dummy" 
                userpicture = "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                date = {DateToExpose}
                numberLikes = "5"
                numberComments = "1"
                numberRetweets = "2"
                />
        </div>
    )
}
export default Tweet;