import { Card, CardContent, Typography } from "@mui/material"
import Image from "next/image";
import styles from "./UserInfosCard.module.css"

const UserInfosCard = (props) => {
    return(
        <Card className={styles.UserInfosCard}> 
            <CardContent>
                <Image
                    alt={props.username}
                    src={props.userpicture}
                    width={60}
                    height={60}
                />
                <Typography> {props.firstname} {props.lastname} </Typography>
                <Typography> {props.username} </Typography>
                <a> {props.numberFollowers} followers </a>
                <a> {props.numberFollowing} following </a>
            </CardContent>
        </Card>
    )
}

export default UserInfosCard;