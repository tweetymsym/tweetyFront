import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import styles from './navbar.module.css'
import Image from 'next/Image'
import {Alert, Typography} from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import image from '/public/image.png';
import GetUserDetails from '../../api/GetUserDetails';


const Navbar = (props) => {

    const [userDetails, setUserDetails] = useState({
        firstName: "", 
        lastName: "",
        userName: ""
    });

    useEffect(
        () => {
            GetUserDetails(setUserDetails)
        },
        [userDetails.userName]
    );

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
    const text = {
        fontSize: "25px",
        paddingLeft: "1.5em"
    }

    return (
        <Card className={styles.Navbar}>
            <CardContent>
                <ul className={styles.Navitems}>
                    <li>
                        <Image
                            src={image} 
                            className={styles.logo}
                            alt="logo"
                            width={80}
                            height={80}
                        />
                    </li>
                    <li className={styles.ConnectedUser}>
                        <Image className={styles.ConnectedUserPicture}
                            alt={props.username}
                            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                            width={60}
                            height={60}
                        />
                        <div>
                            <Typography sx={userflnameprops}> {userDetails.firstName} {userDetails.lastName} </Typography>
                            <Typography sx={usernameprops}> @{userDetails.userName} </Typography>
                        </div>
                    </li>
                    <li>
                        <a className={styles.navitem} href="#"> <FontAwesomeIcon className={styles.icons} icon={faHome} color="#A8AEAF" size="2x" /> <Typography sx={text}> Home </Typography> </a>
                    </li>
                    <li>
                        <a className={styles.navitem} href="#" > <FontAwesomeIcon className={styles.icons} icon={faUser} color="#A8AEAF" size="2x"/> <Typography sx={text}> &nbsp; Profile </Typography> </a>
                    </li>
                </ul>
            </CardContent>
        </Card>
    )
}
export default Navbar;