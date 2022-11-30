import { Card, CardContent, Grid, Typography, CardActions, TextField , Button, Divider, Checkbox, FormControlLabel} from '@mui/material';
import GoogleButton from 'react-google-button'
import React, { useState } from 'react';
import styles from './LoginFormCard.module.css'

const LoginFormCard = (props) => {

    const [credentials, setCredentials] = useState({username: "", password: "", remember: false});

    const handleCredentialsChange = (event) => {
        const {name, value} = event.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    }

    const handleRememberMeCheckBoxChange = (event) => {
        setCredentials({
            ...credentials,
            remember: !credentials.remember,
        });
    }

    return (
        <Card className={styles.loginCard}>
            <CardContent>
                <Typography className={styles.loginTitle}>
                    Log In
                </Typography>
                <Grid container alignItems="center" justify="center" direction="column" className={styles.loginContainer}>
                        <Grid item>
                            <TextField
                                className={styles.loginField}
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
                                className={styles.loginField}
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
                                    checked={credentials.remember} 
                                    onChange={handleRememberMeCheckBoxChange} 
                                    name="remember" 
                                    />
                                }
                                label="Remember me"
                            />
                            <Button className={styles.loginButton}> Login </Button>
                        </div>
                        <Divider variant="middle" className={styles.loginDevider}>Or</Divider>
                        <Grid item>
                            <CardActions>
                                <GoogleButton label='Continue with google'/>
                            </CardActions>
                        </Grid>
                        <Divider variant="middle" className={styles.loginDevider}> You don&apos;t have an account ? </Divider>
                        <Grid item>
                            <CardActions>
                                <Button className={styles.loginButton}> Sign Up </Button>
                            </CardActions>
                        </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default LoginFormCard;