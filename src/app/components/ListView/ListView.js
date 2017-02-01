import React, {PropTypes} from 'react'
import styles from './styles.scss'

ListView.propTypes = {
  sectionTitle : PropTypes.string.isRequired,
  listItems : PropTypes.array.isRequired
}

function ListItemWithLink({ name, index}){
  const commaElm = index > 0 ? <span className={styles.whiteColor}>{','}</span> : <noscript />
  return (
    <span>{commaElm}<span className={styles.listItems}> {name}</span></span>
  )
}

export default function ListView({sectionTitle,listItems}){

  return(
    <div>
      <p> {sectionTitle}</p>
      <p>
        <span className={styles.whiteColor}>{"[ "}</span>
          {/* { spaced } */}
          {listItems.map((name,index) => (
            <ListItemWithLink
              name={name}
              index={index}
              key={index}
            />
          ))}

        <span className={styles.whiteColor}>{" ]"}</span>
      </p>
    </div>
  )
}
