"user strict";

const CalculateDateDifference = (tweetDateString) => {
    var tweetDate = new Date(tweetDateString);
    var actualDate = new Date();
    if (tweetDate.getFullYear() == actualDate.getFullYear()) {
        if (tweetDate.getMonth() == actualDate.getMonth()) {
            if (tweetDate.getDate() == actualDate.getDate()) {
                if (tweetDate.getHours() == actualDate.getHours()) {
                    if (tweetDate.getMinutes() == actualDate.getMinutes()) {
                        return actualDate.getSeconds() - tweetDate.getSeconds() + "secs";
                    }
                    else {
                        return actualDate.getMinutes() - tweetDate.getMinutes() + "mins";
                    }
                }
                else {
                    return actualDate.getHours() - tweetDate.getHours() + "hrs";
                }
            }
            else {
                return actualDate.getDate() - tweetDate.getDate() + "days";
            }
        }
        else {
            return actualDate.getMonth() - tweetDate.getMonth() + "mo";
        }
    }
    else {
        return actualDate.getFullYear() - tweetDate.getFullYear() + "y";
    }
} 

export default CalculateDateDifference;