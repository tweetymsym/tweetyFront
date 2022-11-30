import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Image from 'next/image'
import styles from './tweetCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { color } from '@mui/system';


const TweetCard = (props) => {
    const usernameprops = {
        paddingLeft: "8px",
        fontFamily: "cursive",
        fontSize: "medium",
        color:"gray"
    }
    const userflnameprops = {
        fontFamily: "cursive",
        fontSize: "large"
    }
    const dateprops = {
        fontSize: "medium",
        color: "grey",
        paddingLeft:"5px"
    }

    return (
        <Card className={styles.tweetcard}>
            <CardContent>
                <div className={styles.userinfo}>
                    <Image
                        className={styles.userpicture}
                        alt={props.username}
                        src={props.userpicture}
                        width={50}
                        height={50}
                    />
                    <Typography sx={userflnameprops}> {props.firstname} {props.lastname} </Typography>
                    <Typography sx={usernameprops}> @{props.username} </Typography>
                    <Typography sx={dateprops}> . {props.date} </Typography>
                </div>
                <Typography className={styles.tweetcontent}> {props.content} </Typography>
            </CardContent>
            <a className={styles.numbers}> {props.numberLikes} </a> <a> <FontAwesomeIcon className={styles.icons} icon={faHeart} color="#A8AEAF" size='xl'/>  </a>
            <a className={styles.numbers}> {props.numberComments} </a> <a> <FontAwesomeIcon className={styles.icons} icon={faComment} color="#A8AEAF" size="xl"/> </a>
            <a className={styles.numbers}> {props.numberRetweets} </a> <a> <FontAwesomeIcon className={styles.icons} icon={faRetweet} color="#A8AEAF" size="xl"/> </a>
        </Card>
    )
}
export default TweetCard;