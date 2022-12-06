import React from 'react'
import Image from 'next/image'
import styles from './Background.module.css'
import image from '../../../public/logo.png'

const Background = () => {
    return (
        <dev>
            <Image
                    src={image} 
                    style={{
                        top: '3em',
                        left: '10em'
                    }}
                    alt='logo'
                    className={styles.backgroundImage}/>
                <Image
                    src={image} 
                    alt='logo'
                    style={{
                        top: '3em',
                        right: '10em'
                    }}
                    className={styles.backgroundImage}/>
                <Image
                    style={{
                        top: '40%',
                        left: '10em'
                    }}
                    src={image} 
                    alt='logo'
                    className={styles.backgroundImage}/>
                <Image
                    style={{
                        top: '40%',
                        right: '10em'
                    }}
                    src={image} 
                    alt='logo'
                    className={styles.backgroundImage}/>
                <Image
                    style={{
                        bottom: '3em',
                        left: '10em'
                    }}
                    src={image} 
                    alt='logo'
                    className={styles.backgroundImage}/>
                <Image
                    style={{
                        bottom: '3em',
                        right: '10em'
                    }}
                    src={image} 
                    alt='logo'
                    className={styles.backgroundImage}/>
        </dev>
    )
}

export default Background;