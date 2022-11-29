import React, { useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Image from 'next/image'
import styles from './newTweetCard.module.css'

const NewTweetCard = (props) => {
    const [formValues, setFormValues] = useState({content: ""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const usernameprops = {
        marginLeft: 2.5,
        fontFamily: "cursive",
        fontSize: "larger"

    }
    return (
        <Card className={styles.newtweetcard}>
            <CardContent>
                <div className={styles.userinfo}>
                    <Image
                        className={styles.userpicture}
                        alt={props.username}
                        src={props.userpicture}
                        width={50}
                        height={50}
                    />
                    <Typography sx={usernameprops}> {props.username} </Typography>
                </div>
                <textarea
                    className={styles.newtweetcontent}
                    id="contentInput"
                    name="content"
                    type="text"
                    placeholder="What's up ? "
                    value={formValues.content}
                    onChange={handleChange}
                    maxlength="280"
                />
            </CardContent>
            <CardActions>
                <Button className={styles.newtweetbutton}> Tweet </Button>
            </CardActions>
        </Card>
    )
}
export default NewTweetCard;