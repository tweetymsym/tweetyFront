import React from 'react';
import LoginFormCard from '../../components/login/loginFormCard/LoginFormCard';
import image from '../../public/logo.png'
import Image from 'next/image'


const Login = (props) => {
    return (
        <dev>
            <Image
                src={image} 
                style={{
                    top: '3em',
                    left: '10em'
                }}
                alt='logo'
                className='logoInLogin'/>
            <Image
                src={image} 
                alt='logo'
                style={{
                    top: '3em',
                    right: '10em'
                }}
                className='logoInLogin'/>
            <Image
                style={{
                    top: '40%',
                    left: '10em'
                }}
                src={image} 
                alt='logo'
                className='logoInLogin'/>
            <Image
                style={{
                    top: '40%',
                    right: '10em'
                }}
                src={image} 
                alt='logo'
                className='logoInLogin'/>
            <Image
                style={{
                    bottom: '3em',
                    left: '10em'
                }}
                src={image} 
                alt='logo'
                className='logoInLogin'/>
            <Image
                style={{
                    bottom: '3em',
                    right: '10em'
                }}
                src={image} 
                alt='logo'
                className='logoInLogin'/>
            <LoginFormCard/>
        </dev>
    )
}

export default Login;