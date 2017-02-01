import React, {PropTypes} from 'react'
import styles from './Styles.scss'

Profile.propTypes = {
  name : PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
export default function Profile({name, socialLinkObj, description}){
  const socialLinkElem = socialLinkObj ? <a href={socialLinkObj.url} className={styles.Link} target="_blank"> {"("+socialLinkObj.username+")"}</a> : <noscript />
  return(
    <div className={styles.profileContainer}>
      <p>
        {name}
        {socialLinkElem}
      </p>
      <p>{description}</p>
    </div>
  )
}
