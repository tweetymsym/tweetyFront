import { Card, CardContent, Grid, Typography, CardActions, TextField , Button, Divider, Checkbox, FormControlLabel} from '@mui/material';
import GoogleButton from 'react-google-button'
import React, { useState } from 'react';
import styles from '../FormCard.module.css'
import LoginRequest from '../../../api/LoginRequest';
import { useCookies } from 'react-cookie';

const FormCard = (props) => {

    const [credentials, setCredentials] = useState({username: "", password: ""});

    const [token, setToken] = useCookies(["token"]);


    const handleCredentialsChange = (event) => {
        const {name, value} = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    }


    return (
        <Card className={styles.Card}>
            <CardContent>
                <Typography className={styles.Title}>
                    Log In
                </Typography>
                <Grid container alignItems="center" justify="center" direction="column" className={styles.Container}>
                        <Grid item>
                            <TextField
                                className={styles.Field}
                                id="name-input"
                                name="username"
                                label="username"
                                type="text"
                                value={credentials.username}
                                onChange={handleCredentialsChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField  
                                className={styles.Field}
                                id="password-input"
                                name="password"
                                label="password"
                                type="password"
                                value={credentials.password}
                                onChange={handleCredentialsChange}
                            />
                        </Grid>
                        <div className={styles.buttonCheckContainer}>
                            <FormControlLabel
                                className={styles.buttonCheck}
                                control={
                                    <Checkbox 
                                    name="remember" 
                                    />
                                }
                                label="Remember me"
                            />
                            <Button className={styles.Button} onClick={() => LoginRequest({...credentials}, setToken)}> Log In </Button>
                        </div>
                        <Divider variant="middle" className={styles.Devider}>Or</Divider>
                        <Grid item>
                            <CardActions>
                                <GoogleButton label='Continue with google'/>
                            </CardActions>
                        </Grid>
                        <Divider variant="middle" className={styles.Devider}> You don&apos;t have an account ? </Divider>
                        <Grid item>
                            <CardActions>
                                <Button className={styles.Button} href="/account/signup"> Sign Up </Button>
                            </CardActions>
                        </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default FormCard;