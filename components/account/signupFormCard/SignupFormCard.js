import { Card, CardContent, Grid, Typography, CardActions, TextField , Button, Divider} from '@mui/material';
import GoogleButton from 'react-google-button'
import React, { useState } from 'react';
import styles from '../FormCard.module.css'
import CreateAccountRequest from '../../../api/CreateAccountRequest';

const SignupFormCard = (props) => {

    const [personalInfos, setPersonalInfos] = useState({
        userName: "", 
        firstName: "",
        lastName: "",
        password: "", 
        confirmPassword: "",
        email: ""
    });

    const handlePersonalInfosChange = (event) => {
        const {name, value} = event.target;
        setPersonalInfos({
            ...personalInfos,
            [name]: value,
        });
    }

    return (
        <Card className={styles.Card}>
            <CardContent>
                <Typography className={styles.Title}>
                    Sign Up
                </Typography>
                <Grid container alignItems="center" justify="center" direction="column" className={styles.Container}>
                        <Grid item>
                            <TextField
                                className={styles.Field}
                                id="firstname-input"
                                name="firstName"
                                label="first name"
                                type="text"
                                value={personalInfos.firstName}
                                onChange={handlePersonalInfosChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                className={styles.Field}
                                id="lastname-input"
                                name="lastName"
                                label="last name"
                                type="text"
                                value={personalInfos.lastName}
                                onChange={handlePersonalInfosChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                className={styles.Field}
                                id="username-input"
                                name="userName"
                                label="username"
                                type="text"
                                value={personalInfos.userName}
                                onChange={handlePersonalInfosChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                className={styles.Field}
                                id="email-input"
                                name="email"
                                label="email"
                                type="text"
                                value={personalInfos.email}
                                onChange={handlePersonalInfosChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField  
                                className={styles.Field}
                                id="password-input"
                                name="password"
                                label="password"
                                type="password"
                                value={personalInfos.password}
                                onChange={handlePersonalInfosChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField  
                                className={styles.Field}
                                id="confirm-password-input"
                                name="confirmPassword"
                                label="Confirm password"
                                type="password"
                                value={personalInfos.confirmPassword}
                                onChange={handlePersonalInfosChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button className={styles.Button} onClick={() => CreateAccountRequest({...personalInfos})}> Sign up </Button>
                        </Grid>
                        <Divider variant="middle" className={styles.Devider}>Or</Divider>
                        <Grid item>
                            <CardActions>
                                <GoogleButton label='Sign up with google'/>
                            </CardActions>
                        </Grid>
                        <Divider variant="middle" className={styles.Devider}> You already have an account ? </Divider>
                        <Grid item>
                            <CardActions>
                                <Button className={styles.Button} href="/account/login"> Log In </Button>
                            </CardActions>
                        </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default SignupFormCard;