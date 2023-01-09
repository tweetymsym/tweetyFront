import React from 'react'
import styles from './userCard.module.css'
import styles from
function UserCard({user}) {
  return (
    <div className={styles.userCard} >
    {/* circular Image */}
    <div className={styles.userpicture} >
    <Image
        className={styles.userpicture}
        alt={user.username}
        src={user.userpicture}
        width={50}
        height={50}
    />      
    </div>
    {/* username */}
    <div className={styles.username} >
    <Typography sx=""   > {user.username} </Typography>
    </div>


       

     </div>
    
  );
}

export default UserCard
